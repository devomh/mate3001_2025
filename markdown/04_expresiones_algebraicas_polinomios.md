# Expresiones Algebraicas y Polinomios

## Expresiones Algebraicas

### Definición

Una **expresión algebraica** es una combinación de variables, números, y operaciones aritméticas (suma, resta, multiplicación, división y exponenciación).

### Ejemplos de Expresiones Algebraicas

- $2x + 3y - 5$
- $\frac{x^2 - 4}{x + 2}$
- $3a^2b - 7ab + 2b^2$
- $\sqrt{x + 1} + 2x^3$

### Componentes de una Expresión Algebraica

**Términos:** Las partes de una expresión algebraica separadas por los signos $+$ o $-$.

En la expresión $3x^2 - 5xy + 7y^2 - 2$:
- Primer término: $3x^2$
- Segundo término: $-5xy$
- Tercer término: $7y^2$
- Cuarto término: $-2$

**Coeficientes:** Los números que multiplican a las variables.

En el término $3x^2$: el coeficiente es $3$
En el término $-5xy$: el coeficiente es $-5$

**Variables:** Las letras que representan números desconocidos o que pueden variar.

**Exponentes:** Los números que indican cuántas veces se multiplica la variable por sí misma.

---

## Dominio de una Expresión Algebraica

El **dominio** de una expresión algebraica es el conjunto de todos los valores reales que pueden asignarse a las variables para que la expresión esté definida.

### Restricciones Comunes

1. **División por cero:** El denominador no puede ser cero
2. **Raíces pares de números negativos:** No están definidas en los reales
3. **Logaritmos de números negativos o cero:** No están definidos en los reales

### Ejemplos de Dominios

**Ejemplo 1:** $f(x) = \frac{2x + 1}{x - 3}$

El denominador $x - 3 = 0$ cuando $x = 3$

**Dominio:** $\{x \in \mathbb{R} \mid x \neq 3\}$ o $(-\infty, 3) \cup (3, \infty)$

**Ejemplo 2:** $g(x) = \frac{x^2 - 4}{x^2 - 9}$

El denominador $x^2 - 9 = 0$ cuando $x^2 = 9$, es decir, $x = \pm 3$

**Dominio:** $\{x \in \mathbb{R} \mid x \neq 3, x \neq -3\}$ o $(-\infty, -3) \cup (-3, 3) \cup (3, \infty)$

**Ejemplo 3:** $h(x) = \sqrt{x - 2}$

Para que la raíz cuadrada esté definida: $x - 2 \geq 0$, por tanto $x \geq 2$

**Dominio:** $\{x \in \mathbb{R} \mid x \geq 2\}$ o $[2, \infty)$

---

## Polinomios

### Definición

Un **polinomio** en la variable $x$ es una expresión algebraica de la forma:

$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0$$

donde:
- $n$ es un entero no negativo
- $a_n, a_{n-1}, \ldots, a_1, a_0$ son números reales llamados **coeficientes**
- $a_n \neq 0$ (coeficiente principal)

### Terminología de Polinomios

**Grado del polinomio:** El mayor exponente de la variable.

**Término principal:** El término con el mayor exponente.

**Coeficiente principal:** El coeficiente del término principal.

**Término constante:** El término sin variable (exponente cero).

### Ejemplos de Clasificación

**Ejemplo 1:** $P(x) = 3x^4 - 2x^3 + x - 7$
- Grado: 4
- Término principal: $3x^4$
- Coeficiente principal: 3
- Término constante: $-7$

**Ejemplo 2:** $Q(x) = -5x^2 + 8$
- Grado: 2
- Término principal: $-5x^2$
- Coeficiente principal: $-5$
- Término constante: 8

---

## Clasificación de Polinomios por Grado

