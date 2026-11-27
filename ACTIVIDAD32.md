# Actividad 32
 
## Resuelve las ecuaciones por Gauss 
 
### Ejercicio 37:
 
```math
\left[\begin{array}{ccc|c} 6 & 1 & -1 & -22 \\ -1 & 3 & 3 & 22 \\ -6 & 0 & -6 & 12 \end{array}\right] \; \underset{\; \mathstrut R_3 \to R_3 + R_1 \;}{\overset{\; \mathstrut R_2 \to 6R_2 + R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} 6 & 1 & -1 & -22 \\ 0 & 19 & 17 & 110 \\ 0 & 1 & -7 & -10 \end{array}\right]
```
 
```math
\overset{\; \mathstrut R_3 \to 19R_3 - R_2 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 6 & 1 & -1 & -22 \\ 0 & 19 & 17 & 110 \\ 0 & 0 & -150 & -300 \end{array}\right]
```
 
- Renglón 3: $-150z = -300 \to z = 2$
- Renglón 2: $19y + 34 = 110 \to y = 4$
- Renglón 1: $6x + 4 - 2 = -22 \to x = -4$
Solución: $x = -4,\quad y = 4,\quad z = 2$
 
### Ejercicio 38:
 
```math
\left[\begin{array}{ccc|c} -4 & -3 & -2 & -8 \\ 1 & -4 & -2 & -3 \\ 4 & -2 & 1 & 6 \end{array}\right] \; \underset{\; \mathstrut R_3 \to R_3 + R_1 \;}{\overset{\; \mathstrut R_2 \to 4R_2 + R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -4 & -3 & -2 & -8 \\ 0 & -19 & -10 & -20 \\ 0 & -5 & -1 & -2 \end{array}\right]
```
 
```math
\overset{\; \mathstrut R_3 \to 19R_3 - 5R_2 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} -4 & -3 & -2 & -8 \\ 0 & -19 & -10 & -20 \\ 0 & 0 & 31 & 62 \end{array}\right]
```
 
- Renglón 3: $31c = 62 \to c = 2$
- Renglón 2: $-19b - 20 = -20 \to b = 0$
- Renglón 1: $-4a + 0 - 4 = -8 \to a = 1$
Solución: $a = 1,\quad b = 0,\quad c = 2$
 
### Ejercicio 39:
 
```math
\left[\begin{array}{ccc|c} 1 & 5 & -4 & -14 \\ 2 & -5 & -5 & -7 \\ 3 & 3 & 2 & -2 \end{array}\right] \; \underset{\; \mathstrut R_3 \to R_3 - 3R_1 \;}{\overset{\; \mathstrut R_2 \to R_2 - 2R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} 1 & 5 & -4 & -14 \\ 0 & -15 & 3 & 21 \\ 0 & -12 & 14 & 40 \end{array}\right]
```
 
```math
\overset{\; \mathstrut R_3 \to 5R_3 - 4R_2 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 1 & 5 & -4 & -14 \\ 0 & -15 & 3 & 21 \\ 0 & 0 & 58 & 116 \end{array}\right]
```
 
- Renglón 3: $58c = 116 \to c = 2$
- Renglón 2: $-15b + 6 = 21 \to b = -1$
- Renglón 1: $a - 5 - 8 = -14 \to a = -1$
Solución: $a = -1,\quad b = -1,\quad c = 2$
 
### Ejercicio 40:
 
```math
\left[\begin{array}{ccc|c} 6 & 6 & 5 & 16 \\ -6 & 6 & 1 & 20 \\ 2 & -2 & 3 & 0 \end{array}\right] \; \underset{\; \mathstrut R_3 \to 3R_3 - R_1 \;}{\overset{\; \mathstrut R_2 \to R_2 + R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} 6 & 6 & 5 & 16 \\ 0 & 12 & 6 & 36 \\ 0 & -12 & 4 & -16 \end{array}\right]
```
 
```math
\overset{\; \mathstrut R_3 \to R_3 + R_2 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 6 & 6 & 5 & 16 \\ 0 & 12 & 6 & 36 \\ 0 & 0 & 10 & 20 \end{array}\right]
```
 
