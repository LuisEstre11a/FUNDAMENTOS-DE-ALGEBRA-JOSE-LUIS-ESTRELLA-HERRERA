// =============================================================
//  app.js — Conecta los botones de la página con las funciones
//  de matriz.js (matemáticas) y lienzo.js (dibujo).
//
//  El graficador tiene hasta tres pestañas:
//    A          → siempre existe; empieza en blanco
//    B          → aparece al cargar una segunda matriz
//    Resultado  → aparece al hacer cualquier operación
//
//  Las operaciones se dividen igual: las de A siempre se ven;
//  las de B y las de "Matriz resultante" (A con B) solo
//  aparecen cuando hay una matriz B cargada.
// =============================================================

const FILAS_BLANCO = 16;      // tamaño de la matriz en blanco
const COLUMNAS_BLANCO = 16;

// Cada pestaña guarda { matriz, nombre }. null = la pestaña no existe.
const pestanas = { A: null, B: null, R: null };
let activa = 'A';

const lienzo = document.getElementById('lienzo');
const mensaje = document.getElementById('mensaje');
const editor = document.getElementById('editor');
const selectorGaleria = document.getElementById('selector-galeria');
const controlAuto = document.getElementById('pixel-auto');
const controlPixel = document.getElementById('pixel-tam');
const etiquetaPixel = document.getElementById('pixel-valor');
const controlCuadricula = document.getElementById('ver-cuadricula');
const controlValores = document.getElementById('ver-valores');


// ---------- Mensajes ----------

function avisar(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = tipo;          // 'ok' o 'error'
}


// ---------- Pestañas ----------

const TITULOS = { A: 'Matriz A', B: 'Matriz B', R: 'Resultado' };

function ponerABlanco() {
  limpiarDeterminante('A');
  pestanas.A = {
    matriz: crearMatriz(FILAS_BLANCO, COLUMNAS_BLANCO, 255),
    nombre: 'en blanco',
    enBlanco: true
  };
}

function activar(clave) {
  activa = clave;
  dibujarPestanas();
  mostrarSecciones();
  redibujar();
}

/** Las operaciones con B solo se muestran si B está cargada. */
function mostrarSecciones() {
  const hayB = pestanas.B !== null;
  document.getElementById('ops-B').hidden = !hayB;
  document.getElementById('ops-AB').hidden = !hayB;
}

function cerrar(clave) {
  pestanas[clave] = null;
  limpiarDeterminante(clave);
  avisar(`Se cerró la pestaña ${TITULOS[clave]}.`, 'ok');
  activar(clave === activa ? 'A' : activa);
}

function dibujarPestanas() {
  const barra = document.getElementById('pestanas');
  barra.innerHTML = '';

  ['A', 'B', 'R'].forEach(clave => {
    const datos = pestanas[clave];
    if (!datos) return;

    const [m, n] = orden(datos.matriz);
    const pestana = document.createElement('div');
    pestana.className = 'pestana' + (clave === activa ? ' activa' : '');
    pestana.innerHTML = `<span>${TITULOS[clave]}</span><small>${m} × ${n}</small>`;
    pestana.onclick = () => activar(clave);

    if (clave !== 'A') {                       // A no se puede cerrar
      const x = document.createElement('span');
      x.className = 'cerrar';
      x.textContent = '×';
      x.title = 'Cerrar';
      x.onclick = (evento) => {
        evento.stopPropagation();              // que no active la pestaña al cerrarla
        cerrar(clave);
      };
      pestana.appendChild(x);
    }
    barra.appendChild(pestana);
  });
}


// ---------- Cargar y dibujar ----------

/**
 * Carga una matriz: va a A si A está en blanco; si no, a B.
 * Solo caben dos matrices cargadas.
 */
function cargar(M, nombre) {
  let destino;
  if (pestanas.A.enBlanco) {
    destino = 'A';
  } else if (!pestanas.B) {
    destino = 'B';
  } else {
    avisar('Solo se pueden cargar dos matrices. Cierra la pestaña B (o pon A en blanco) para cargar otra.', 'error');
    return;
  }
  pestanas[destino] = { matriz: copiar(M), nombre: nombre };
  limpiarDeterminante(destino);
  activar(destino);
  avisar(`Cargada en ${TITULOS[destino]}: ${nombre}`, 'ok');
}

/** Tamaño de pixel que corresponde a la matriz M (automático o el del deslizador). */
function tamPixelPara(M) {
  const [m, n] = orden(M);
  const tam = controlAuto.checked ? pixelAutomatico(m, n) : Number(controlPixel.value);
  return pixelPermitido(tam, m, n);
}

