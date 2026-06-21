# El Escritorio — Práctica diaria de mercado de capitales

Aplicación web de práctica diaria para reforzar conceptos de mercado de capitales
argentino: renta fija, renta variable, operatoria, macro y casos de cliente.

No necesita servidor, base de datos ni instalación. Es HTML, CSS y JS puro: el progreso
se guarda en el navegador de quien la usa (localStorage), por dispositivo.

## Estructura del proyecto

```
banca_practica/
├── index.html          → estructura de todas las pantallas
├── css/
│   └── styles.css      → toda la identidad visual
├── js/
│   ├── preguntas.js    → el banco de 115 preguntas (datos)
│   ├── storage.js      → guardado/lectura de progreso en localStorage
│   └── app.js          → lógica de la app (navegación, sesiones, scoring)
└── README.md
```

## Cómo probarla en tu computadora

No hace falta nada especial. Dos formas:

**Opción A — la más simple:** doble clic en `index.html` y se abre en el navegador.
(Algunas funciones de fuentes externas pueden tardar un toque la primera vez si no
hay internet, pero todo el resto funciona offline.)

**Opción B — con un servidor local** (opcional, solo si la Opción A da algún problema
raro en tu navegador):
```
cd banca_practica
python3 -m http.server 8000
```
y abrís `http://localhost:8000` en el navegador.

## Cómo publicarla en GitHub Pages (gratis)

1. Creá un repositorio nuevo en GitHub (puede ser privado o público).
2. Subí el contenido de esta carpeta (`index.html`, `css/`, `js/`) a la raíz del repo.
3. En el repo: **Settings → Pages → Source** → elegí la rama `main` y carpeta `/ (root)`.
4. Guardá. GitHub te va a dar una URL tipo `https://tu-usuario.github.io/nombre-repo/`.
5. Esa URL ya es la app funcionando, accesible desde cualquier dispositivo.

Importante: el progreso guardado es **por navegador y dispositivo**. Si la abre desde
el celular y después desde la compu, va a ver dos progresos distintos (cada uno con su
propio historial). Esto es así porque no usamos ninguna cuenta de usuario ni servidor;
si en el futuro querés que el progreso se sincronice entre dispositivos, hay que sumar
un backend (lo podemos charlar más adelante si hace falta).

## Cómo agregar más preguntas más adelante

Todas las preguntas viven en `js/preguntas.js`, en un único array de objetos. Cada
pregunta sigue este formato:

**Multiple choice:**
```js
{
  "id": "RF-MC-099",                  // único, no repetir
  "categoria": "Renta Fija",          // una de las 6 categorías existentes
  "subtema": "Duration",
  "dificultad": "intermedia",         // basica | intermedia | avanzada
  "tipo": "multiple_choice",
  "enunciado": "...",
  "opciones": ["...", "...", "...", "..."],  // exactamente 4
  "respuesta_correcta": 1,            // índice 0-3 de la opción correcta
  "explicacion": "..."
}
```

**Caso abierto:**
```js
{
  "id": "RF-CASO-099",
  "categoria": "Renta Fija",
  "subtema": "...",
  "dificultad": "avanzada",
  "tipo": "caso_abierto",
  "enunciado": "...",
  "respuesta_modelo": "..."           // rúbrica con puntos clave a evaluar
}
```

Para sumar preguntas: agregá objetos nuevos al array `BANCO_PREGUNTAS` en
`js/preguntas.js`, respetando el formato de arriba. No hace falta tocar ningún otro
archivo — la app las toma automáticamente.

## Categorías actuales

- Renta Fija
- Renta Variable
- Operatoria de Mercado
- Portafolios y Asesoramiento
- Macro Argentina
- Preguntas Trampa (mezcla de categorías, casos que parecen pavada y no lo son)

## Cómo funciona la selección de preguntas

Cada sesión prioriza preguntas que la usuaria nunca vio o que falló la última vez,
por sobre las que ya domina. Esto significa que la práctica diaria tiende naturalmente
a reforzar lo que más hace falta, en vez de repetir al azar puro.