- Renglón 3: $10z = 20 \to z = 2$
- Renglón 2: $12y + 12 = 36 \to y = 2$
- Renglón 1: $6x + 12 + 10 = 16 \to x = -1$
Solución: $x = -1,\quad y = 2,\quad z = 2$
 
### Ejercicio 41:
 
```math
\left[\begin{array}{ccc|c} -2 & 1 & -4 & 7 \\ 4 & 6 & 1 & 19 \\ -6 & -6 & -5 & -17 \end{array}\right] \; \underset{\; \mathstrut R_3 \to R_3 - 3R_1 \;}{\overset{\; \mathstrut R_2 \to R_2 + 2R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -2 & 1 & -4 & 7 \\ 0 & 8 & -7 & 33 \\ 0 & -9 & 7 & -38 \end{array}\right]
```
 
```math
\overset{\; \mathstrut R_3 \to 8R_3 + 9R_2 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} -2 & 1 & -4 & 7 \\ 0 & 8 & -7 & 33 \\ 0 & 0 & -7 & -7 \end{array}\right]
```
 
- Renglón 3: $-7c = -7 \to c = 1$
- Renglón 2: $8b - 7 = 33 \to b = 5$
- Renglón 1: $-2a + 5 - 4 = 7 \to a = -3$
Solución: $a = -3,\quad b = 5,\quad c = 1$
 
### Ejercicio 42:
 
```math
\left[\begin{array}{ccc|c} 5 & -3 & 5 & 22 \\ -4 & -1 & 1 & -16 \\ 2 & 4 & -1 & 11 \end{array}\right] \; \underset{\; \mathstrut R_3 \to 5R_3 - 2R_1 \;}{\overset{\; \mathstrut R_2 \to 5R_2 + 4R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} 5 & -3 & 5 & 22 \\ 0 & -17 & 25 & 8 \\ 0 & 26 & -15 & 11 \end{array}\right]
```
 
```math
\overset{\; \mathstrut R_3 \to 17R_3 + 26R_2 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 5 & -3 & 5 & 22 \\ 0 & -17 & 25 & 8 \\ 0 & 0 & 395 & 395 \end{array}\right]
```
 
- Renglón 3: $395c = 395 \to c = 1$
- Renglón 2: $-17b + 25 = 8 \to b = 1$
- Renglón 1: $5a - 3 + 5 = 22 \to a = 4$
Solución: $a = 4,\quad b = 1,\quad c = 1$
 
### Ejercicio 43:
 
```math
\left[\begin{array}{ccc|c} -3 & 5 & 0 & 26 \\ -6 & 4 & 1 & 26 \\ 3 & 5 & 3 & 8 \end{array}\right] \; \underset{\; \mathstrut R_3 \to R_3 + R_1 \;}{\overset{\; \mathstrut R_2 \to R_2 - 2R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -3 & 5 & 0 & 26 \\ 0 & -6 & 1 & -26 \\ 0 & 10 & 3 & 34 \end{array}\right]
```
 
```math
\overset{\; \mathstrut R_3 \to 3R_3 + 5R_2 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} -3 & 5 & 0 & 26 \\ 0 & -6 & 1 & -26 \\ 0 & 0 & 14 & -28 \end{array}\right]
```
 
- Renglón 3: $14c = -28 \to c = -2$
- Renglón 2: $-6b - 2 = -26 \to b = 4$
- Renglón 1: $-3a + 20 = 26 \to a = -2$
Solución: $a = -2,\quad b = 4,\quad c = -2$
 
### Ejercicio 44:
 
```math
\left[\begin{array}{ccc|c} 5 & -5 & -1 & -30 \\ 5 & -6 & -1 & -29 \\ -5 & 4 & -4 & 6 \end{array}\right] \; \underset{\; \mathstrut R_3 \to R_3 + R_1 \;}{\overset{\; \mathstrut R_2 \to R_2 - R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} 5 & -5 & -1 & -30 \\ 0 & -1 & 0 & 1 \\ 0 & -1 & -5 & -24 \end{array}\right]
```
 
