// =============================================================
//  matriz.js — Operaciones con matrices
//
//  Aquí vive SOLO la matemática: nada de canvas ni de botones.
//  Una matriz es un arreglo de renglones:
//
//      const A = [[1, 2, 3],
//                 [4, 5, 6]];      // orden 2 × 3
//
//      A[1][2]  →  6               // renglón 2, columna 3 (desde 0)
//
//  En cada workshop vas a programar las funciones que tienen
//  "TODO". Puedes probarlas en la consola del navegador (F12):
//
//      sumar([[1, 2]], [[3, 4]])   →  [[4, 6]]
// =============================================================


// -------------------------------------------------------------
//  Herramientas ya hechas — úsalas dentro de tus funciones
// -------------------------------------------------------------

/** Regresa [m, n]: número de renglones y de columnas. */
function orden(A) {
  return [A.length, A[0].length];
}

/** true si A y B tienen el mismo orden. */
function mismoOrden(A, B) {
  return A.length === B.length && A[0].length === B[0].length;
}

/** Crea una matriz m × n llena con `valor` (0 si no le pasas nada). */
function crearMatriz(m, n, valor = 0) {
  const R = [];
  for (let i = 0; i < m; i++) {
    R.push(new Array(n).fill(valor));
  }
  return R;
}

/** Regresa una copia de A, para no modificar la original. */
function copiar(A) {
  return A.map(renglon => renglon.slice());
}

/** Marca una función como pendiente. Bórrala de tu función cuando la programes. */
function pendiente(nombre, workshop) {
  throw new Error(`${nombre}() todavía no está programada — ${workshop}.`);
}


// =============================================================
//  WORKSHOP 1 — Matrices                         Actividad #27
// =============================================================

/**
 * Suma A + B elemento con elemento.
 *
 * Si A y B NO son del mismo orden, la suma no existe:
 *     throw new Error('Para sumar, A y B deben tener el mismo orden.');
 *
 * Pista: crea R con crearMatriz(m, n) y recórrela con dos for
 *        (renglón i, columna j), igual que en la Semana 11.
 */
function sumar(A, B) {
  // TODO Workshop 1
 //pendiente('sumar', 'Workshop 1');
  if (!mismoOrden(A, B)) {
    throw new Error('Para sumar, A y B deben tener el mismo orden.');
  }
  const [m, n] = orden(A);
  const R = crearMatriz(m, n);
  for (let i = 0; i < m; i++) { //vamos desde fila 0 hasta la fila "m"
    for (let j = 0; j < n; j++) { //vamos desde columna "0" hasta la columna "n"
      R[i][j] = A[i][j] + B[i][j];
    }
  }
  return R;
}

/**
 * Resta A − B elemento con elemento.
 * Misma condición que la suma: mismo orden.
 */
function restar(A, B) {
  // TODO Workshop 1
  //pendiente('restar', 'Workshop 1');
   if (!mismoOrden(A, B)) {
    throw new Error('Para sumar, A y B deben tener el mismo orden.');
  }
  const [m, n] = orden(A);
  const R = crearMatriz(m, n);
  for (let i = 0; i < m; i++) { //vamos desde fila 0 hasta la fila "m"
    for (let j = 0; j < n; j++) { //vamos desde columna "0" hasta la columna "n"
      R[i][j] = A[i][j] - B[i][j];
    }
  }
  return R;
}

/**
 * Multiplicación escalar k · A: multiplica CADA elemento por k.
 * En una imagen: k > 1 aclara, 0 < k < 1 oscurece.
 */
function escalar(k, A) {
  // TODO Workshop 1
  pendiente('escalar', 'Workshop 1');
}

/**
 * Transpuesta: los renglones se vuelven columnas.
 * Si A es m × n, el resultado es n × m  →  R[j][i] = A[i][j]
 *
 * Ojo: el resultado NO tiene el mismo tamaño que A (salvo si es cuadrada).
 */
function transpuesta(A) {
  // TODO Workshop 1
  pendiente('transpuesta', 'Workshop 1');
}


// =============================================================
//  WORKSHOP 2 — Determinantes                    Actividad #30
//  (los botones de este workshop se agregan ese día)
// =============================================================

/** Determinante de una matriz 2 × 2:  ad − bc */
function det2(T) {
  // TODO Workshop 2
  pendiente('det2', 'Workshop 2');
}

/**
 * Aplica la matriz 2 × 2 T al punto (x, y).
 * Regresa [x', y'] = [T00·x + T01·y,  T10·x + T11·y]
 */
function transformar(x, y, T) {
  // TODO Workshop 2
  pendiente('transformar', 'Workshop 2');
}


// =============================================================
//  WORKSHOP 3 — Sistemas de ecuaciones I         Actividad #33
// =============================================================

/**
 * Resuelve un sistema con Gauss-Jordan.
 * Recibe la matriz AUMENTADA [A | B] y regresa la solución
 * como arreglo: [x, y, z, ...]
 * Si un pivote es 0, intercambia renglones.
 */
function gaussJordan(aumentada) {
  // TODO Workshop 3
  pendiente('gaussJordan', 'Workshop 3');
}


// =============================================================
//  WORKSHOP 4 — Sistemas de ecuaciones II        Actividad #36
// =============================================================

/**
 * Inversa de una 2 × 2:  (1 / det) · [[d, −b], [−c, a]]
 * Si det = 0, regresa null: la transformación no se puede deshacer.
 */
function inversa2x2(T) {
  // TODO Workshop 4
  pendiente('inversa2x2', 'Workshop 4');
}
