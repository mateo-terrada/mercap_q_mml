/* ============================================================
   app.js
   Lógica principal: navegación entre pantallas, armado de
   sesiones de práctica, flujo de pregunta → respuesta → feedback,
   y actualización de estadísticas.
   ============================================================ */

(function () {
  "use strict";

  // ---------- Estado en memoria de la sesión actual ----------
  let estado = cargarProgreso();
  let sesionActual = null; // { preguntas: [...], indice, correctas, rachaSesion, mejorRachaSesion, inicio, respuestasDeSesion: [] }

  const CATEGORIAS_ORDEN = [
    "Renta Fija",
    "Renta Variable",
    "Operatoria de Mercado",
    "Portafolios y Asesoramiento",
    "Macro Argentina",
    "Preguntas Trampa"
  ];

  const ICONO_CATEGORIA = {
    "Renta Fija": "RF",
    "Renta Variable": "RV",
    "Operatoria de Mercado": "OP",
    "Portafolios y Asesoramiento": "PF",
    "Macro Argentina": "MA",
    "Preguntas Trampa": "★"
  };

  // ---------- Helpers generales ----------

  function $(selector, scope) { return (scope || document).querySelector(selector); }
  function $all(selector, scope) { return Array.from((scope || document).querySelectorAll(selector)); }

  function mezclar(array) {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function mostrarPantalla(nombre) {
    $all(".screen").forEach(s => s.hidden = (s.dataset.screen !== nombre));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- Selección inteligente de preguntas ----------
  // Prioriza preguntas nunca vistas o falladas la última vez,
  // para que la práctica diaria refuerce lo que más falta dominar
  // en vez de repetir al azar puro.

  function elegirPreguntas(filtroCategorias, filtroDificultad, cantidad) {
    let candidatas = BANCO_PREGUNTAS.filter(p => {
      const pasaCategoria = !filtroCategorias || filtroCategorias.length === 0 || filtroCategorias.includes(p.categoria);
      const pasaDificultad = !filtroDificultad || filtroDificultad === "todas" || p.dificultad === filtroDificultad;
      return pasaCategoria && pasaDificultad;
    });

    if (candidatas.length === 0) return [];

    // Le damos "peso" a cada pregunta: las nunca vistas o falladas pesan más
    const conPeso = candidatas.map(p => {
      const r = estado.respuestas[p.id];
      let peso = 10; // nunca vista: prioridad alta
      if (r) {
        peso = r.correcta ? 2 : 14; // si la falló la última vez, prioridad muy alta
      }
      return { pregunta: p, peso };
    });

    // Mezclamos y luego ordenamos por peso descendente con algo de aleatoriedad
    const mezclado = mezclar(conPeso).sort((a, b) => (b.peso + Math.random() * 4) - (a.peso + Math.random() * 4));

    return mezclado.slice(0, Math.min(cantidad, mezclado.length)).map(x => x.pregunta);
  }

  // ---------- Home: stats generales ----------

  function renderHome() {
    $("#statTotalAnswered").textContent = estado.totalRespondidas;
    const acc = calcularAccuracyGlobal(estado);
    $("#statAccuracy").textContent = acc === null ? "—" : acc + "%";
    $("#statBestStreak").textContent = estado.mejorRacha;

    renderCategoryGrid();
    renderTicker();

    const resumeBanner = $("#resumeBanner");
    if (estado.sesionPendiente && estado.sesionPendiente.preguntasRestantes && estado.sesionPendiente.preguntasRestantes.length > 0) {
      resumeBanner.hidden = false;
    } else {
      resumeBanner.hidden = true;
    }
  }

  function renderCategoryGrid() {
    const dominio = calcularDominioPorCategoria(estado, BANCO_PREGUNTAS);
    const grid = $("#categoryGrid");
    grid.innerHTML = "";

    CATEGORIAS_ORDEN.forEach(cat => {
      const d = dominio[cat] || { total: 0, vistas: 0, correctas: 0 };
      const pct = d.vistas > 0 ? Math.round((d.correctas / d.vistas) * 100) : 0;

      const card = document.createElement("button");
      card.className = "category-card";
      card.type = "button";
      card.innerHTML = `
        <div class="category-card-top">
          <span class="category-name">${cat}</span>
          <span class="category-count">${ICONO_CATEGORIA[cat] || ""}</span>
        </div>
        <div class="category-bar-track">
          <div class="category-bar-fill" style="width: ${d.vistas > 0 ? pct : 0}%"></div>
        </div>
        <div class="category-meta">
          <span>${d.vistas > 0 ? pct + "% de aciertos" : "Sin practicar aún"}</span>
          <span>${d.vistas}/${d.total} vistas</span>
        </div>
      `;
      card.addEventListener("click", () => {
        irASetupConCategoria(cat);
      });
      grid.appendChild(card);
    });
  }

  function renderTicker() {
    const track = $("#tickerTrack");
    const dominio = calcularDominioPorCategoria(estado, BANCO_PREGUNTAS);

    const items = [];
    items.push({ label: "RACHA ACTUAL", value: estado.rachaActual, dir: estado.rachaActual > 0 ? "up" : "flat" });
    items.push({ label: "MEJOR RACHA", value: estado.mejorRacha, dir: "flat" });
    const acc = calcularAccuracyGlobal(estado);
    items.push({ label: "ACIERTOS TOTALES", value: acc === null ? "—" : acc + "%", dir: acc !== null && acc >= 70 ? "up" : (acc !== null && acc < 50 ? "down" : "flat") });

    CATEGORIAS_ORDEN.forEach(cat => {
      const d = dominio[cat];
      if (d && d.vistas > 0) {
        const pct = Math.round((d.correctas / d.vistas) * 100);
        items.push({ label: cat.toUpperCase(), value: pct + "%", dir: pct >= 70 ? "up" : (pct < 50 ? "down" : "flat") });
      }
    });

    const arrowFor = dir => dir === "up" ? "▲" : (dir === "down" ? "▼" : "•");
    const classFor = dir => dir === "up" ? "ticker-up" : (dir === "down" ? "ticker-down" : "ticker-flat");

    const itemsHtml = items.map(it =>
      `<span class="ticker-item"><span class="ticker-label">${it.label}</span><span class="${classFor(it.dir)}">${arrowFor(it.dir)} ${it.value}</span></span>`
    ).join("");

    // duplicamos el contenido para el efecto de scroll infinito sin cortes
    track.innerHTML = itemsHtml + itemsHtml;
  }

  // ---------- Setup screen ----------

  let setupSeleccion = {
    categorias: [],
    dificultad: "todas",
    longitud: 12
  };

  function renderSetupChips() {
    const catChips = $("#categoryChips");
    catChips.innerHTML = "";
    CATEGORIAS_ORDEN.forEach(cat => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip" + (setupSeleccion.categorias.includes(cat) ? " chip-active" : "");
      chip.textContent = cat;
      chip.addEventListener("click", () => {
        if (setupSeleccion.categorias.includes(cat)) {
          setupSeleccion.categorias = setupSeleccion.categorias.filter(c => c !== cat);
        } else {
          setupSeleccion.categorias.push(cat);
        }
        renderSetupChips();
      });
      catChips.appendChild(chip);
    });
  }

  function irASetupConCategoria(categoria) {
    setupSeleccion = { categorias: [categoria], dificultad: "todas", longitud: 12 };
    mostrarPantalla("setup");
    renderSetupChips();
    sincronizarChipsEstaticos();
  }

  function sincronizarChipsEstaticos() {
    $all("#difficultyChips .chip").forEach(c => {
      c.classList.toggle("chip-active", c.dataset.difficulty === setupSeleccion.dificultad);
    });
    $all("#lengthChips .chip").forEach(c => {
      c.classList.toggle("chip-active", parseInt(c.dataset.length, 10) === setupSeleccion.longitud);
    });
  }

  // ---------- Armado y ejecución de sesión ----------

  function iniciarSesion(preguntas, avisoSiHayMenos) {
    if (preguntas.length === 0) {
      alert("No hay preguntas disponibles con esos filtros. Probá con otra combinación.");
      return;
    }
    if (avisoSiHayMenos && preguntas.length < avisoSiHayMenos) {
      alert(`Con esos filtros solo hay ${preguntas.length} pregunta${preguntas.length === 1 ? "" : "s"} disponible${preguntas.length === 1 ? "" : "s"}, así que la sesión va a ser más corta de lo pedido.`);
    }
    sesionActual = {
      preguntas,
      indice: 0,
      correctas: 0,
      rachaSesion: 0,
      mejorRachaSesion: 0,
      inicio: Date.now(),
      detalleRespuestas: [] // { pregunta, fueCorrecta }
    };
    mostrarPantalla("session");
    renderPreguntaActual();
  }

  function iniciarSesionRapida() {
    const preguntas = elegirPreguntas(null, "todas", 12);
    iniciarSesion(preguntas);
  }

  function iniciarSesionConfigurada() {
    const cats = setupSeleccion.categorias.length > 0 ? setupSeleccion.categorias : null;
    const preguntas = elegirPreguntas(cats, setupSeleccion.dificultad, setupSeleccion.longitud);
    iniciarSesion(preguntas, setupSeleccion.longitud);
  }

  function preguntaActual() {
    return sesionActual.preguntas[sesionActual.indice];
  }

  function renderPreguntaActual() {
    const p = preguntaActual();
    const total = sesionActual.preguntas.length;
    const idx = sesionActual.indice;

    $("#sessionProgressLabel").textContent = `${idx + 1} / ${total}`;
    $("#sessionProgressFill").style.width = `${(idx / total) * 100}%`;
    $("#sessionScore").textContent = `${sesionActual.correctas} ✓`;

    $("#qCategory").textContent = p.categoria;
    $("#qDifficulty").textContent = p.dificultad;
    $("#qSubtema").textContent = p.subtema || "";
    $("#qEnunciado").textContent = p.enunciado;

    $("#feedbackPanel").hidden = true;
    $("#feedbackPanel").className = "feedback-panel";

    if (p.tipo === "multiple_choice") {
      $("#optionsList").hidden = false;
      $("#openCaseArea").hidden = true;
      renderOpciones(p);
    } else {
      $("#optionsList").hidden = true;
      $("#openCaseArea").hidden = false;
      $("#openCaseTextarea").value = "";
      $("#openCaseTextarea").disabled = false;
      $("#revealModelAnswer").hidden = false;
      $("#revealModelAnswer").disabled = false;
    }
  }

  function renderOpciones(p) {
    const letras = ["A", "B", "C", "D"];
    const list = $("#optionsList");
    list.innerHTML = "";
    p.opciones.forEach((texto, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.type = "button";
      btn.innerHTML = `<span class="option-letter">${letras[i]}</span><span>${texto}</span>`;
      btn.addEventListener("click", () => responderMultipleChoice(i, p));
      list.appendChild(btn);
    });
  }

  function responderMultipleChoice(indiceElegido, p) {
    const correcta = p.respuesta_correcta;
    const fueCorrecta = indiceElegido === correcta;

    $all(".option-btn").forEach((btn, i) => {
      btn.disabled = true;
      if (i === correcta) btn.classList.add("is-correct");
      if (i === indiceElegido && !fueCorrecta) btn.classList.add("is-incorrect");
    });

    registrarRespuesta(p, fueCorrecta);
    mostrarFeedback(fueCorrecta, p.explicacion, fueCorrecta ? "correcto" : "incorrecto");
  }

  function responderCasoAbierto(p) {
    $("#openCaseTextarea").disabled = true;
    $("#revealModelAnswer").hidden = true;
    // En los casos abiertos no hay "correcto/incorrecto" automático:
    // contamos como practicada, y el usuario se autoevalúa con la rúbrica.
    registrarRespuesta(p, null);
    mostrarFeedback(null, p.respuesta_modelo, "neutral");
  }

  function registrarRespuesta(p, fueCorrecta) {
    sesionActual.detalleRespuestas.push({ pregunta: p, fueCorrecta });

    if (fueCorrecta === true) {
      sesionActual.correctas += 1;
      sesionActual.rachaSesion += 1;
      sesionActual.mejorRachaSesion = Math.max(sesionActual.mejorRachaSesion, sesionActual.rachaSesion);

      estado.rachaActual += 1;
      estado.mejorRacha = Math.max(estado.mejorRacha, estado.rachaActual);
    } else if (fueCorrecta === false) {
      sesionActual.rachaSesion = 0;
      estado.rachaActual = 0;
    }
    // fueCorrecta === null (caso abierto): no afecta la racha

    if (fueCorrecta !== null) {
      estado.totalRespondidas += 1;
      if (fueCorrecta) estado.totalCorrectas += 1;
    }

    estado.respuestas[p.id] = {
      correcta: fueCorrecta === null ? (estado.respuestas[p.id] ? estado.respuestas[p.id].correcta : true) : fueCorrecta,
      vecesVista: (estado.respuestas[p.id]?.vecesVista || 0) + 1,
      ultimaVez: Date.now()
    };

    guardarProgreso(estado);
    $("#streakCount").textContent = estado.rachaActual;
  }

  function mostrarFeedback(fueCorrecta, texto, modo) {
    const panel = $("#feedbackPanel");
    panel.hidden = false;
    panel.className = "feedback-panel is-" + (modo === "correcto" ? "correct" : modo === "incorrecto" ? "incorrect" : "neutral");

    $("#feedbackIcon").textContent = modo === "correcto" ? "✓" : modo === "incorrecto" ? "✕" : "i";
    $("#feedbackTitle").textContent =
      modo === "correcto" ? "Correcto" :
      modo === "incorrecto" ? "No era esa" :
      "Respuesta modelo";
    $("#feedbackBody").textContent = texto;

    $("#sessionScore").textContent = `${sesionActual.correctas} ✓`;

    if (typeof panel.scrollIntoView === "function") {
      panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }

  function siguientePregunta() {
    sesionActual.indice += 1;
    if (sesionActual.indice >= sesionActual.preguntas.length) {
      terminarSesion();
    } else {
      renderPreguntaActual();
    }
  }

  function terminarSesion() {
    estado.sesionPendiente = null;
    estado.ultimaSesionFecha = Date.now();
    guardarProgreso(estado);

    const total = sesionActual.preguntas.length;
    const correctas = sesionActual.correctas;
    const pct = Math.round((correctas / total) * 100);
    const minutos = Math.max(1, Math.round((Date.now() - sesionActual.inicio) / 60000));

    $("#resultsScore").textContent = `${correctas}/${total}`;
    $("#resultsStreak").textContent = sesionActual.mejorRachaSesion;
    $("#resultsTime").textContent = `${minutos} min`;

    let titulo, lede;
    if (pct >= 85) {
      titulo = "Excelente sesión.";
      lede = "Dominás bien estos temas. Mañana probá una categoría que te cueste más.";
    } else if (pct >= 60) {
      titulo = "Buen avance.";
      lede = "Vas agarrando soltura. Repasá lo que falló abajo y volvé mañana.";
    } else {
      titulo = "Sesión para aprender, no para aprobar.";
      lede = "Esto es justo lo que sirve: encontrar lo que no tenés tan claro todavía. Repasá la explicación de cada una.";
    }
    $("#resultsTitle").textContent = titulo;
    $("#resultsLede").textContent = lede;

    // Repaso de falladas
    const falladas = sesionActual.detalleRespuestas.filter(d => d.fueCorrecta === false);
    const reviewList = $("#reviewList");
    const reviewSection = $("#resultsReview");
    if (falladas.length === 0) {
      reviewSection.hidden = true;
    } else {
      reviewSection.hidden = false;
      reviewList.innerHTML = "";
      falladas.forEach(d => {
        const item = document.createElement("div");
        item.className = "review-item";
        item.innerHTML = `<strong>${d.pregunta.categoria} · ${d.pregunta.subtema || ""}</strong>${d.pregunta.enunciado}`;
        reviewList.appendChild(item);
      });
    }

    mostrarPantalla("results");
    renderHome(); // refresca stats/ticker para cuando vuelva al inicio
  }

  function salirDeSesion() {
    if (!sesionActual) {
      mostrarPantalla("home");
      return;
    }
    const restantes = sesionActual.preguntas.slice(sesionActual.indice);
    if (restantes.length > 0 && sesionActual.indice > 0) {
      const confirmar = confirm("¿Salir de la práctica? Vamos a guardar dónde quedaste para que puedas continuar después.");
      if (!confirmar) return;
      estado.sesionPendiente = { preguntasRestantes: restantes.map(p => p.id) };
      guardarProgreso(estado);
    }
    sesionActual = null;
    mostrarPantalla("home");
    renderHome();
  }

  function retomarSesionPendiente() {
    if (!estado.sesionPendiente) return;
    const ids = estado.sesionPendiente.preguntasRestantes || [];
    const preguntas = ids.map(id => BANCO_PREGUNTAS.find(p => p.id === id)).filter(Boolean);
    estado.sesionPendiente = null;
    guardarProgreso(estado);
    iniciarSesion(preguntas);
  }

  // ---------- Stats screen ----------

  function renderStatsScreen() {
    const dominio = calcularDominioPorCategoria(estado, BANCO_PREGUNTAS);
    const grid = $("#statsGrid");
    grid.innerHTML = "";

    CATEGORIAS_ORDEN.forEach(cat => {
      const d = dominio[cat] || { total: 0, vistas: 0, correctas: 0 };
      const pct = d.vistas > 0 ? Math.round((d.correctas / d.vistas) * 100) : null;

      const card = document.createElement("div");
      card.className = "stats-card";
      card.innerHTML = `
        <div class="stats-card-top">
          <span class="stats-card-name">${cat}</span>
          <span class="stats-card-pct">${pct === null ? "—" : pct + "%"}</span>
        </div>
        <div class="category-bar-track">
          <div class="category-bar-fill" style="width: ${pct || 0}%"></div>
        </div>
        <div class="stats-card-detail">${d.vistas} de ${d.total} preguntas practicadas · ${d.correctas} correctas</div>
      `;
      grid.appendChild(card);
    });
  }

  // ---------- Inicialización y listeners ----------

  function init() {
    renderHome();

    $("#startQuickSession").addEventListener("click", iniciarSesionRapida);
    $("#browseCategories").addEventListener("click", () => {
      setupSeleccion = { categorias: [], dificultad: "todas", longitud: 12 };
      mostrarPantalla("setup");
      renderSetupChips();
      sincronizarChipsEstaticos();
    });
    $("#resumeSessionBtn").addEventListener("click", retomarSesionPendiente);
    $("#statsBtn").addEventListener("click", () => {
      renderStatsScreen();
      mostrarPantalla("stats");
    });

    $all("[data-back-to]").forEach(btn => {
      btn.addEventListener("click", () => {
        mostrarPantalla(btn.dataset.backTo);
        renderHome();
      });
    });

    $all("#difficultyChips .chip").forEach(chip => {
      chip.addEventListener("click", () => {
        setupSeleccion.dificultad = chip.dataset.difficulty;
        sincronizarChipsEstaticos();
      });
    });
    $all("#lengthChips .chip").forEach(chip => {
      chip.addEventListener("click", () => {
        setupSeleccion.longitud = parseInt(chip.dataset.length, 10);
        sincronizarChipsEstaticos();
      });
    });

    $("#startConfiguredSession").addEventListener("click", iniciarSesionConfigurada);
    $("#exitSessionBtn").addEventListener("click", salirDeSesion);
    $("#nextQuestionBtn").addEventListener("click", siguientePregunta);
    $("#revealModelAnswer").addEventListener("click", () => responderCasoAbierto(preguntaActual()));

    $("#playAgainBtn").addEventListener("click", () => {
      mostrarPantalla("setup");
      renderSetupChips();
      sincronizarChipsEstaticos();
    });
    $("#backHomeBtn").addEventListener("click", () => {
      mostrarPantalla("home");
      renderHome();
    });

    // Modal de borrado de progreso
    // Nota: .modal-overlay define display:flex en su CSS, así que alternamos
    // tanto el atributo `hidden` como `style.display` para evitar cualquier
    // ambigüedad de cascada entre navegadores.
    function abrirModalReset() {
      const modal = $("#confirmModal");
      modal.hidden = false;
      modal.style.display = "flex";
    }
    function cerrarModalReset() {
      const modal = $("#confirmModal");
      modal.hidden = true;
      modal.style.display = "none";
    }

    $("#resetProgressBtn").addEventListener("click", abrirModalReset);
    $("#cancelResetBtn").addEventListener("click", cerrarModalReset);
    $("#confirmResetBtn").addEventListener("click", () => {
      borrarProgreso();
      estado = cargarProgreso();
      cerrarModalReset();
      mostrarPantalla("home");
      renderHome();
    });

    mostrarPantalla("home");
  }

  document.addEventListener("DOMContentLoaded", init);
})();
