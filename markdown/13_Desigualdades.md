# Desigualdades lineales

En esta lección introducimos las desigualdades lineales en una variable, sus reglas de manipulación, la resolución paso a paso y la representación del conjunto solución con notación de intervalos y en la recta real. También vemos desigualdades compuestas del tipo “y” (intersección) y “o” (unión), y practicamos con ejercicios.

Formulación correcta:
- Ecuación: $4x - 7 = 19$ tiene solución única $x = 26/4 = 13/2$.
- Desigualdad: $4x - 7 \le 19$ tiene soluciones $x \le 26/4 = 13/2$, que es un intervalo $(-\infty, 13/2]$.

En la sección 1.7 se resuelve una desigualdad lineal cuya solución es $x > \dfrac{2}{3}$ y, por tanto, el conjunto solución es $(\tfrac{2}{3}, \infty)$. El punto clave es que, al multiplicar por un número negativo $(-\tfrac{1}{6})$, la desigualdad invierte su sentido.

Ejemplo (LaTeX): “Un boleto y un refrigerio cuestan a lo más $18. El boleto cuesta $x y el refrigerio $5. ¿Qué valores de $x$ son posibles?” Se modela con $x + 5 \le 18$, por lo que $x \le 13$.

---

## Conceptos básicos (revisado)

- Símbolos: `<`, `>`, `\le`, `\ge`.
- Solución: todo valor de la variable que hace verdadera la desigualdad.
- Conjunto solución: generalmente un intervalo o unión de intervalos en `\mathbb{R}`.
- Representaciones: notación de intervalos y gráfica en la recta real.

Versión LaTeX corregida:
- Símbolos: $<$, $>$, $\le$, $\ge$.
- Conjunto solución: generalmente un intervalo o unión de intervalos en $\mathbb{R}$.

Ejemplo de diferencia entre ecuación y desigualdad:

- Ecuación: `\;4x - 7 = 19` tiene solución única `\;x = 26/4 = 13/2`.
- Desigualdad: `\;4x - 7 \le 19` tiene soluciones `\;x \le 26/4 = 13/2`, que es un intervalo `(-\infty, 13/2]`.

---

## Reglas para desigualdades

Versión LaTeX corregida:

Sea $A, B, C \in \mathbb{R}$.

1) Suma: si $A \le B$, entonces $A + C \le B + C$.

2) Resta: si $A \le B$, entonces $A - C \le B - C$.

3) Multiplicación/División por positivo: si $C > 0$ y $A \le B$, entonces $CA \le CB$ y $\dfrac{A}{C} \le \dfrac{B}{C}$.

4) Multiplicación/División por negativo: si $C < 0$ y $A \le B$, entonces $CA \ge CB$ y $\dfrac{A}{C} \ge $\dfrac{B}{C}$. (Se invierte la desigualdad.)

5) Recíprocos positivos: si $0 < A \le B$, entonces $\dfrac{1}{A} \ge \dfrac{1}{B}$. (Se invierte la desigualdad.)

6) Suma de desigualdades: si $A \le B$ y $C \le D$, entonces $A + C \le B + D$.

Nota: al multiplicar o dividir por un número negativo, se invierte la dirección de la desigualdad.

—

Sea `A, B, C \in \mathbb{R}`.

1) Suma: si `A \le B`, entonces `A + C \le B + C`.

2) Resta: si `A \le B`, entonces `A - C \le B - C`.

3) Multiplicación/División por positivo: si `C > 0` y `A \le B`, entonces `CA \le CB` y `\dfrac{A}{C} \le \dfrac{B}{C}`.

4) Multiplicación/División por negativo: si `C < 0` y `A \le B`, entonces `CA \ge CB` y `\dfrac{A}{C} \ge \dfrac{B}{C}`. (Se invierte la desigualdad.)

5) Recíprocos positivos: si `0 < A \le B`, entonces `\dfrac{1}{A} \ge \dfrac{1}{B}`. (Se invierte la desigualdad.)

6) Suma de desigualdades: si `A \le B` y `C \le D`, entonces `A + C \le B + D`.

