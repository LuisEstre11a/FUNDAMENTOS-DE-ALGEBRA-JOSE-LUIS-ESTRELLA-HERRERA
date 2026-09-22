Binario a decimal (73-78)
Cada posición vale una potencia de 2 (2^0, 2^1, 2^2...) contando de derecha a izq. Sumas las potencias donde hay un 1.

00001111 bits en 1: posiciones 3,2,1,0 -> 2^3+2^2+2^1+2^0 = 8+4+2+1 = 15

10011001 bits en 1: posiciones 7,4,3,0 -> 128+16+8+1 = 153

11001100 bits en 1: posiciones 7,6,3,2 -> 128+64+8+4 = 204

01111011 bits en 1: posiciones 6,5,4,3,1,0 -> 64+32+16+8+2+1 = 123

00000000 11111111 byte de primer orden = 0, segundo byte = 255 (11111111 = 128+64+32+16+8+4+2+1) total = 0 + 255 = 255

00000010 00000000 primer byte (el "alto") = 00000010 = 2, se multiplica por 256 porque es el byte de mayor peso 2 x 256 = 512

Binario a octal (79-84)
Agrupas de 3 en 3 bits (de derecha a izq) y conviertes cada grupo a su valor 0-7.

11010101 grupo: 011 | 010 | 101 011=3, 010=2, 101=5 -> 325

01101110 grupo: 001 | 101 | 110 001=1, 101=5, 110=6 -> 156

10110011 grupo: 010 | 110 | 011 010=2, 110=6, 011=3 -> 263

00000000 11111111 esto es el decimal 255, en binario puro: 11111111 grupo: 011 | 111 | 111 011=3, 111=7, 111=7 -> 377

00000011 11000000 esto es el decimal 960, en binario puro: 1111000000 grupo (completando con ceros a la izq): 001 | 110 | 000 | 000 1,7,0,0 -> 1700

00000101 01010101 esto es el decimal 1365, en binario puro: 10101010101 grupo: 010 | 101 | 010 | 101 2,5,2,5 -> 2525

Binario a hex (85-90)
Agrupas de 4 en 4 bits y conviertes cada grupo (0-9, AF).

11011010 grupo: 1101 | 1010 1101=D, 1010=A -> DA

01111100 grupo: 0111 | 1100 0111=7, 1100=C -> 7C

10110101 grupo: 1011 | 0101 1011=B, 0101=5 -> B5

11110000 10100101 grupo: 1111 | 0000 | 1010 | 0101 F, 0, A, 5 -> F0A5

00001111 00001111 grupo: 0000 | 1111 | 0000 | 1111 0, F, 0, F -> 0F0F

10000000 00000001 grupo: 1000 | 0000 | 0000 | 0001 8, 0, 0, 1 -> 8001

Octal a binario (91-96)
Es al revés: cada dígito octal se cambia directo a sus 3 bits. tabla: 0=000 1=001 2=010 3=011 4=100 5=101 6=110 7=111

325 3=011, 2=010, 5=101 junto: 011010101

156 1=001, 5=101, 6=110 junto: 001101110 -> quitando el cero inicial: 1101110

377 3=011, 7=111, 7=111 junto: 011111111 -> 11111111

01777 0=000, 1=001, 7=111, 7=111, 7=111 junto: 000001111111111 -> quitando ceros iniciales: 1111111111

03700 0=000, 3=011, 7=111, 0=000, 0=000 junto: 000011111000000 -> quitando ceros iniciales: 11111000000

05255 0=000, 5=101, 2=010, 5=101, 5=101 junto: 000101010101101 -> quitando el cero inicial: 101010101101

Hex a binario (97-102)
Cada dígito hexadecimal se cambia directo a sus 4 bits. tabla: 0=0000 1=0001 2=0010 3=0011 4=0100 5=0101 6=0110 7=0111 8=1000 9=1001 A=1010 B=1011 C=1100 D=1101 E=1110 F=1111

DA D=1101, A=1010 junto: 11011010

7C 7=0111, C=1100 junto: 01111100

B5 B=1011, 5=0101 junto: 10110101

F0A5 F=1111, 0=0000, A=1010, 5=0101 junto: 1111000010100101

