# Quiz 20: Funciones
**MATE 3001 - Matemática Elemental**
**Lección 17: Funciones — Definición y gráficas**

---

## Pregunta 1: Identificación de Funciones (Básico)

**Enunciado:**
Determine si la siguiente relación es una función. Justifique su respuesta.

\[
\{(1, 4), (2, 7), (3, 4), (4, 10)\}
\]

**Solución:**

Para determinar si una relación es función, debemos verificar que **cada valor de entrada (primera coordenada) tenga exactamente una salida (segunda coordenada)**.

Examinemos cada par ordenado:
- Entrada 1 → Salida 4
- Entrada 2 → Salida 7
- Entrada 3 → Salida 4
- Entrada 4 → Salida 10

**Análisis:**
Cada valor de entrada (1, 2, 3, 4) aparece exactamente una vez en la relación. Note que las entradas 1 y 3 tienen la misma salida (4), pero esto **no viola** la definición de función. Lo importante es que cada entrada tenga una única salida, no que las salidas sean diferentes.

**Respuesta:** **Sí es función.**

**Error común:** Algunos estudiantes piensan incorrectamente que si dos entradas diferentes tienen la misma salida, la relación no es función. Esto es falso. Una función puede tener múltiples entradas que producen la misma salida (función muchos-a-uno), pero una entrada no puede producir múltiples salidas.

---

## Pregunta 2: Identificación de Funciones (Intermedio)

**Enunciado:**
Determine si la siguiente relación es una función. Justifique su respuesta.

\[
\{(5, 2), (3, 8), (5, -1), (7, 6)\}
\]

**Solución:**

Verificamos que cada valor de entrada aparezca exactamente una vez:

- Entrada 5 → Salida 2
- Entrada 3 → Salida 8
- Entrada 5 → Salida -1  ← **PROBLEMA**
- Entrada 7 → Salida 6

**Análisis:**
El valor de entrada 5 aparece **dos veces** con diferentes salidas (2 y -1). Esto viola la definición de función, ya que una función debe asignar a cada elemento del dominio exactamente un elemento del rango.

Si graficáramos esta relación, podríamos trazar una recta vertical en \(x = 5\) que intersectaría la gráfica en dos puntos: \((5, 2)\) y \((5, -1)\). Esta es una aplicación de la **prueba de la recta vertical**.

**Respuesta:** **No es función.**

**Explicación conceptual:** Para que sea función, necesitaríamos eliminar uno de los pares con entrada 5. Por ejemplo, \(\{(5, 2), (3, 8), (7, 6)\}\) sería una función.

---

## Pregunta 3: Evaluación de Funciones (Básico)

**Enunciado:**
Dada la función \(f(x) = 2x^2 - 5x + 3\), evalúe \(f(3)\).

**Solución:**

**Paso 1:** Sustituir \(x = 3\) en la función:
\[
f(3) = 2(3)^2 - 5(3) + 3
\]

**Paso 2:** Evaluar el exponente:
\[
f(3) = 2(9) - 5(3) + 3
\]

**Paso 3:** Realizar las multiplicaciones:
\[
f(3) = 18 - 15 + 3
\]

**Paso 4:** Simplificar de izquierda a derecha:
\[
f(3) = 3 + 3 = 6
\]

**Respuesta:** \(f(3) = 6\)

**Verificación:** Podemos verificar siguiendo el orden de operaciones:
1. Exponentes primero: \(3^2 = 9\)
2. Multiplicaciones: \(2 \times 9 = 18\) y \(5 \times 3 = 15\)
3. Operaciones de izquierda a derecha: \(18 - 15 + 3 = 6\)

---

## Pregunta 4: Evaluación de Funciones con Negativos

**Enunciado:**
Dada la función \(g(x) = 3x^2 + 4x - 2\), evalúe \(g(-2)\).

**Solución:**

**Paso 1:** Sustituir \(x = -2\) en la función (use paréntesis):
\[
g(-2) = 3(-2)^2 + 4(-2) - 2
\]

**Paso 2:** Evaluar el exponente \((-2)^2\):
\[
(-2)^2 = (-2) \times (-2) = 4
\]

**Importante:** \((-2)^2 = 4\), no -4. El exponente se aplica al número completo, incluyendo el signo negativo.

\[
g(-2) = 3(4) + 4(-2) - 2
\]

**Paso 3:** Realizar las multiplicaciones:
\[
g(-2) = 12 + (-8) - 2
\]

**Paso 4:** Simplificar:
\[
g(-2) = 12 - 8 - 2 = 2
\]

**Respuesta:** \(g(-2) = 2\)

**Errores comunes:**
1. **Error de signo:** Calcular \((-2)^2 = -4\) (incorrecto)
2. **Error en multiplicación:** \(4(-2) = -8\), no +8
3. **Omitir paréntesis:** Escribir \(3-2^2\) en lugar de \(3(-2)^2\)

**Regla importante:** Cuando sustituimos números negativos, siempre use paréntesis para evitar errores de signo.

---

## Pregunta 5: Evaluación en Cero (Intercepto en Y)

**Enunciado:**
Dada la función \(h(x) = 4x^2 - 7x + 5\), evalúe \(h(0)\). ¿Qué representa este valor geométricamente?

**Solución:**