Observación clave: al multiplicar o dividir por un número negativo, se invierte la dirección de la desigualdad.

---

## Resolución de desigualdades lineales (una variable)

Idea: aislar la variable aplicando las reglas anteriores, cuidando el cambio de sentido al multiplicar/dividir por negativos.

**Ejemplo 1 (Lineal sencilla)**

Resuelva y grafique el conjunto solución de `\;4x - 7 \le 19`.

Resuelva y grafique el conjunto solución de $4x - 7 \\le 19$.



Resuelva $\dfrac{2x - 3}{4} \ge \dfrac{x + 1}{2}$.

Resuelva $2x + 1 < -3 \;\text{o}\; 2x + 1 \ge 7$.

\[
\begin{aligned}
4x - 7 \le 19 &\iff 4x \le 26 \\
&\iff x \le \tfrac{26}{4} = \tfrac{13}{2}.
\end{aligned}
\]

Solución: $(-\infty, -2) \cup [3, \infty)$.

Solución: $[2, 5)$.

No hay solución; el conjunto solución es $\varnothing$.

Solución: $(-\infty, -2)$.

Solución: $(-\infty, 13/2]$.

Solución: `\;(-\infty,\,13/2]`.

**Ejemplo 2 (Coeficiente negativo)**

Resuelva `\;-3x + 5 > 11` y exprese en notación de intervalos.

\[
\begin{aligned}
-3x + 5 &> 11 &&\iff -3x > 6 \\
x &< -2 &&\text{(se divide por }-3\text{ e invierte)}
\end{aligned}
\]

Solución: `\;(-\infty, -2)`.

**Ejemplo 3 (Fracciones)**

Resuelva `\; \dfrac{2x - 3}{4} \ge \dfrac{x + 1}{2}`.

\[
\begin{aligned}
\frac{2x - 3}{4} \ge \frac{x + 1}{2}
&\iff 2x - 3 \ge 2(x + 1) && \text{(multiplicamos por 4 > 0)}\\
&\iff 2x - 3 \ge 2x + 2 \\
&\iff -3 \ge 2 \quad\text{(falso)}
\end{aligned}
\]

No hay solución; el conjunto solución es `\;\varnothing`.

**Ejemplo 4 (Resultado de referencia del PDF, compuesto por pasos equivalentes)**

En la sección 1.7 se resuelve una desigualdad lineal cuya solución es `\;x > \dfrac{2}{3}` y, por tanto, el conjunto solución es `\;(\tfrac{2}{3},\,\infty)`. El punto clave es que, al multiplicar por un número negativo `\;(-\tfrac{1}{6})`, la desigualdad invierte su sentido.

---

## Desigualdades compuestas

Hay dos formas comunes:

- Versión LaTeX corregida:
- Tipo “y” (intersección): $a < \\text{expresión} \\le b$. Se resuelve aplicando operaciones a los tres lados a la vez.
- Tipo “o” (unión): $\\text{expresión} < a \\;\\text{o}\\; \\text{expresión} \\ge b$. Se resuelve cada parte y se toma la unión.

- Tipo “y” (intersección): `a < \;\text{expresión}\; \le b`. Se resuelve aplicando operaciones a los tres lados a la vez.
- Tipo “o” (unión): `\text{expresión} < a \;\;\text{o}\;\; \text{expresión} \ge b`. Se resuelve cada parte y se toma la unión.

**Ejemplo 5 (Compuesta tipo “y”)**

Resuelva `\;4 \le 3x - 2 < 13`.

\[
\begin{aligned}
4 \le 3x - 2 &< 13 \\
6 \le 3x &< 15 &&\text{(sume 2)}\\
2 \le x &< 5 &&\text{(divida entre 3 > 0)}
\end{aligned}
\]

Solución: `\;[2,5)`.

**Ejemplo 6 (Compuesta tipo “o”)**

Resuelva `\;2x + 1 < -3 \;\;\text{o}\;\; 2x + 1 \ge 7`.