function redibujar() {
  const datos = pestanas[activa];
  const [m, n] = orden(datos.matriz);
  const tam = tamPixelPara(datos.matriz);

  controlPixel.disabled = controlAuto.checked;
  controlPixel.value = tam;
  etiquetaPixel.textContent = `${tam} px` + (tam === 1 ? ' (1:1)' : ` (bloques de ${tam} × ${tam})`);

  dibujarMatriz(lienzo, datos.matriz, {
    tamPixel: tam,
    cuadricula: controlCuadricula.checked,
    valores: controlValores.checked
  });

  const [min, max] = rango(datos.matriz);
  document.getElementById('info').textContent =
    `${TITULOS[activa]}: ${datos.nombre}   ·   Orden: ${m} × ${n}   ·   ` +
    `Lienzo: ${n * tam} × ${m * tam} px   ·   Valores: de ${formatear(min)} a ${formatear(max)}`;
}

/**
 * Hace una operación y pone el resultado en la pestaña Resultado.
 * A y B nunca se modifican. Si la función lanza un error (o todavía
 * está pendiente), se muestra el mensaje y no se crea la pestaña.
 */
function aplicar(descripcion, operacion) {
  try {
    const resultado = operacion();
    if (!Array.isArray(resultado) || !Array.isArray(resultado[0])) {
      throw new Error(`${descripcion}: la función no regresó una matriz. ¿Te faltó el return?`);
    }
    pestanas.R = { matriz: resultado, nombre: descripcion };
    activar('R');
    avisar(`Resultado: ${descripcion}`, 'ok');
    mostrarLienzo();
  } catch (e) {
    avisar(e.message, 'error');
  }
}

/** Si la página está más abajo que el lienzo, sube para que se vea el resultado. */
function mostrarLienzo() {
  const barra = document.getElementById('pestanas');
  if (barra.getBoundingClientRect().top < 0) {
    barra.scrollIntoView({ behavior: 'smooth' });
  }
}

function matrizA() {
  return pestanas.A.matriz;
}

function matrizB() {
  if (!pestanas.B) {
    throw new Error('Para operar con B, primero carga una segunda matriz.');
  }
  return pestanas.B.matriz;
}

function matrizActiva() {
  return pestanas[activa].matriz;
}

function imagenDeGaleria(id) {
  return galeria.find(img => img.id === id);
}


// ---------- Sección: Cargar ----------

galeria.forEach(img => selectorGaleria.add(new Option(img.nombre, img.id)));

document.getElementById('btn-galeria').onclick = () => {
  const img = imagenDeGaleria(selectorGaleria.value);
  cargar(img.matriz, img.nombre);
};

document.getElementById('archivo').onchange = (evento) => {
  const archivo = evento.target.files[0];
  if (!archivo) return;
  const lector = new FileReader();
  lector.onload = () => {
    try {
      editor.value = lector.result;
      cargar(textoAMatriz(lector.result), archivo.name);
    } catch (e) {
      avisar(e.message, 'error');
    }
    evento.target.value = '';                  // permite volver a elegir el mismo archivo
  };
  lector.readAsText(archivo);
};

document.getElementById('btn-editor').onclick = () => {
  try {
    cargar(textoAMatriz(editor.value), 'matriz del editor');
  } catch (e) {
    avisar(e.message, 'error');
  }
};


// ---------- Sección: Ver y descargar ----------

controlAuto.onchange = redibujar;
controlPixel.oninput = redibujar;
controlCuadricula.onchange = redibujar;
controlValores.onchange = redibujar;

document.getElementById('btn-a-blanco').onclick = () => {
  ponerABlanco();
  avisar('La matriz A quedó en blanco.', 'ok');
  activar('A');
};

document.getElementById('btn-a-editor').onclick = () => {
  editor.value = matrizATexto(matrizActiva());
  document.getElementById('caja-editor').open = true;
  avisar(`${TITULOS[activa]} se copió al editor.`, 'ok');
};

/** Hace que el navegador descargue `blob` con el nombre `nombreArchivo`. */
function descargar(blob, nombreArchivo) {
  const enlace = document.createElement('a');
  enlace.href = URL.createObjectURL(blob);
  enlace.download = nombreArchivo;
  enlace.click();
  URL.revokeObjectURL(enlace.href);
}

document.getElementById('btn-descargar').onclick = () => {
  const blob = new Blob([matrizATexto(matrizActiva()) + '\n'], { type: 'text/plain' });
  descargar(blob, `matriz-${activa}.txt`);
};

