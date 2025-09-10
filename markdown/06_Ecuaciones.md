# Secciones 3.1–3.3: Ecuaciones

## 3.1 Ecuaciones: Definición y Terminología

- **Ecuación:** enunciado de igualdad entre dos expresiones algebraicas.
  - Ejemplos: $8x^3 + x - 9 = 6x - 1$, $3x + 8 = 6$, $\dfrac{3x}{5x+1} = 9$, $(1+x)^2 = 5x^2 - 7$.
- **Solución:** valor(es) que hacen cierta la ecuación; decimos que “satisfacen” la ecuación.
  - Verificación de ejemplo: para $2x + 3 = 7$, $x=2$ satisface pues $2(2)+3 = 7$.
- **Terminología por variables:**
  - Ecuación en una variable, dos variables, o $n$ variables (según cuántas variables envuelva).
- **Identidad:** ecuación siempre cierta (para todos los valores reales en los dominios de sus expresiones).
  - Ejemplos: $-11=-11$, $3x=3x$, $-x^2+4x-5 = -x^2+4x-5$.

## 3.2 Ecuaciones lineales en una variable

- **Definición:** ecuación que puede escribirse $ax + b = 0$ con $a\neq 0$, $a,b\in\mathbb{R}$.
- **Ecuaciones equivalentes:** tienen las mismas soluciones.  
  Ej.: $2x+3=5$ y $6x+9=15$ son equivalentes ($x=1$).
- **Operaciones que producen ecuaciones equivalentes:**
  - Sumar/restar la misma cantidad a ambos lados.
  - Multiplicar/dividir por una misma cantidad distinta de cero.
  - Intercambiar los lados sin alterar signos.
- **Objetivo al resolver:** aislar la variable (hacer el coeficiente de $x$ igual a $+1$).
- **Procedimiento típico:**
  - Evaluar exponentes; eliminar paréntesis y/o fracciones.
  - Reunir términos con $x$ a un lado y constantes al otro.
  - Dividir por el coeficiente de $x$.

### Ejemplo A
Resolver $3x - 9 = 0$.

- Sumar $9$: $3x = 9$.
- Dividir entre $3$: $x = 3$.

### Ejemplo B (con fracciones)
Resolver $\dfrac{x-1}{5} = \dfrac{2x-1}{7}$.

- Multiplicar por el MCD $35$:
  $7(x-1) = 5(2x-1)$.
- Expandir: $7x - 7 = 10x - 5$.
- Pasar términos: $-2 = 3x$.
- Dividir entre $3$: $x = -\dfrac{2}{3}$.

## 3.3 Ecuaciones que contienen fracciones

- Idea clave: eliminar denominadores multiplicando por el MCD y luego proceder como en lineales.

### Ejemplo C (racionales más complejos)
Resolver $\dfrac{3x+1}{6x-2} = \dfrac{2x+5}{4x-3}$.

- Multiplicar por $2(3x-1)(4x-3)$ para eliminar denominadores:
  $$2(3x-1)(4x-3)\cdot \frac{3x+1}{6x-2} = 2(3x-1)(4x-3)\cdot \frac{2x+5}{4x-3}.$$
- Simplificar factores comunes y eliminar paréntesis (distribuir).
- Reunir términos, resolver la ecuación lineal resultante y verificar restricciones (denominadores $\neq 0$).