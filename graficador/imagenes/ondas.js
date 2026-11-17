// Esta matriz no está escrita a mano: se GENERA con una fórmula.
// Es de 256 × 256 (65,536 números), así que se dibuja casi 1:1.
//
// Cada valor depende de la distancia del pixel (i, j) al centro:
// cerca o lejos, el coseno sube y baja entre 0 y 255 → anillos.

const matrizOndas = [];

for (let i = 0; i < 256; i++) {
  const renglon = [];
  for (let j = 0; j < 256; j++) {
    const distancia = Math.hypot(i - 128, j - 128);
    renglon.push(Math.round(127.5 + 127.5 * Math.cos(distancia / 5)));
  }
  matrizOndas.push(renglon);
}

galeria.push({
  id: 'ondas',
  nombre: 'Ondas 256 × 256 (generada con fórmula)',
  matriz: matrizOndas
});