| **Grado** | **Nombre** | **Forma General** | **Ejemplo** |
|-----------|------------|-------------------|-------------|
| 0 | Constante | $a_0$ | $5$ |
| 1 | Lineal | $a_1x + a_0$ | $2x - 3$ |
| 2 | Cuadrático | $a_2x^2 + a_1x + a_0$ | $x^2 - 4x + 4$ |
| 3 | Cúbico | $a_3x^3 + a_2x^2 + a_1x + a_0$ | $2x^3 + x^2 - x + 1$ |
| 4 | Cuártico | $a_4x^4 + a_3x^3 + a_2x^2 + a_1x + a_0$ | $x^4 - 16$ |
| $n$ | Grado $n$ | $a_nx^n + \cdots + a_1x + a_0$ | - |

---

## Clasificación por Número de Términos

| **Número de Términos** | **Nombre** | **Ejemplo** |
|------------------------|------------|-------------|
| 1 | Monomio | $3x^2$ |
| 2 | Binomio | $2x + 5$ |
| 3 | Trinomio | $x^2 - 3x + 2$ |
| Más de 3 | Polinomio | $2x^4 - x^3 + 3x^2 - x + 1$ |

---

## Operaciones con Polinomios

### Suma y Resta de Polinomios

Para sumar o restar polinomios, se combinan los **términos semejantes** (términos con la misma variable elevada a la misma potencia).

**Ejemplo:**
$$\begin{align}
P(x) &= 3x^3 - 2x^2 + x - 4 \\
Q(x) &= x^3 + 5x^2 - 3x + 1
\end{align}$$

**Suma:**
$$P(x) + Q(x) = (3x^3 + x^3) + (-2x^2 + 5x^2) + (x - 3x) + (-4 + 1)$$
$$= 4x^3 + 3x^2 - 2x - 3$$

**Resta:**
$$P(x) - Q(x) = (3x^3 - x^3) + (-2x^2 - 5x^2) + (x - (-3x)) + (-4 - 1)$$
$$= 2x^3 - 7x^2 + 4x - 5$$

---

## Leyes de los Exponentes

### Leyes Fundamentales

Para $a, b \neq 0$ y $m, n$ enteros:

| **Ley** | **Fórmula** | **Ejemplo** |
|---------|-------------|-------------|
| Producto | $a^m \cdot a^n = a^{m+n}$ | $x^3 \cdot x^2 = x^5$ |
| Cociente | $\frac{a^m}{a^n} = a^{m-n}$ | $\frac{x^5}{x^2} = x^3$ |
| Potencia de potencia | $(a^m)^n = a^{mn}$ | $(x^2)^3 = x^6$ |
| Potencia de producto | $(ab)^n = a^n b^n$ | $(2x)^3 = 8x^3$ |
| Potencia de cociente | $\left(\frac{a}{b}\right)^n = \frac{a^n}{b^n}$ | $\left(\frac{x}{2}\right)^2 = \frac{x^2}{4}$ |
| Exponente cero | $a^0 = 1$ | $5^0 = 1, x^0 = 1$ |
| Exponente negativo | $a^{-n} = \frac{1}{a^n}$ | $x^{-2} = \frac{1}{x^2}$ |

### Ejemplos de Aplicación

**Ejemplo 1:** Simplificar $(2x^3y^2)^4$
$$= 2^4 \cdot (x^3)^4 \cdot (y^2)^4 = 16x^{12}y^8$$

**Ejemplo 2:** Simplificar $\frac{15x^7y^3}{3x^2y^5}$
$$= \frac{15}{3} \cdot \frac{x^7}{x^2} \cdot \frac{y^3}{y^5} = 5x^5y^{-2} = \frac{5x^5}{y^2}$$

**Ejemplo 3:** Simplificar $(x^{-2}y^3)^{-1}$
$$= x^{(-2)(-1)} \cdot y^{3(-1)} = x^2y^{-3} = \frac{x^2}{y^3}$$

---

## Multiplicación de Polinomios

### Monomio por Monomio

Para multiplicar monomios, se multiplican los coeficientes y se suman los exponentes de variables iguales.

**Ejemplo:** $(3x^2y)(4x^3y^2) = 12x^5y^3$