\[
\begin{aligned}
2x + 1 < -3 &\iff 2x < -4 \iff x < -2, \\
2x + 1 \ge 7 &\iff 2x \ge 6 \iff x \ge 3.
\end{aligned}
\]

Solución: `\;(-\infty,-2) \cup [3,\infty)`.

---

## Modelado con desigualdades (básico)

- Traducir restricciones verbales a desigualdades lineales.
- Identificar si se trata de intersección (todas a la vez) o unión (alternativas).

Ejemplo: “Un boleto y un refrigerio cuestan a lo más $18. El boleto cuesta $x y el refrigerio $5. ¿Qué valores de `x` son posibles?” Se modela con `x + 5 \le 18`, por lo que `x \le 13`.

---

## Ejercicios propuestos (lineales)

Resuelva cada desigualdad, exprese la solución en notación de intervalos y grafique el conjunto solución en la recta real. En las compuestas, identifique si es tipo “y” (intersección) o “o” (unión).

Versión LaTeX corregida (mismas consignas):

Lineales simples:

1) $2x - 7 \le 11$  
2) $4x > 10$  
3) $3x - 5 \ge 11$  
4) $5 - 3x < 16$  
5) $\dfrac{x}{3} + 2 \le \dfrac{5}{6}$  
6) $\dfrac{2 - x}{4} > -\dfrac{1}{2}$  
7) $-6x + 9 \ge -3$  
8) $7 - 2x > 1$  
9) $\dfrac{5x - 1}{2} \le 3x + 4$  
10) $\dfrac{x - 4}{3} \ge \dfrac{2x + 1}{6}$

Compuestas (tipo “y”):

11) $-1 \le 2x + 3 < 7$  
12) $1 < \dfrac{3x - 2}{2} \le 5$  
13) $-4 \le \dfrac{x - 1}{2} < 2$

Compuestas (tipo “o”):

14) $3x - 5 < -2 \;\text{o}\; 3x - 5 \ge 7$  
15) $\dfrac{x + 2}{4} \le -1 \;\text{o}\; \dfrac{x + 2}{4} > 3$

Modelado:

16) Un artículo con precio $p$ recibe un descuento de $6 y debe costar al menos $19 después del descuento. Escriba y resuelva la desigualdad para $p$.

17) En un examen de 100 puntos, cada pregunta correcta ($x$) vale 4 puntos y cada incorrecta ($y$) resta 1 punto. Si solo se contestan 30 preguntas, exprese con una desigualdad que el puntaje sea al menos 80, y dé los valores posibles de $x$.

Lineales simples:

1) `\;2x - 7 \le 11`  
2) `\;4x > 10`  
3) `\;3x - 5 \ge 11`  
4) `\;5 - 3x < 16`  
5) `\;\dfrac{x}{3} + 2 \le \dfrac{5}{6}`  
6) `\;\dfrac{2 - x}{4} > -\dfrac{1}{2}`  
7) `\;-6x + 9 \ge -3`  
8) `\;7 - 2x > 1`  
9) `\;\dfrac{5x - 1}{2} \le 3x + 4`  
10) `\;\dfrac{x - 4}{3} \ge \dfrac{2x + 1}{6}`

Compuestas (tipo “y”):

11) `\;-1 \le 2x + 3 < 7`  
12) `\;1 < \dfrac{3x - 2}{2} \le 5`  
13) `\;-4 \le \dfrac{x - 1}{2} < 2`

Compuestas (tipo “o”):

14) `\;3x - 5 < -2 \;\;\text{o}\;\; 3x - 5 \ge 7`  
15) `\;\dfrac{x + 2}{4} \le -1 \;\;\text{o}\;\; \dfrac{x + 2}{4} > 3`

Modelado:

16) Un artículo con precio `p` recibe un descuento de $6 y debe costar al menos $19 después del descuento. Escriba y resuelva la desigualdad para `p`.

17) En un examen de 100 puntos, cada pregunta correcta (x) vale 4 puntos y cada incorrecta (y) resta 1 punto. Si solo se contestan 30 preguntas, exprese con una desigualdad que el puntaje sea al menos 80, y dé los valores posibles de `x`.


