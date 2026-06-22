/* ============================================================
   storage.js
   Maneja todo lo que se guarda en el navegador (localStorage):
   progreso por categoría, racha, sesión sin terminar, etc.
   No requiere ningún servidor: vive enteramente en el navegador
   de quien abre la página.
   ============================================================ */

const STORAGE_KEY = "elEscritorio_progreso_v1";

// Pequeño helper para clonar objetos planos sin depender de structuredClone
// (que no está disponible en absolutamente todos los navegadores/entornos).
function clonarObjeto(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const ESTADO_INICIAL = {
  // Por cada pregunta respondida guardamos si la última vez acertó o no.
  // Esto permite calcular % de dominio por categoría y por pregunta puntual.
  respuestas: {}, // { [preguntaId]: { correcta: bool, vecesVista: n, ultimaVez: timestamp } }

  rachaActual: 0,
  mejorRacha: 0,

  totalRespondidas: 0,
  totalCorrectas: 0,

  sesionPendiente: null, // guarda una sesión sin terminar para poder retomarla

  ultimaSesionFecha: null
};

function cargarProgreso() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return clonarObjeto(ESTADO_INICIAL);
    const parsed = JSON.parse(raw);
    // merge defensivo por si en el futuro agregamos campos nuevos
    return Object.assign(clonarObjeto(ESTADO_INICIAL), parsed);
  } catch (e) {
    console.warn("No se pudo leer el progreso guardado, empezando de cero.", e);
    return clonarObjeto(ESTADO_INICIAL);
  }
}

function guardarProgreso(estado) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
    return true;
  } catch (e) {
    console.warn("No se pudo guardar el progreso (¿localStorage lleno o deshabilitado?).", e);
    return false;
  }
}

function borrarProgreso() {
  localStorage.removeItem(STORAGE_KEY);
}

/* ---- Helpers de cálculo sobre el estado ---- */

function calcularDominioPorCategoria(estado, banco) {
  const categorias = {};
  banco.forEach(p => {
    if (!categorias[p.categoria]) {
      categorias[p.categoria] = { total: 0, vistas: 0, correctas: 0 };
    }
    categorias[p.categoria].total += 1;
    const r = estado.respuestas[p.id];
    if (r) {
      categorias[p.categoria].vistas += 1;
      if (r.correcta) categorias[p.categoria].correctas += 1;
    }
  });
  return categorias;
}

function calcularAccuracyGlobal(estado) {
  if (estado.totalRespondidas === 0) return null;
  return Math.round((estado.totalCorrectas / estado.totalRespondidas) * 100);
}