### Monomio por Polinomio

Se aplica la **propiedad distributiva**: cada término del polinomio se multiplica por el monomio.

**Ejemplo:**
$$2x^2(3x^3 - 4x + 5) = 6x^5 - 8x^3 + 10x^2$$

### Binomio por Binomio

Se multiplica cada término del primer binomio por cada término del segundo binomio.

**Ejemplo:**
$$(2x + 3)(x - 4) = 2x \cdot x + 2x \cdot (-4) + 3 \cdot x + 3 \cdot (-4)$$
$$= 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12$$

### Método FOIL

Para $(a + b)(c + d)$:
- **F**irst: $a \cdot c$
- **O**uter: $a \cdot d$
- **I**nner: $b \cdot c$
- **L**ast: $b \cdot d$

**Resultado:** $ac + ad + bc + bd$

---

## Productos Notables

### Cuadrado de un Binomio

$$(a + b)^2 = a^2 + 2ab + b^2$$
$$(a - b)^2 = a^2 - 2ab + b^2$$

**Ejemplos:**
- $(x + 3)^2 = x^2 + 6x + 9$
- $(2x - 5)^2 = 4x^2 - 20x + 25$

### Diferencia de Cuadrados

$$(a + b)(a - b) = a^2 - b^2$$

**Ejemplos:**
- $(x + 4)(x - 4) = x^2 - 16$
- $(3x + 2y)(3x - 2y) = 9x^2 - 4y^2$

### Cubo de un Binomio

$$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$
$$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$

**Ejemplo:**
$(x + 2)^3 = x^3 + 6x^2 + 12x + 8$

### Suma y Diferencia de Cubos

$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$

**Ejemplos:**
- $x^3 + 8 = (x + 2)(x^2 - 2x + 4)$
- $8x^3 - 27 = (2x - 3)(4x^2 + 6x + 9)$

---

## Multiplicación de Polinomios en General

### Método de Distribución

Para multiplicar dos polinomios, cada término del primer polinomio se multiplica por cada término del segundo polinomio.

**Ejemplo:**
$$(x^2 + 2x - 1)(x + 3)$$
$$= x^2(x + 3) + 2x(x + 3) - 1(x + 3)$$
$$= x^3 + 3x^2 + 2x^2 + 6x - x - 3$$
$$= x^3 + 5x^2 + 5x - 3$$

### Representación Tabular

**Descripción visual:** Una tabla de multiplicación donde se organizan los términos del primer polinomio en filas y los del segundo en columnas. Cada celda contiene el producto de los términos correspondientes de fila y columna.

Para $(2x^2 + x - 3)(x^2 - 2x + 1)$:

|   | $x^2$ | $-2x$ | $1$ |
|---|-------|-------|-----|
| $2x^2$ | $2x^4$ | $-4x^3$ | $2x^2$ |
| $x$ | $x^3$ | $-2x^2$ | $x$ |
| $-3$ | $-3x^2$ | $6x$ | $-3$ |

**Resultado:** $2x^4 - 4x^3 + x^3 + 2x^2 - 2x^2 - 3x^2 + x + 6x - 3$
$$= 2x^4 - 3x^3 - 3x^2 + 7x - 3$$

---

## Factorización de Polinomios

### Factor Común

Se extrae el mayor factor común de todos los términos.

**Ejemplo:**
$$6x^3 + 9x^2 - 12x = 3x(2x^2 + 3x - 4)$$

### Agrupación

Se agrupan términos para factorizar por partes.

**Ejemplo:**
$$ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)$$

### Trinomio Cuadrático

Para $ax^2 + bx + c$, se buscan dos números que multiplicados den $ac$ y sumados den $b$.

**Ejemplo:**
$$x^2 + 5x + 6 = (x + 2)(x + 3)$$

### Diferencia de Cuadrados

$$a^2 - b^2 = (a + b)(a - b)$$

**Ejemplo:**
$$4x^2 - 9 = (2x + 3)(2x - 3)$$

