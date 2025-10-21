# Sistemas de ecuaciones lineales y sus soluciones

- Un sistema de ecuaciones es un conjunto de ecuaciones con las mismas incógnitas.
- En el sistema cada ecuación es lineal.
- Una solución de un sistema es una asignación de valores para las incógnitas que hace verdadera cada una de las ecuaciones.
- Resolver un sistema significa hallar todas las soluciones del sistema.

**Ejemplo**

Sea el sistema

$$
\begin{cases}
2x - y = 5 \\
x + 4y = 7
\end{cases}
$$

Es un sistema de 2 ecuaciones lineales con 2 variables, cuya solución es \((3,1)\).

**Método Gráfico**

- Graficar cada ecuación.
- Hallar los puntos de intersección. Las soluciones son las coordenadas \(x\) y \(y\) de los puntos de intersección.

**Método de Sustitución**

- Despejar una incógnita. Escoja una ecuación y despeje una incógnita en términos de la otra incógnita.
- Sustituir. Sustituya la expresión hallada en el paso anterior en la otra ecuación para obtener una ecuación con una incógnita y, a continuación, despeje esa incógnita.
- Sustituir a la inversa. En la expresión hallada en el primer paso, sustituya el valor hallado para despejar la incógnita restante.

**Método por Eliminación**

- Ajustar los coeficientes. Multiplique una o más de las ecuaciones por números apropiados, de modo que el coeficiente de una incógnita de una ecuación sea el negativo de su coeficiente en la otra ecuación.
- Sumar las ecuaciones. Sume las dos ecuaciones para eliminar una incógnita y, a continuación, despeje la incógnita restante.
- Sustituir a la inversa. En una de las ecuaciones originales, sustituya el valor hallado y despeje la incógnita restante.

**Ejercicios**

Resolver los siguientes sistemas de ecuaciones por los 3 métodos:

1. $$\begin{cases}2x - y = 4 \\ 3x + y = 6\end{cases}$$
2. $$\begin{cases}x + y = 7 \\ 2x - 3y = -1\end{cases}$$
3. $$\begin{cases}2x + 5y = 15 \\ 4x + y = 21\end{cases}$$

---

## Solución

1) Sistema

$$
\begin{cases}
2x - y = 4 \\
3x + y = 6
\end{cases}
$$

**Método Gráfico**

- (Se grafican ambas rectas y se identifica su intersección.)

**Método de Sustitución**

- Despejando \(y\) de la primera ecuación: \(y = 2x - 4\).
- Reemplazando en la segunda ecuación: \(3x + (2x - 4) = 6\).
- Resolver la ecuación resultante: \(5x = 10 \Rightarrow x = 2\).
- Sustituir en el despeje: \(y = 2(2) - 4 = 0\).
- Solución del sistema: \((x,y) = (2,0)\).

**Método por Eliminación**

- Los coeficientes de \(y\) en las ecuaciones ya son opuestos, no necesitan ajustarse.
- Sumar ambas ecuaciones del sistema:
  $$
  \begin{aligned}
  (2x - y) + (3x + y) &= 4 + 6 \\
  5x + 0y &= 10
  \end{aligned}
  $$
- Resolver: \(5x = 10 \Rightarrow x = 2\).
- Sustituir en una ecuación original: \(2(2) - y = 4 \Rightarrow y = 0\).
- Solución del sistema: \((x,y) = (2,0)\).

---

## Número de soluciones de un sistema lineal con dos incógnitas

Para un sistema de ecuaciones lineales con dos incógnitas, exactamente una de las siguientes afirmaciones es verdadera:

- El sistema tiene exactamente una solución.
- El sistema no tiene solución.
- El sistema tiene un número infinito de soluciones.

---

## Modelado con sistemas lineales

- Identificar las variables. Identifique las cantidades que el problema pide hallar. Introduzca notación para las variables.
- Expresar todas las cantidades desconocidas en términos de las variables. Exprese todas las cantidades mencionadas en el problema en términos de las variables definidas.
- Establecer un sistema de ecuaciones. Encuentre los datos cruciales del problema que den las relaciones entre las expresiones y establezca un sistema de ecuaciones (un modelo) que exprese estas relaciones.
- Resolver el sistema e interpretar los resultados. Resuelva el sistema, verifique sus soluciones y dé su respuesta final como una frase que conteste la pregunta planteada en el problema.

**Ejercicios**

- Encuentre dos números cuya suma es 34 y cuya diferencia es 10.
- Un hombre tiene 14 monedas en su bolsillo, todas las cuales son de 10 o de 25 centavos. Si el valor total de su cambio es $2.75, ¿cuántas monedas de 10 centavos y cuántas de 25 centavos tiene?