```math
\overset{\; \mathstrut R_3 \to R_3 - R_2 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 5 & -5 & -1 & -30 \\ 0 & -1 & 0 & 1 \\ 0 & 0 & -5 & -25 \end{array}\right]
```
 
- Renglón 3: $-5c = -25 \to c = 5$
- Renglón 2: $-b = 1 \to b = -1$
- Renglón 1: $5a + 5 - 5 = -30 \to a = -6$
Solución: $a = -6,\quad b = -1,\quad c = 5$
 
## Resuelve las ecuaciones por Gauss-Jordan 
 
### Ejercicio 45:
 
```math
\left[\begin{array}{ccc|c} 4 & -5 & -1 & -20 \\ -1 & 2 & 1 & -1 \\ -1 & 1 & 0 & -4 \end{array}\right] \; \overset{\; \mathstrut R_1 \leftrightarrow R_2 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} -1 & 2 & 1 & -1 \\ 4 & -5 & -1 & -20 \\ -1 & 1 & 0 & -4 \end{array}\right]
```
 
```math
\underset{\; \mathstrut R_3 \to R_3 - R_1 \;}{\overset{\; \mathstrut R_2 \to R_2 + 4R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -1 & 2 & 1 & -1 \\ 0 & 3 & 3 & -24 \\ 0 & -1 & -1 & -3 \end{array}\right] \; \overset{\; \mathstrut R_2 \to \frac{1}{3}R_2 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} -1 & 2 & 1 & -1 \\ 0 & 1 & 1 & -8 \\ 0 & -1 & -1 & -3 \end{array}\right]
```
 
```math
\underset{\; \mathstrut R_3 \to R_3 + R_2 \;}{\overset{\; \mathstrut R_1 \to R_1 - 2R_2 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -1 & 0 & -1 & 15 \\ 0 & 1 & 1 & -8 \\ 0 & 0 & 0 & -11 \end{array}\right] \; \overset{\; \mathstrut R_3 \to \frac{1}{11}R_3 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} -1 & 0 & -1 & 15 \\ 0 & 1 & 1 & -8 \\ 0 & 0 & 0 & -1 \end{array}\right]
```
 
Solución: el renglón 3 queda $0 = -1$, lo cual es imposible, por lo tanto el sistema no tiene solución.
 
### Ejercicio 46:
 
```math
\left[\begin{array}{ccc|c} -5 & -5 & 5 & 10 \\ -6 & 0 & -2 & -16 \\ -6 & 0 & 1 & -19 \end{array}\right] \; \underset{\; \mathstrut R_3 \to 5R_3 - 6R_1 \;}{\overset{\; \mathstrut R_2 \to 5R_2 - 6R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -5 & -5 & 5 & 10 \\ 0 & 30 & -40 & -140 \\ 0 & 30 & -25 & -155 \end{array}\right]
```
 
```math
\underset{\; \mathstrut R_3 \to \frac{1}{5}R_3 \;}{\overset{\; \mathstrut R_2 \to \frac{1}{10}R_2 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -5 & -5 & 5 & 10 \\ 0 & 3 & -4 & -14 \\ 0 & 6 & -5 & -31 \end{array}\right] \; \underset{\; \mathstrut R_3 \to R_3 - 2R_2 \;}{\overset{\; \mathstrut R_1 \to 3R_1 + 5R_2 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -15 & 0 & -5 & -40 \\ 0 & 3 & -4 & -14 \\ 0 & 0 & 3 & -3 \end{array}\right]
```
 
```math
\underset{\; \mathstrut R_3 \to \frac{1}{3}R_3 \;}{\overset{\; \mathstrut R_1 \to \frac{1}{5}R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -3 & 0 & -1 & -8 \\ 0 & 3 & -4 & -14 \\ 0 & 0 & 1 & -1 \end{array}\right] \; \underset{\; \mathstrut R_2 \to R_2 + 4R_3 \;}{\overset{\; \mathstrut R_1 \to R_1 + R_3 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -3 & 0 & 0 & -9 \\ 0 & 3 & 0 & -18 \\ 0 & 0 & 1 & -1 \end{array}\right]
```
 
