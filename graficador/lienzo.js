// =============================================================
//  lienzo.js — De texto a matriz, y de matriz a imagen
//
//  Este archivo ya está hecho. No necesitas modificarlo en los
//  workshops, pero léelo: aquí se ve cómo cada número de la
//  matriz se convierte en un pixel.
// =============================================================

const LADO_MAXIMO = 512;     // tamaño (en px) que busca el modo automático
const LIENZO_MAXIMO = 4096;  // límite de seguridad del navegador

/** Lleva un valor al rango de un pixel: entero entre 0 y 255. */
function recortar(v) {
  return Math.max(0, Math.min(255, Math.round(v)));
}

/**
 * Escribe un número: los enteros tal cual; los que tienen decimales,
 * con a lo más `decimales` cifras.   3 → "3"    0.318181 → "0.32"
 */
function formatear(v, decimales = 2) {
  return Number.isInteger(v) ? String(v) : String(Number(v.toFixed(decimales)));
}

/**
 * Convierte texto plano en matriz.
 * Un renglón por línea; los números se separan con espacios o comas.
 *
 *     "0 255 0\n255 0 255"   →   [[0, 255, 0], [255, 0, 255]]
 */
function textoAMatriz(texto) {
  const lineas = texto.split(/\r?\n/)
                      .map(linea => linea.trim())
                      .filter(linea => linea !== '');

  if (lineas.length === 0) {
    throw new Error('El texto está vacío: no hay ninguna matriz que dibujar.');
  }

  const M = lineas.map((linea, i) =>
    linea.split(/[\s,;]+/).map(dato => {
      const v = Number(dato);
      if (Number.isNaN(v)) {
        throw new Error(`Renglón ${i + 1}: "${dato}" no es un número.`);
      }
      return v;
    })
  );

  const n = M[0].length;
  M.forEach((renglon, i) => {
    if (renglon.length !== n) {
      throw new Error(`El renglón ${i + 1} tiene ${renglon.length} columnas y el renglón 1 tiene ${n}. ` +
                      'Todos los renglones de una matriz deben tener el mismo número de columnas.');
    }
  });

  return M;
}

/** Convierte una matriz en texto plano (lo contrario de textoAMatriz). */
function matrizATexto(M) {
  return M.map(renglon => renglon.map(v => formatear(v, 4)).join(' ')).join('\n');
}

/** Regresa [mínimo, máximo] de los valores de la matriz. */
function rango(M) {
  let min = Infinity, max = -Infinity;
  for (const renglon of M) {
    for (const v of renglon) {
      if (v < min) min = v;
      if (v > max) max = v;
    }
  }
  return [min, max];
}

/**
 * Tamaño de pixel automático: el bloque más grande que cabe en LADO_MAXIMO.
 *
 *     8 × 8      →  64 px por celda   (bloques de 64 × 64)
 *     16 × 16    →  32 px
 *     256 × 256  →   2 px
 *     600 × 600  →   1 px             (1:1, las grandes no se encogen)
 */
function pixelAutomatico(m, n) {
  return Math.max(1, Math.floor(LADO_MAXIMO / Math.max(m, n)));
}

/** Nunca dejes que el lienzo pase de LIENZO_MAXIMO px por lado. */
function pixelPermitido(tamPixel, m, n) {
  return Math.max(1, Math.min(tamPixel, Math.floor(LIENZO_MAXIMO / Math.max(m, n))));
}

/**
 * Dibuja la matriz M en el <canvas>.
 *
 *   opciones.tamPixel    → cada celda se dibuja como un cuadrado de tamPixel × tamPixel
 *   opciones.cuadricula  → líneas entre celdas (solo si tamPixel ≥ 4)
 *   opciones.valores     → escribe el número de cada celda (solo si tamPixel ≥ 20)
 */
function dibujarMatriz(lienzo, M, opciones) {
  const [m, n] = orden(M);
  const k = opciones.tamPixel;

  // 1) Imagen 1:1 — un pixel por cada elemento de la matriz.
  //    ImageData guarda 4 números por pixel: rojo, verde, azul, opacidad.
  const auxiliar = document.createElement('canvas');
  auxiliar.width = n;
  auxiliar.height = m;
  const ctxAux = auxiliar.getContext('2d');
  const imagen = ctxAux.createImageData(n, m);

  for (let i = 0; i < m; i++) {            // renglón  →  y
    for (let j = 0; j < n; j++) {          // columna  →  x
      const v = recortar(M[i][j]);
      const p = (i * n + j) * 4;
      imagen.data[p]     = v;              // rojo
      imagen.data[p + 1] = v;              // verde      (los tres iguales = gris)
      imagen.data[p + 2] = v;              // azul
      imagen.data[p + 3] = 255;            // opacidad
    }
  }
  ctxAux.putImageData(imagen, 0, 0);

  // 2) Ampliar ×k SIN suavizar: cada pixel se vuelve un bloque k × k.
  lienzo.width = n * k;
  lienzo.height = m * k;
  const ctx = lienzo.getContext('2d');
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(auxiliar, 0, 0, n * k, m * k);

  // 3) Cuadrícula: una línea en cada múltiplo de k.
  if (opciones.cuadricula && k >= 4) {
    ctx.strokeStyle = 'rgba(128, 128, 128, 0.6)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let j = 0; j <= n; j++) {
      ctx.moveTo(j * k + 0.5, 0);
      ctx.lineTo(j * k + 0.5, m * k);
    }
    for (let i = 0; i <= m; i++) {
      ctx.moveTo(0, i * k + 0.5);
      ctx.lineTo(n * k, i * k + 0.5);
    }
    ctx.stroke();
  }

  // 4) Valores: el número de cada celda, en blanco o negro según el fondo.
  if (opciones.valores && k >= 20) {
    ctx.font = `${Math.floor(k * 0.32)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        ctx.fillStyle = recortar(M[i][j]) > 127 ? '#000' : '#fff';
        ctx.fillText(formatear(M[i][j]), j * k + k / 2, i * k + k / 2);
      }
    }
  }
}