// La imagen se dibuja en un lienzo aparte, al tamaño de pixel actual,
// pero SIN cuadrícula ni valores: solo los pixeles de la matriz.
document.getElementById('btn-descargar-png').onclick = () => {
  const M = matrizActiva();
  const aparte = document.createElement('canvas');
  dibujarMatriz(aparte, M, { tamPixel: tamPixelPara(M), cuadricula: false, valores: false });
  aparte.toBlob(blob => descargar(blob, `matriz-${activa}.png`), 'image/png');
};


// ---------- Sección: Operaciones ----------

const MAXIMO_COFACTORES = 8;   // más grande que esto, los cofactores congelan el navegador

/** n! escrito en notación científica, para el aviso del determinante. */
function factorial(n) {
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f.toExponential(1).replace('e+', ' × 10^');
}

/** Borra el valor del determinante que se mostraba junto al enlace (la matriz cambió). */
function limpiarDeterminante(clave) {
  const lugar = document.getElementById(`det-${clave}`);
  if (lugar) lugar.textContent = '';
}

/** Determinante: regresa un número, así que se muestra junto al enlace y en el mensaje. */
function calcularDeterminante(clave) {
  limpiarDeterminante(clave);
  try {
    const M = pestanas[clave].matriz;
    const [m, n] = orden(M);
    if (m === n && n > MAXIMO_COFACTORES) {
      throw new Error(`|${clave}| de ${n} × ${n} por cofactores necesita del orden de ${n}! ≈ ${factorial(n)} ` +
                      `productos: el navegador se congelaría. Prueba con una matriz de hasta ` +
                      `${MAXIMO_COFACTORES} × ${MAXIMO_COFACTORES}.`);
    }
    const d = determinante(M);
    if (typeof d !== 'number' || Number.isNaN(d)) {
      throw new Error('determinante() no regresó un número. ¿Te faltó el return?');
    }
    const texto = formatear(d, 4);
    document.getElementById(`det-${clave}`).textContent = `= ${texto}`;
    avisar(`|${clave}| = ${texto}`, 'ok');
  } catch (e) {
    avisar(e.message, 'error');
  }
}

/** Operaciones de una sola matriz: clave es 'A' o 'B'. */
function operarUna(op, clave) {
  const X = () => pestanas[clave].matriz;

  if (op === 'escalar') {
    const k = Number(document.getElementById(`k-${clave}`).value);
    aplicar(`${k} · ${clave}`, () => escalar(k, X()));
  } else if (op === 'transpuesta') {
    aplicar(`${clave}ᵀ (transpuesta)`, () => transpuesta(X()));
  } else if (op === 'negativo') {
    aplicar(`255 − ${clave} (negativo)`, () => {
      const [m, n] = orden(X());
      return restar(crearMatriz(m, n, 255), X());
    });
  } else if (op === 'determinante') {
    calcularDeterminante(clave);
  } else if (op === 'inversa') {
    aplicar(`${clave}⁻¹ (inversa)`, () => {
      const R = inversa(X());
      if (R === null) {
        throw new Error(`${clave} no tiene inversa: su determinante es 0.`);
      }
      return R;
    });
  }
}

/** Operaciones de la sección "Matriz resultante": usan A y B. */
function operarDos(op) {
  const A = () => matrizA();
  const B = () => matrizB();

  if (op === 'sumar')          aplicar('A + B', () => sumar(A(), B()));
  else if (op === 'restarAB')  aplicar('A − B', () => restar(A(), B()));
  else if (op === 'restarBA')  aplicar('B − A', () => restar(B(), A()));
  else if (op === 'promedio')  aplicar('½ (A + B)', () => escalar(0.5, sumar(A(), B())));
  else if (op === 'multiplicarAB') aplicar('A · B', () => multiplicar(A(), B()));
  else if (op === 'multiplicarBA') aplicar('B · A', () => multiplicar(B(), A()));
}

// Cada hipervínculo dice qué operación hace (data-op) y con qué matriz (data-matriz).
document.querySelectorAll('.operaciones a').forEach(enlace => {
  enlace.onclick = (evento) => {
    evento.preventDefault();                   // que el "#" no mueva la página
    const op = enlace.dataset.op;
    const matriz = enlace.dataset.matriz;
    if (matriz === 'AB') {
      operarDos(op);
    } else {
      operarUna(op, matriz);
    }
  };
});


// ---------- Al abrir la página ----------
// La matriz A empieza en blanco.
// graficador.html?img=casita  →  carga esa imagen en A
// (sirve para enlazar el graficador desde una entrada del blog)

ponerABlanco();
activar('A');

const pedida = imagenDeGaleria(new URLSearchParams(window.location.search).get('img'));
if (pedida) {
  selectorGaleria.value = pedida.id;
  cargar(pedida.matriz, pedida.nombre);
} else {
  avisar('Matriz A en blanco. Carga una matriz desde la galería, un archivo .txt o el editor.', 'ok');
}