```math
\underset{\; \mathstrut R_2 \to \frac{1}{3}R_2 \;}{\overset{\; \mathstrut R_1 \to \frac{1}{3}R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -1 & 0 & 0 & -3 \\ 0 & 1 & 0 & -6 \\ 0 & 0 & 1 & -1 \end{array}\right] \; \overset{\; \mathstrut R_1 \to -R_1 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 1 & 0 & 0 & 3 \\ 0 & 1 & 0 & -6 \\ 0 & 0 & 1 & -1 \end{array}\right]
```
 
Solución: $a = 3,\quad b = -6,\quad c = -1$
 
### Ejercicio 47:
 
```math
\left[\begin{array}{ccc|c} 0 & -3 & -2 & -26 \\ 1 & 0 & 2 & 1 \\ 2 & -3 & 2 & 3 \end{array}\right] \; \overset{\; \mathstrut R_1 \leftrightarrow R_2 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 1 & 0 & 2 & 1 \\ 0 & -3 & -2 & -26 \\ 2 & -3 & 2 & 3 \end{array}\right]
```
 
```math
\overset{\; \mathstrut R_3 \to R_3 - 2R_1 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 1 & 0 & 2 & 1 \\ 0 & -3 & -2 & -26 \\ 0 & -3 & -2 & 1 \end{array}\right] \; \overset{\; \mathstrut R_3 \to R_3 - R_2 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 1 & 0 & 2 & 1 \\ 0 & -3 & -2 & -26 \\ 0 & 0 & 0 & 27 \end{array}\right]
```
 
```math
\overset{\; \mathstrut R_3 \to \frac{1}{27}R_3 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 1 & 0 & 2 & 1 \\ 0 & -3 & -2 & -26 \\ 0 & 0 & 0 & 1 \end{array}\right]
```
 
Solución: el renglón 3 queda $0 = 1$, lo cual es imposible, por lo tanto el sistema no tiene solución.
 
### Ejercicio 48:
 
```math
\left[\begin{array}{ccc|c} 3 & 0 & -1 & 8 \\ -2 & 1 & 0 & -5 \\ -3 & -3 & 5 & -1 \end{array}\right] \; \overset{\; \mathstrut R_1 \leftrightarrow R_2 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} -2 & 1 & 0 & -5 \\ 3 & 0 & -1 & 8 \\ -3 & -3 & 5 & -1 \end{array}\right]
```
 
```math
\underset{\; \mathstrut R_3 \to 2R_3 - 3R_1 \;}{\overset{\; \mathstrut R_2 \to 2R_2 + 3R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -2 & 1 & 0 & -5 \\ 0 & 3 & -2 & 1 \\ 0 & -9 & 10 & 13 \end{array}\right] \; \underset{\; \mathstrut R_3 \to R_3 + 3R_2 \;}{\overset{\; \mathstrut R_1 \to 3R_1 - R_2 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -6 & 0 & 2 & -16 \\ 0 & 3 & -2 & 1 \\ 0 & 0 & 4 & 16 \end{array}\right]
```
 
```math
\underset{\; \mathstrut R_3 \to \frac{1}{4}R_3 \;}{\overset{\; \mathstrut R_1 \to \frac{1}{2}R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -3 & 0 & 1 & -8 \\ 0 & 3 & -2 & 1 \\ 0 & 0 & 1 & 4 \end{array}\right] \; \underset{\; \mathstrut R_2 \to R_2 + 2R_3 \;}{\overset{\; \mathstrut R_1 \to R_1 - R_3 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -3 & 0 & 0 & -12 \\ 0 & 3 & 0 & 9 \\ 0 & 0 & 1 & 4 \end{array}\right]
```
 
```math
\underset{\; \mathstrut R_2 \to \frac{1}{3}R_2 \;}{\overset{\; \mathstrut R_1 \to \frac{1}{3}R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -1 & 0 & 0 & -4 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 1 & 4 \end{array}\right] \; \overset{\; \mathstrut R_1 \to -R_1 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 1 & 0 & 0 & 4 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 1 & 4 \end{array}\right]
```
 