0F0F 0=0000, F=1111, 0=0000, F=1111 junto: 0000111100001111

8001 8=1000, 0=0000, 0=0000, 1=0001 junto: 1000000000000001

Grado y términos de polinomios (103-108)
Grado = el exponente más alto que aparece (0=constante, 1=lineal, 2=cuadrático, 3=cúbico, luego "cuarto grado", "quinto grado", etc). Términos = cuántos sumandos hay (1=monomio, 2=binomio, 3=trinomio, 4+=solo se dice "de tantos términos").

5n + 5 el exponente más alto de n es 1 -> lineal cuenta los términos: "5n" y "5" -> 2 términos -> binomio

-10p^3 - 6 + 9p^2 - 4p^5 - 2p^8 el exponente más alto es el 8 (de -2p^8) -> octavo grado términos: -10p^3, -6, 9p^2, -4p^5, -2p^8 -> son 5 -> polinomio de 5 términos

7x^8 exponente más alto 8 -> octavo grado solo hay un término -> monomio

-2n + n^4 + 10n^6 exponente más alto 6 -> sexto grado términos: -2n, n^4, 10n^6 -> 3 -> trinomio

5 no tiene variable, es puro número -> grado 0, se le llama constante un solo término -> monomio

5v^7 exponente más alto 7 -> séptimo grado un solo término -> monomio

Problemas de aplicación (109-114)
--- Trabajo conjunto --- Si alguien tarda "a" horas haciendo algo solo, en 1 hora hace 1/a del trabajo (esa es su "tasa"). Si juntos trabajan las tasas se suman: 1/a + 1/b = 1/t (t = tiempo juntos)

Amy tarda 8h sola. Junto con Jill tardan 3.08h. ¿Cuánto tarda Jill sola (j)? planteo: 1/8 + 1/j = 1/3.08 despejo 1/j: 1/j = 1/3.08 - 1/8 1/3.08 = 0.3247... 1/8 = 0.125 1/j = 0.3247 - 0.125 = 0.1997 j = 1/0.1997 ≈ 5.01horas

Jaidee tarda 5h, Ted tarda 7h. Juntos ¿cuánto tardan (t)? 1/t = 1/5 + 1/7 saco común denominador (35): 7/35 + 5/35 = 12/35 t = 35/12 ≈ 2.92 horas (como 2h 55min)

--- Movimiento: distancia = velocidad x tiempo ---

El avión de carga salió 4h antes que el de la Fuerza Aérea. Este último voló 6h a 310km/hy alcanzó al de carga. como "alcanzarlo" significa que llegaron al mismo punto, ambos recorrieron la MISMA distancia distancia = 310 x 6 = 1860 km el avión de carga voló ese mismo tramo pero en 4+6 = 10 horas (porque salió antes) velocidad del avión de carga = 1860 / 10 = 186 km/h

Ida a 35 km/h, regreso a 49 km/h. El regreso tardó 10 horas. ida y regreso son la MISMA distancia (mismo camino, ida y vuelta) distancia = 49 x 10 = 490 km (uso el tramo de regreso porque ahí sé el tiempo) tiempo de ida = distancia / velocidad de ida = 490/35 = 14 horas

--- Mezclas: se calcula la cantidad real del ingrediente en cada parte y se suma ---

1 yd³ con 30% de arena + 4 yd³ con 20% de arena. ¿Qué % de arena tiene la mezcla? arena en la primera parte: 1 x 0.30 = 0.30 yd³ arena en la segunda parte: 4 x 0.20 = 0.80 yd³ arena total: 0.30 + 0.80 = 1.10 yd³ volumen total de la mezcla: 1 + 4 = 5 yd³ porcentaje = 1.10 / 5 = 0.22 = 22%

7L de marca A (11% jugo) + 6L de marca B (24% jugo). ¿Qué % de jugo tiene la mezcla? jugo de la marca A: 7 x 0.11 = 0.77 L jugo de la marca B: 6 x 0.24 = 1.44 L jugo total: 0.77 + 1.44 = 2.21 L volumen total: 7 + 6 = 13 L porcentaje = 2.21 / 13 ≈ 0.17 = 17%