**Paso 1:** Sustituir \(x = 0\):
\[
h(0) = 4(0)^2 - 7(0) + 5
\]

**Paso 2:** Simplificar:
\[
h(0) = 0 - 0 + 5 = 5
\]

**Respuesta:** \(h(0) = 5\)

**Interpretación geométrica:**

El valor \(h(0) = 5\) representa el **intercepto en \(y\)** de la función. Este es el punto donde la gráfica de la función cruza el eje \(y\).

Como coordenada, este punto es \((0, 5)\).

**Observación importante:**
Para cualquier función \(f(x) = ax^2 + bx + c\), el término constante \(c\) es siempre el intercepto en \(y\), ya que:
\[
f(0) = a(0)^2 + b(0) + c = c
\]

En este caso, \(c = 5\), confirmando nuestro resultado.

**Aplicación:** El intercepto en \(y\) es útil para graficar funciones, ya que nos da un punto conocido por el cual pasa la gráfica.

---

## Pregunta 6: De Evaluación a Punto Ordenado

**Enunciado:**
Dada la función lineal \(f(x) = 3x - 4\), evalúe \(f(2)\) y exprese el resultado como un punto ordenado \((x, y)\) en el plano cartesiano.

**Solución:**

**Paso 1:** Evaluar \(f(2)\):
\[
f(2) = 3(2) - 4 = 6 - 4 = 2
\]

**Paso 2:** Interpretar como punto ordenado.

Cuando evaluamos \(f(a) = b\), esto significa que:
- El valor de entrada es \(x = a\)
- El valor de salida es \(y = b\)
- El punto correspondiente es \((a, b)\)

En nuestro caso:
- Entrada: \(x = 2\)
- Salida: \(f(2) = 2\), por lo tanto \(y = 2\)

**Respuesta:** El punto ordenado es \((2, 2)\).

**Conexión conceptual:**
Este punto \((2, 2)\) está en la gráfica de la función \(f(x) = 3x - 4\). Si graficáramos esta función lineal, la recta pasaría por el punto \((2, 2)\).

**Error común:** Algunos estudiantes escriben el punto al revés como \((2, 2)\) está correcto, pero si \(f(2) = 5\), el punto sería \((2, 5)\), no \((5, 2)\). Recuerde: el formato es siempre \((x, f(x))\) o \((x, y)\).

**Verificación:** Podemos verificar sustituyendo en la ecuación original:
\[
y = 3x - 4 \quad \Rightarrow \quad 2 = 3(2) - 4 = 6 - 4 = 2 \quad \checkmark
\]

---

## Pregunta 7: Intercepto en Y de Función Lineal

**Enunciado:**
Para la función lineal \(f(x) = -2x + 7\):

a) Identifique el intercepto en \(y\).
b) Exprese el intercepto como un punto ordenado.
c) Explique qué representa este punto en la gráfica de la función.

**Solución:**

**Parte (a): Identificar el intercepto en \(y\)**

El intercepto en \(y\) ocurre cuando \(x = 0\). Evaluamos:
\[
f(0) = -2(0) + 7 = 0 + 7 = 7
\]

**Respuesta:** El intercepto en \(y\) es 7.

---

**Parte (b): Expresar como punto ordenado**

El intercepto en \(y\) ocurre en el punto donde \(x = 0\) y \(y = f(0) = 7\).

**Respuesta:** El punto es \((0, 7)\).

---

**Parte (c): Interpretación gráfica**

El punto \((0, 7)\) representa el lugar donde la recta cruza el eje \(y\).

**Características importantes:**
- Este punto tiene coordenada \(x = 0\)
- La coordenada \(y\) es el valor del término constante en la función lineal
- Para cualquier función lineal \(f(x) = mx + b\), el intercepto en \(y\) es siempre \(b\)
- Geométricamente, si graficamos la función, la recta pasa por \((0, 7)\) en el eje vertical

**Método alternativo (Forma pendiente-intercepto):**

La función \(f(x) = -2x + 7\) está en la forma \(y = mx + b\) donde:
- \(m = -2\) es la pendiente
- \(b = 7\) es el intercepto en \(y\)

Por lo tanto, podemos identificar directamente que el intercepto en \(y\) es 7, y el punto es \((0, 7)\).

**Utilidad:** Conocer el intercepto en \(y\) es útil para graficar rápidamente una función lineal, ya que nos da un punto inicial desde el cual podemos usar la pendiente para encontrar otros puntos.

---

## Resumen de Conceptos Clave

### Identificación de Funciones:
- Una relación es función si cada entrada tiene exactamente una salida
- Múltiples entradas pueden compartir la misma salida
- Una entrada no puede tener múltiples salidas

### Evaluación de Funciones:
- Sustituir el valor de \(x\) en la expresión
- Usar paréntesis cuando se sustituyen números negativos
- Seguir el orden de operaciones (PEMDAS)
- Cuidado con los signos en multiplicaciones

### Interpretación Geométrica:
- \(f(a) = b\) corresponde al punto \((a, b)\)
- \(f(0)\) da el intercepto en \(y\)
- El punto \((0, f(0))\) es donde la gráfica cruza el eje \(y\)
- Para funciones lineales \(f(x) = mx + b\), el intercepto es \(b\)

---

**Fin del Quiz 20**