Solución: $r = 4,\quad s = 3,\quad t = 4$
 
### Ejercicio 49:
 
```math
\left[\begin{array}{ccc|c} 0 & -6 & 3 & 15 \\ -3 & -6 & 0 & -6 \\ 1 & -6 & 4 & 22 \end{array}\right] \; \overset{\; \mathstrut R_1 \leftrightarrow R_3 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 1 & -6 & 4 & 22 \\ -3 & -6 & 0 & -6 \\ 0 & -6 & 3 & 15 \end{array}\right]
```
 
```math
\overset{\; \mathstrut R_2 \to R_2 + 3R_1 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 1 & -6 & 4 & 22 \\ 0 & -24 & 12 & 60 \\ 0 & -6 & 3 & 15 \end{array}\right] \; \underset{\; \mathstrut R_3 \to \frac{1}{3}R_3 \;}{\overset{\; \mathstrut R_2 \to \frac{1}{12}R_2 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} 1 & -6 & 4 & 22 \\ 0 & -2 & 1 & 5 \\ 0 & -2 & 1 & 5 \end{array}\right]
```
 
```math
\underset{\; \mathstrut R_3 \to R_3 - R_2 \;}{\overset{\; \mathstrut R_1 \to R_1 - 3R_2 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} 1 & 0 & 1 & 7 \\ 0 & -2 & 1 & 5 \\ 0 & 0 & 0 & 0 \end{array}\right] \; \overset{\; \mathstrut R_2 \to -\frac{1}{2}R_2 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 1 & 0 & 1 & 7 \\ 0 & 1 & -\frac{1}{2} & -\frac{5}{2} \\ 0 & 0 & 0 & 0 \end{array}\right]
```
 
Solución (infinitas soluciones, $t \in \mathbb{R}$): $x = 7 - t,\quad y = -\frac{5}{2} + \frac{1}{2}t,\quad z = t$
 
### Ejercicio 50:
 
```math
\left[\begin{array}{ccc|c} 0 & -3 & 0 & 3 \\ 2 & -2 & -6 & -6 \\ 5 & 1 & 4 & -21 \end{array}\right] \; \overset{\; \mathstrut R_1 \leftrightarrow R_2 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 2 & -2 & -6 & -6 \\ 0 & -3 & 0 & 3 \\ 5 & 1 & 4 & -21 \end{array}\right]
```
 
```math
\overset{\; \mathstrut R_3 \to 2R_3 - 5R_1 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 2 & -2 & -6 & -6 \\ 0 & -3 & 0 & 3 \\ 0 & 12 & 38 & -12 \end{array}\right] \; \underset{\; \mathstrut R_3 \to \frac{1}{2}R_3 \;}{\overset{\; \mathstrut R_2 \to \frac{1}{3}R_2 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} 2 & -2 & -6 & -6 \\ 0 & -1 & 0 & 1 \\ 0 & 6 & 19 & -6 \end{array}\right]
```
 
```math
\underset{\; \mathstrut R_3 \to R_3 + 6R_2 \;}{\overset{\; \mathstrut R_1 \to R_1 - 2R_2 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} 2 & 0 & -6 & -8 \\ 0 & -1 & 0 & 1 \\ 0 & 0 & 19 & 0 \end{array}\right] \; \underset{\; \mathstrut R_3 \to \frac{1}{19}R_3 \;}{\overset{\; \mathstrut R_1 \to \frac{1}{2}R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} 1 & 0 & -3 & -4 \\ 0 & -1 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{array}\right]
```
 
```math
\overset{\; \mathstrut R_1 \to R_1 + 3R_3 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 1 & 0 & 0 & -4 \\ 0 & -1 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{array}\right] \; \overset{\; \mathstrut R_2 \to -R_2 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 1 & 0 & 0 & -4 \\ 0 & 1 & 0 & -1 \\ 0 & 0 & 1 & 0 \end{array}\right]
```
 
Solución: $r = -4,\quad s = -1,\quad t = 0$
 
### Ejercicio 51:
 