---

## Algoritmos de Factorización

### Pasos Generales

1. **Factor común:** Extraer el máximo factor común
2. **Número de términos:**
   - 2 términos: Buscar diferencia de cuadrados o suma/diferencia de cubos
   - 3 términos: Buscar trinomio cuadrático perfecto o factorizable
   - 4+ términos: Intentar agrupación
3. **Verificar:** Multiplicar los factores para comprobar

### Ejemplo Completo

Factorizar: $2x^3 - 8x$

1. **Factor común:** $2x(x^2 - 4)$
2. **Diferencia de cuadrados:** $2x(x + 2)(x - 2)$

**Verificación:** $2x(x + 2)(x - 2) = 2x(x^2 - 4) = 2x^3 - 8x$ ✓

---

## Casos Especiales de Factorización

### Trinomio Cuadrático Perfecto

$$a^2 + 2ab + b^2 = (a + b)^2$$
$$a^2 - 2ab + b^2 = (a - b)^2$$

**Identificación:** El primer y tercer término son cuadrados perfectos, y el término medio es el doble del producto de las raíces.

**Ejemplo:**
$$9x^2 + 12x + 4 = (3x)^2 + 2(3x)(2) + 2^2 = (3x + 2)^2$$

### Suma y Diferencia de Cubos

$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$

**Ejemplos:**
- $x^3 + 27 = (x + 3)(x^2 - 3x + 9)$
- $8x^3 - 1 = (2x - 1)(4x^2 + 2x + 1)$

---

## Aplicaciones de Polinomios

### Evaluación de Polinomios

Para evaluar un polinomio $P(x)$ en $x = a$, se sustituye $x$ por $a$.

**Ejemplo:**
Si $P(x) = 2x^3 - 3x^2 + x - 5$, entonces:
$$P(2) = 2(2)^3 - 3(2)^2 + 2 - 5 = 16 - 12 + 2 - 5 = 1$$

### Teorema del Residuo

Si un polinomio $P(x)$ se divide por $(x - a)$, entonces el residuo es $P(a)$.

### Teorema del Factor

$(x - a)$ es un factor de $P(x)$ si y solo si $P(a) = 0$.

---

## Ejercicios Resueltos

### Ejercicio 1: Multiplicación

Multiplicar: $(3x^2 - 2x + 1)(x + 4)$

**Solución:**
$$= 3x^2(x + 4) - 2x(x + 4) + 1(x + 4)$$
$$= 3x^3 + 12x^2 - 2x^2 - 8x + x + 4$$
$$= 3x^3 + 10x^2 - 7x + 4$$

### Ejercicio 2: Producto Notable

Desarrollar: $(2x - 3y)^2$

**Solución:**
$$= (2x)^2 - 2(2x)(3y) + (3y)^2$$
$$= 4x^2 - 12xy + 9y^2$$

### Ejercicio 3: Factorización

Factorizar: $x^4 - 16$

**Solución:**
$$= (x^2)^2 - 4^2 = (x^2 + 4)(x^2 - 4)$$
$$= (x^2 + 4)(x + 2)(x - 2)$$

---

## Resumen de Conceptos Clave

1. **Expresiones Algebraicas:** Combinaciones de variables, números y operaciones
2. **Dominio:** Conjunto de valores permitidos para las variables
3. **Polinomios:** Expresiones algebraicas con exponentes enteros no negativos
4. **Clasificación:** Por grado (lineal, cuadrático, cúbico...) y por términos (monomio, binomio, trinomio...)
5. **Operaciones:** Suma, resta, multiplicación y factorización siguiendo reglas específicas
6. **Leyes de Exponentes:** Reglas fundamentales para manipular potencias
7. **Productos Notables:** Fórmulas para multiplicaciones especiales
8. **Factorización:** Técnicas para expresar polinomios como productos de factores

Estos conceptos son fundamentales para el álgebra avanzada y forman la base para el estudio de ecuaciones, funciones y cálculo.