```math
\left[\begin{array}{ccc|c} -5 & 0 & 1 & -16 \\ -2 & 2 & 1 & -7 \\ 5 & 2 & 4 & 11 \end{array}\right] \; \overset{\; \mathstrut R_1 \leftrightarrow R_2 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} -2 & 2 & 1 & -7 \\ -5 & 0 & 1 & -16 \\ 5 & 2 & 4 & 11 \end{array}\right]
```
 
```math
\underset{\; \mathstrut R_3 \to 2R_3 + 5R_1 \;}{\overset{\; \mathstrut R_2 \to 2R_2 - 5R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -2 & 2 & 1 & -7 \\ 0 & -10 & -3 & 3 \\ 0 & 14 & 13 & -13 \end{array}\right] \; \underset{\; \mathstrut R_3 \to 5R_3 + 7R_2 \;}{\overset{\; \mathstrut R_1 \to 5R_1 + R_2 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -10 & 0 & 2 & -32 \\ 0 & -10 & -3 & 3 \\ 0 & 0 & 44 & -44 \end{array}\right]
```
 
```math
\underset{\; \mathstrut R_3 \to \frac{1}{44}R_3 \;}{\overset{\; \mathstrut R_1 \to \frac{1}{2}R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -5 & 0 & 1 & -16 \\ 0 & -10 & -3 & 3 \\ 0 & 0 & 1 & -1 \end{array}\right] \; \underset{\; \mathstrut R_2 \to R_2 + 3R_3 \;}{\overset{\; \mathstrut R_1 \to R_1 - R_3 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -5 & 0 & 0 & -15 \\ 0 & -10 & 0 & 0 \\ 0 & 0 & 1 & -1 \end{array}\right]
```
 
```math
\underset{\; \mathstrut R_2 \to \frac{1}{10}R_2 \;}{\overset{\; \mathstrut R_1 \to \frac{1}{5}R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} -1 & 0 & 0 & -3 \\ 0 & -1 & 0 & 0 \\ 0 & 0 & 1 & -1 \end{array}\right] \; \underset{\; \mathstrut R_2 \to -R_2 \;}{\overset{\; \mathstrut R_1 \to -R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} 1 & 0 & 0 & 3 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & -1 \end{array}\right]
```
 
Solución: $r = 3,\quad s = 0,\quad t = -1$
 
### Ejercicio 52:
 
```math
\left[\begin{array}{ccc|c} 1 & 1 & -5 & 11 \\ -1 & -2 & -3 & 7 \\ 6 & -5 & 0 & 28 \end{array}\right] \; \underset{\; \mathstrut R_3 \to R_3 - 6R_1 \;}{\overset{\; \mathstrut R_2 \to R_2 + R_1 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} 1 & 1 & -5 & 11 \\ 0 & -1 & -8 & 18 \\ 0 & -11 & 30 & -38 \end{array}\right]
```
 
```math
\underset{\; \mathstrut R_3 \to R_3 - 11R_2 \;}{\overset{\; \mathstrut R_1 \to R_1 + R_2 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} 1 & 0 & -13 & 29 \\ 0 & -1 & -8 & 18 \\ 0 & 0 & 118 & -236 \end{array}\right] \; \overset{\; \mathstrut R_3 \to \frac{1}{118}R_3 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 1 & 0 & -13 & 29 \\ 0 & -1 & -8 & 18 \\ 0 & 0 & 1 & -2 \end{array}\right]
```
 
```math
\underset{\; \mathstrut R_2 \to R_2 + 8R_3 \;}{\overset{\; \mathstrut R_1 \to R_1 + 13R_3 \;}{\longrightarrow}} \; \left[\begin{array}{ccc|c} 1 & 0 & 0 & 3 \\ 0 & -1 & 0 & 2 \\ 0 & 0 & 1 & -2 \end{array}\right] \; \overset{\; \mathstrut R_2 \to -R_2 \;}{\longrightarrow} \; \left[\begin{array}{ccc|c} 1 & 0 & 0 & 3 \\ 0 & 1 & 0 & -2 \\ 0 & 0 & 1 & -2 \end{array}\right]
```
 
Solución: $x = 3,\quad y = -2,\quad z = -2$
