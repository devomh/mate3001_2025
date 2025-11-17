# Quiz 18: Ecuaciones Racionales
**MATE 3001 - Matemática Elemental**
**UPR-Humacao**

## Lección 15: Ecuaciones Racionales

Este quiz contiene 10 preguntas de desarrollo basadas en los ejercicios propuestos de la lección. Cada pregunta requiere una solución completa que incluya:
1. Identificación de restricciones del dominio
2. Determinación del MCD
3. Eliminación de denominadores y simplificación
4. Resolución de la ecuación resultante
5. Verificación de soluciones

---

## Pregunta 1: Ecuación racional con dos fracciones

**Enunciado:**
Resuelva la siguiente ecuación racional: \(\displaystyle \frac{3}{x-2} + \frac{4}{x+3} = 1\)

**Solución:**

**Paso 1: Restricciones**

Los denominadores son \(x-2\) y \(x+3\). Por lo tanto:
- \(x \neq 2\) (para evitar \(\frac{3}{0}\))
- \(x \neq -3\) (para evitar \(\frac{4}{0}\))

**Paso 2: Determinar el MCD**

El MCD de \((x-2)\) y \((x+3)\) es: \((x-2)(x+3)\)

**Paso 3: Multiplicar ambos lados por el MCD**

\[
\left(\frac{3}{x-2} + \frac{4}{x+3}\right) \cdot (x-2)(x+3) = 1 \cdot (x-2)(x+3)
\]

Distribuyendo:
\[
3(x+3) + 4(x-2) = (x-2)(x+3)
\]

**Paso 4: Expandir y simplificar**

Lado izquierdo:
\[
3x + 9 + 4x - 8 = 7x + 1
\]

Lado derecho:
\[
(x-2)(x+3) = x^2 + 3x - 2x - 6 = x^2 + x - 6
\]

Igualando:
\[
7x + 1 = x^2 + x - 6
\]

Llevando todo a un lado:
\[
0 = x^2 + x - 6 - 7x - 1
\]
\[
0 = x^2 - 6x - 7
\]

**Paso 5: Factorizar**

Buscamos dos números que multipliquen a \(-7\) y sumen \(-6\): \(-7\) y \(1\)

\[
0 = (x - 7)(x + 1)
\]

Por lo tanto:
\[
x = 7 \quad \text{o} \quad x = -1
\]

**Paso 6: Verificación**

Para \(x = 7\):
\[
\frac{3}{7-2} + \frac{4}{7+3} = \frac{3}{5} + \frac{4}{10} = \frac{3}{5} + \frac{2}{5} = \frac{5}{5} = 1 \quad \checkmark
\]

Para \(x = -1\):
\[
\frac{3}{-1-2} + \frac{4}{-1+3} = \frac{3}{-3} + \frac{4}{2} = -1 + 2 = 1 \quad \checkmark
\]

Ambas soluciones son válidas y no violan las restricciones (\(x \neq 2\) y \(x \neq -3\)).

**Respuesta:** \(x = 7\) o \(x = -1\)

---

## Pregunta 2: Ecuación con denominador factorizable

**Enunciado:**
Resuelva la siguiente ecuación racional: \(\displaystyle \frac{x}{x^2-4} - \frac{2}{x+2} = 0\)

**Solución:**

**Paso 1: Factorizar denominadores**

Note que \(x^2 - 4 = (x-2)(x+2)\) (diferencia de cuadrados)

La ecuación se reescribe como:
\[
\frac{x}{(x-2)(x+2)} - \frac{2}{x+2} = 0
\]

**Paso 2: Restricciones**

- \(x \neq 2\) (para evitar división por cero)
- \(x \neq -2\) (para evitar división por cero)

**Paso 3: Determinar el MCD**

El MCD es \((x-2)(x+2)\)

**Paso 4: Multiplicar por el MCD**

\[
\frac{x}{(x-2)(x+2)} \cdot (x-2)(x+2) - \frac{2}{x+2} \cdot (x-2)(x+2) = 0
\]

Simplificando:
\[
x - 2(x-2) = 0
\]

**Paso 5: Resolver**

\[
x - 2x + 4 = 0
\]
\[
-x + 4 = 0
\]
\[
x = 4
\]

**Paso 6: Verificación**

Para \(x = 4\):
\[
\frac{4}{4^2-4} - \frac{2}{4+2} = \frac{4}{16-4} - \frac{2}{6} = \frac{4}{12} - \frac{2}{6} = \frac{1}{3} - \frac{1}{3} = 0 \quad \checkmark
\]

La solución es válida y no viola las restricciones (\(x \neq \pm 2\)).

**Respuesta:** \(x = 4\)

---

## Pregunta 3: Ecuación con potencias crecientes de x

**Enunciado:**
Resuelva la siguiente ecuación racional: \(\displaystyle \frac{1}{x} + \frac{2}{x^2} - \frac{3}{x^3} = 0\)

**Solución:**

**Paso 1: Restricción**

El único denominador que contiene la variable es una potencia de \(x\):
- \(x \neq 0\) (para evitar división por cero)

**Paso 2: Determinar el MCD**

El MCD de \(x\), \(x^2\), y \(x^3\) es: \(x^3\)

**Paso 3: Multiplicar por el MCD**

\[
\left(\frac{1}{x} + \frac{2}{x^2} - \frac{3}{x^3}\right) \cdot x^3 = 0 \cdot x^3
\]

Distribuyendo:
\[
\frac{1}{x} \cdot x^3 + \frac{2}{x^2} \cdot x^3 - \frac{3}{x^3} \cdot x^3 = 0
\]

Simplificando:
\[
x^2 + 2x - 3 = 0
\]

**Paso 4: Factorizar**

Buscamos dos números que multipliquen a \(-3\) y sumen \(2\): \(3\) y \(-1\)

\[
(x + 3)(x - 1) = 0
\]

Por lo tanto:
\[
x = -3 \quad \text{o} \quad x = 1
\]

**Paso 5: Verificación**

Para \(x = -3\):
\[
\frac{1}{-3} + \frac{2}{(-3)^2} - \frac{3}{(-3)^3} = -\frac{1}{3} + \frac{2}{9} - \frac{3}{-27}
\]
\[
= -\frac{1}{3} + \frac{2}{9} + \frac{1}{9} = -\frac{3}{9} + \frac{3}{9} = 0 \quad \checkmark
\]

Para \(x = 1\):
\[
\frac{1}{1} + \frac{2}{1^2} - \frac{3}{1^3} = 1 + 2 - 3 = 0 \quad \checkmark
\]

Ambas soluciones son válidas y no violan la restricción (\(x \neq 0\)).

**Respuesta:** \(x = -3\) o \(x = 1\)

---

## Pregunta 4: Ecuación racional con solución extraña

**Enunciado:**
Resuelva la siguiente ecuación racional: \(\displaystyle \frac{2x}{x^2-1} + \frac{3}{x-1} - \frac{1}{x+1} = 0\)

**Solución:**

**Paso 1: Factorizar denominadores**

Note que \(x^2 - 1 = (x-1)(x+1)\) (diferencia de cuadrados)

La ecuación se reescribe como:
\[
\frac{2x}{(x-1)(x+1)} + \frac{3}{x-1} - \frac{1}{x+1} = 0
\]

**Paso 2: Restricciones**

- \(x \neq 1\) (para evitar división por cero)
- \(x \neq -1\) (para evitar división por cero)

**Paso 3: Determinar el MCD**

El MCD es \((x-1)(x+1)\)

**Paso 4: Multiplicar por el MCD**

\[
\frac{2x}{(x-1)(x+1)} \cdot (x-1)(x+1) + \frac{3}{x-1} \cdot (x-1)(x+1) - \frac{1}{x+1} \cdot (x-1)(x+1) = 0
\]

Simplificando:
\[
2x + 3(x+1) - (x-1) = 0
\]

**Paso 5: Expandir y resolver**

\[
2x + 3x + 3 - x + 1 = 0
\]
\[
4x + 4 = 0
\]
\[
4x = -4
\]
\[
x = -1
\]

**Paso 6: Verificación**

La solución obtenida es \(x = -1\), pero esto **viola la restricción** \(x \neq -1\).

Si intentamos sustituir \(x = -1\) en la ecuación original:
\[
\frac{2(-1)}{(-1)^2-1} + \frac{3}{-1-1} - \frac{1}{-1+1} = \frac{-2}{0} + \frac{3}{-2} - \frac{1}{0}
\]

Esto produce división por cero (expresión indefinida).

**Conclusión:** La única solución algebraica es **extraña** porque viola el dominio de la ecuación. Por lo tanto, esta ecuación **no tiene solución**.

**Respuesta:** No hay solución (la solución \(x = -1\) es extraña)

---

## Pregunta 5: Ecuación con denominadores cuadráticos

**Enunciado:**
Resuelva la siguiente ecuación racional: \(\displaystyle \frac{x+1}{x^2+5x+6} - \frac{x-1}{x^2+4x+3} = \frac{1}{x+3}\)

**Solución:**

**Paso 1: Factorizar denominadores**

Para \(x^2 + 5x + 6\):
- Buscamos dos números que multipliquen a \(6\) y sumen \(5\): \(2\) y \(3\)
- \(x^2 + 5x + 6 = (x+2)(x+3)\)

Para \(x^2 + 4x + 3\):
- Buscamos dos números que multipliquen a \(3\) y sumen \(4\): \(1\) y \(3\)
- \(x^2 + 4x + 3 = (x+1)(x+3)\)

La ecuación se reescribe como:
\[
\frac{x+1}{(x+2)(x+3)} - \frac{x-1}{(x+1)(x+3)} = \frac{1}{x+3}
\]

**Paso 2: Restricciones**

- \(x \neq -1\) (hace cero el denominador \(x+1\))
- \(x \neq -2\) (hace cero el denominador \(x+2\))
- \(x \neq -3\) (hace cero el denominador \(x+3\))

**Paso 3: Determinar el MCD**

El MCD es \((x+1)(x+2)(x+3)\)

**Paso 4: Multiplicar por el MCD**

\[
\frac{x+1}{(x+2)(x+3)} \cdot (x+1)(x+2)(x+3) - \frac{x-1}{(x+1)(x+3)} \cdot (x+1)(x+2)(x+3) = \frac{1}{x+3} \cdot (x+1)(x+2)(x+3)
\]

Simplificando:
\[
(x+1)^2 - (x-1)(x+2) = (x+1)(x+2)
\]

**Paso 5: Expandir**

Lado izquierdo:
- \((x+1)^2 = x^2 + 2x + 1\)
- \((x-1)(x+2) = x^2 + 2x - x - 2 = x^2 + x - 2\)
- \((x+1)^2 - (x-1)(x+2) = x^2 + 2x + 1 - x^2 - x + 2 = x + 3\)

Lado derecho:
- \((x+1)(x+2) = x^2 + 3x + 2\)

Igualando:
\[
x + 3 = x^2 + 3x + 2
\]

**Paso 6: Resolver**

Llevando todo a un lado:
\[
0 = x^2 + 3x + 2 - x - 3
\]
\[
0 = x^2 + 2x - 1
\]

Esta ecuación no se factoriza fácilmente. Usamos la fórmula cuadrática con \(a = 1\), \(b = 2\), \(c = -1\):

\[
x = \frac{-2 \pm \sqrt{2^2 - 4(1)(-1)}}{2(1)} = \frac{-2 \pm \sqrt{4 + 4}}{2} = \frac{-2 \pm \sqrt{8}}{2}
\]
\[
x = \frac{-2 \pm 2\sqrt{2}}{2} = \frac{-2}{2} \pm \frac{2\sqrt{2}}{2} = -1 \pm \sqrt{2}
\]

Por lo tanto:
\[
x = -1 + \sqrt{2} \quad \text{o} \quad x = -1 - \sqrt{2}
\]

**Paso 7: Verificación**

Calculamos los valores aproximados:
- \(x = -1 + \sqrt{2} \approx -1 + 1.414 = 0.414\)
- \(x = -1 - \sqrt{2} \approx -1 - 1.414 = -2.414\)

Verificamos que ninguno viola las restricciones:
- \(0.414 \neq -1, -2, -3\) ✓
- \(-2.414 \neq -1, -2, -3\) ✓

Ambas soluciones son válidas.

**Respuesta:** \(x = -1 + \sqrt{2}\) o \(x = -1 - \sqrt{2}\)

---

## Pregunta 6: Interpretación de restricciones

**Enunciado:**
Para la ecuación \(\displaystyle \frac{3}{x-2} + \frac{4}{x+3} = 1\), explique detalladamente:

a) ¿Por qué es necesario establecer restricciones antes de resolver la ecuación?

b) ¿Qué valores están prohibidos y por qué?

c) Si durante el proceso algebraico se obtuviera \(x = 2\) como solución, ¿qué debería concluir?

**Solución:**

**Parte a) Necesidad de restricciones**

Las restricciones son necesarias porque las expresiones racionales (fracciones con variables en el denominador) solo están definidas cuando el denominador es diferente de cero. La división por cero es una operación matemática indefinida.

Al establecer las restricciones ANTES de resolver, identificamos qué valores pueden causar problemas y debemos excluirlos del conjunto de soluciones posibles. Esto previene que aceptemos valores que hacen que la ecuación original pierda sentido matemático.

**Parte b) Valores prohibidos**

Para la ecuación \(\displaystyle \frac{3}{x-2} + \frac{4}{x+3} = 1\):

- **\(x \neq 2\)**: Si \(x = 2\), el primer término se convierte en \(\frac{3}{2-2} = \frac{3}{0}\), que es indefinido.

- **\(x \neq -3\)**: Si \(x = -3\), el segundo término se convierte en \(\frac{4}{-3+3} = \frac{4}{0}\), que es indefinido.

Estos valores anulan los denominadores y deben excluirse del dominio de la ecuación.

**Parte c) Solución que viola restricciones**

Si durante el proceso algebraico se obtuviera \(x = 2\):

1. **Reconocer como solución extraña**: Este valor es una solución extraña (o espuria) porque viola la restricción \(x \neq 2\).

2. **Explicar por qué ocurre**: Las soluciones extrañas aparecen cuando multiplicamos ambos lados de la ecuación por el MCD (que contiene la variable). Esta operación puede introducir soluciones que no existían en la ecuación original.

3. **Verificar en la ecuación original**: Al sustituir \(x = 2\) en la ecuación original, obtendríamos \(\frac{3}{0}\), confirmando que no es una solución válida.

4. **Conclusión**: Se debe **descartar** \(x = 2\) y concluir que la ecuación no tiene esa solución. Si fuera la única solución obtenida, la ecuación no tendría solución.

**Respuesta:**
- a) Para identificar valores que causan división por cero antes de resolver
- b) \(x \neq 2\) y \(x \neq -3\) porque anulan los denominadores
- c) Se debe descartar \(x = 2\) por ser una solución extraña que viola las restricciones

---

## Pregunta 7: Identificación del MCD correcto

**Enunciado:**
Para cada una de las siguientes ecuaciones racionales, identifique:
- Todos los denominadores presentes
- Las restricciones del dominio
- El MCD (mínimo común denominador) apropiado

**a)** \(\displaystyle \frac{2}{x} + \frac{3}{x^2} = \frac{1}{x^3}\)

**b)** \(\displaystyle \frac{x}{x^2-4} - \frac{2}{x+2} = 0\)

**c)** \(\displaystyle \frac{1}{x-1} + \frac{2}{x+1} = \frac{3}{x^2-1}\)

**Solución:**

**Parte a)** \(\displaystyle \frac{2}{x} + \frac{3}{x^2} = \frac{1}{x^3}\)

**Denominadores:** \(x\), \(x^2\), \(x^3\)

**Restricciones:** \(x \neq 0\) (todos los denominadores se anulan cuando \(x = 0\))

**MCD:** \(x^3\)

*Explicación:* El MCD debe ser el máximo exponente de \(x\) presente, que es \(x^3\). Este es divisible por \(x\), \(x^2\), y \(x^3\).

---

**Parte b)** \(\displaystyle \frac{x}{x^2-4} - \frac{2}{x+2} = 0\)

**Paso 1: Factorizar denominadores**

\(x^2 - 4 = (x-2)(x+2)\) (diferencia de cuadrados)

**Denominadores factorizados:** \((x-2)(x+2)\) y \((x+2)\)

**Restricciones:**
- \(x \neq 2\) (anula el factor \(x-2\))
- \(x \neq -2\) (anula el factor \(x+2\))

**MCD:** \((x-2)(x+2)\)

*Explicación:* El MCD debe contener todos los factores distintos con su máxima potencia. Aquí necesitamos ambos factores \((x-2)\) y \((x+2)\), cada uno con exponente 1.

---

**Parte c)** \(\displaystyle \frac{1}{x-1} + \frac{2}{x+1} = \frac{3}{x^2-1}\)

**Paso 1: Factorizar denominadores**

\(x^2 - 1 = (x-1)(x+1)\) (diferencia de cuadrados)

**Denominadores factorizados:** \((x-1)\), \((x+1)\), y \((x-1)(x+1)\)

**Restricciones:**
- \(x \neq 1\) (anula el factor \(x-1\))
- \(x \neq -1\) (anula el factor \(x+1\))

**MCD:** \((x-1)(x+1)\)

*Explicación:* El MCD debe ser el producto de los factores distintos. Aunque \((x-1)(x+1)\) ya aparece en uno de los denominadores, este también es divisible por \((x-1)\) y \((x+1)\) individualmente, por lo que es el MCD apropiado.

**Respuesta:**
- a) Denominadores: \(x, x^2, x^3\); Restricción: \(x \neq 0\); MCD: \(x^3\)
- b) Denominadores: \((x-2)(x+2), (x+2)\); Restricciones: \(x \neq \pm 2\); MCD: \((x-2)(x+2)\)
- c) Denominadores: \((x-1), (x+1), (x-1)(x+1)\); Restricciones: \(x \neq \pm 1\); MCD: \((x-1)(x+1)\)

---

## Pregunta 8: Proceso completo paso a paso

**Enunciado:**
Resuelva la ecuación \(\displaystyle \frac{1}{x} + \frac{2}{x^2} - \frac{3}{x^3} = 0\) siguiendo explícitamente cada uno de los seis pasos del procedimiento general:

1. Escribir las restricciones
2. Multiplicar por el MCD
3. Simplificar y resolver
4. Encontrar las soluciones
5. Verificar las soluciones
6. Dar la respuesta final

Muestre TODO su trabajo algebraico.

**Solución:**

**Paso 1: Escribir las restricciones**

Los denominadores son \(x\), \(x^2\), y \(x^3\). Todos se anulan cuando \(x = 0\).

**Restricción:** \(x \neq 0\)

---

**Paso 2: Multiplicar por el MCD**

El MCD de \(x\), \(x^2\), y \(x^3\) es \(x^3\).

Multiplicamos ambos lados de la ecuación por \(x^3\):

\[
\left(\frac{1}{x} + \frac{2}{x^2} - \frac{3}{x^3}\right) \cdot x^3 = 0 \cdot x^3
\]

Distribuyendo el \(x^3\):

\[
\frac{1}{x} \cdot x^3 + \frac{2}{x^2} \cdot x^3 - \frac{3}{x^3} \cdot x^3 = 0
\]

Simplificando cada término:
- \(\frac{1}{x} \cdot x^3 = \frac{x^3}{x} = x^2\)
- \(\frac{2}{x^2} \cdot x^3 = \frac{2x^3}{x^2} = 2x\)
- \(\frac{3}{x^3} \cdot x^3 = \frac{3x^3}{x^3} = 3\)

Obtenemos:
\[
x^2 + 2x - 3 = 0
\]

---

**Paso 3: Simplificar y resolver**

La ecuación resultante es cuadrática: \(x^2 + 2x - 3 = 0\)

Ya está en forma estándar (\(ax^2 + bx + c = 0\)).

---

**Paso 4: Encontrar las soluciones**

Factorizamos la ecuación cuadrática. Buscamos dos números que:
- Multipliquen a \(-3\)
- Sumen \(2\)

Los números son \(3\) y \(-1\):

\[
x^2 + 2x - 3 = (x + 3)(x - 1) = 0
\]

Por la propiedad del producto cero:
\[
x + 3 = 0 \quad \text{o} \quad x - 1 = 0
\]

Por lo tanto:
\[
x = -3 \quad \text{o} \quad x = 1
\]

---

**Paso 5: Verificar las soluciones**

**Verificación para \(x = -3\):**

Primero comprobamos que no viola la restricción: \(-3 \neq 0\) ✓

Sustituimos en la ecuación original:
\[
\frac{1}{-3} + \frac{2}{(-3)^2} - \frac{3}{(-3)^3}
\]

Calculamos cada término:
- \(\frac{1}{-3} = -\frac{1}{3}\)
- \(\frac{2}{(-3)^2} = \frac{2}{9}\)
- \(\frac{3}{(-3)^3} = \frac{3}{-27} = -\frac{1}{9}\)

Sumando:
\[
-\frac{1}{3} + \frac{2}{9} - \left(-\frac{1}{9}\right) = -\frac{1}{3} + \frac{2}{9} + \frac{1}{9}
\]

Convertimos a denominador común (9):
\[
-\frac{3}{9} + \frac{2}{9} + \frac{1}{9} = \frac{-3 + 2 + 1}{9} = \frac{0}{9} = 0 \quad \checkmark
\]

**Verificación para \(x = 1\):**

Primero comprobamos que no viola la restricción: \(1 \neq 0\) ✓

Sustituimos en la ecuación original:
\[
\frac{1}{1} + \frac{2}{1^2} - \frac{3}{1^3} = 1 + 2 - 3 = 0 \quad \checkmark
\]

---

**Paso 6: Respuesta final**

Ambas soluciones son válidas porque:
1. No violan la restricción \(x \neq 0\)
2. Satisfacen la ecuación original

**Respuesta:** \(x = -3\) o \(x = 1\)

---

## Pregunta 9: Análisis de errores comunes

**Enunciado:**
Un estudiante intentó resolver la ecuación \(\displaystyle \frac{2x}{x^2-1} + \frac{3}{x-1} - \frac{1}{x+1} = 0\) y obtuvo como respuesta \(x = -1\). Sin embargo, el instructor indicó que la respuesta es incorrecta.

a) Identifique qué error cometió el estudiante.

b) Explique por qué \(x = -1\) no es una solución válida.

c) ¿Cuál es la respuesta correcta para esta ecuación?

d) Explique el concepto de "solución extraña" en el contexto de este problema.

**Solución:**

**Parte a) Error cometido**

El estudiante cometió el error de **no verificar la solución en la ecuación original**. Aunque el proceso algebraico puede estar correcto y producir \(x = -1\), el estudiante no comprobó si este valor viola las restricciones del dominio establecidas al inicio del problema.

Este es uno de los errores más comunes al resolver ecuaciones racionales: olvidar el paso crucial de verificación.

---

**Parte b) Por qué \(x = -1\) no es válida**

**Análisis de las restricciones:**

Primero, factorizamos los denominadores:
- \(x^2 - 1 = (x-1)(x+1)\)

Los denominadores en la ecuación son:
- \((x-1)(x+1)\) en el primer término
- \(x-1\) en el segundo término
- \(x+1\) en el tercer término

**Restricciones del dominio:**
- \(x \neq 1\) (anula \(x-1\))
- \(x \neq -1\) (anula \(x+1\))

**Por qué \(x = -1\) no es válida:**

Si intentamos sustituir \(x = -1\) en la ecuación original:

\[
\frac{2(-1)}{(-1)^2-1} + \frac{3}{-1-1} - \frac{1}{-1+1}
\]
\[
= \frac{-2}{1-1} + \frac{3}{-2} - \frac{1}{0}
\]
\[
= \frac{-2}{0} + \frac{3}{-2} - \frac{1}{0}
\]

Obtenemos **división por cero** en el primer y tercer término, lo cual es indefinido matemáticamente. Por lo tanto, \(x = -1\) **viola la restricción** del dominio y no puede ser una solución válida.

---

**Parte c) Respuesta correcta**

Trabajemos el problema correctamente:

**Paso 1: Restricciones**
\(x \neq \pm 1\)

**Paso 2: MCD**
\((x-1)(x+1)\)

**Paso 3: Multiplicar por MCD**
\[
2x + 3(x+1) - (x-1) = 0
\]

**Paso 4: Simplificar**
\[
2x + 3x + 3 - x + 1 = 0
\]
\[
4x + 4 = 0
\]
\[
x = -1
\]

**Paso 5: Verificar**

La única solución algebraica es \(x = -1\), pero esta viola la restricción \(x \neq -1\).

**Respuesta correcta:** La ecuación **no tiene solución**. (Todos los valores obtenidos algebraicamente son extraños.)

---

**Parte d) Concepto de solución extraña**

**Definición:** Una solución extraña es un valor que:
1. Se obtiene correctamente del proceso algebraico
2. NO satisface la ecuación original
3. Generalmente viola las restricciones del dominio

**Por qué ocurren:**

Cuando multiplicamos ambos lados de una ecuación racional por el MCD (que contiene la variable), estamos multiplicando por una expresión que **puede ser cero** para ciertos valores de \(x\).

Esta operación puede introducir "soluciones falsas" que no existían en la ecuación original. Es como si el proceso algebraico "creara" soluciones artificiales.

**En este problema:**

- El proceso algebraico produce \(x = -1\)
- Este valor hace que el MCD \((x-1)(x+1) = 0\)
- Al multiplicar por cero, introducimos una solución que no es válida para la ecuación original
- Por eso \(x = -1\) es una solución extraña

**Lección importante:** SIEMPRE debemos verificar cada solución en la ecuación original. La verificación es el único método confiable para detectar soluciones extrañas.

**Respuesta:**
- a) No verificar la solución en la ecuación original
- b) Porque viola la restricción \(x \neq -1\) y produce división por cero
- c) No hay solución
- d) Es un valor obtenido algebraicamente que viola las restricciones del dominio y debe descartarse

---

## Pregunta 10: Problema aplicado con ecuaciones racionales

**Enunciado:**
La suma de un número y su recíproco (inverso multiplicativo) es \(\frac{5}{2}\). Encuentre todos los números que satisfacen esta condición.

**Nota:** El recíproco de un número \(x\) es \(\frac{1}{x}\).

**Solución:**

**Paso 1: Plantear la ecuación**

Sea \(x\) el número buscado. Su recíproco es \(\frac{1}{x}\).

Según el problema:
\[
x + \frac{1}{x} = \frac{5}{2}
\]

---

**Paso 2: Identificar restricciones**

El recíproco \(\frac{1}{x}\) solo está definido cuando \(x \neq 0\).

**Restricción:** \(x \neq 0\)

---

**Paso 3: Determinar el MCD**

El MCD de \(1\) (denominador implícito de \(x\)) y \(x\) es: \(x\)

---

**Paso 4: Multiplicar por el MCD**

Multiplicamos ambos lados por \(x\):

\[
\left(x + \frac{1}{x}\right) \cdot x = \frac{5}{2} \cdot x
\]

Distribuyendo:
\[
x \cdot x + \frac{1}{x} \cdot x = \frac{5x}{2}
\]

Simplificando:
\[
x^2 + 1 = \frac{5x}{2}
\]

---

**Paso 5: Eliminar la fracción**

Multiplicamos ambos lados por 2:
\[
2(x^2 + 1) = 5x
\]
\[
2x^2 + 2 = 5x
\]

Llevamos todo a un lado:
\[
2x^2 - 5x + 2 = 0
\]

---

**Paso 6: Resolver la ecuación cuadrática**

Usamos factorización. Buscamos dos números que multipliquen a \(2 \times 2 = 4\) y sumen \(-5\): \(-4\) y \(-1\)

Reescribimos el término medio:
\[
2x^2 - 4x - x + 2 = 0
\]

Factorizamos por agrupación:
\[
2x(x - 2) - 1(x - 2) = 0
\]
\[
(2x - 1)(x - 2) = 0
\]

Por lo tanto:
\[
2x - 1 = 0 \quad \text{o} \quad x - 2 = 0
\]
\[
x = \frac{1}{2} \quad \text{o} \quad x = 2
\]

---

**Paso 7: Verificar las soluciones**

**Para \(x = \frac{1}{2}\):**

Comprobamos que \(\frac{1}{2} \neq 0\) ✓

Verificamos en la ecuación original:
\[
\frac{1}{2} + \frac{1}{\frac{1}{2}} = \frac{1}{2} + 2 = \frac{1}{2} + \frac{4}{2} = \frac{5}{2} \quad \checkmark
\]

**Para \(x = 2\):**

Comprobamos que \(2 \neq 0\) ✓

Verificamos en la ecuación original:
\[
2 + \frac{1}{2} = \frac{4}{2} + \frac{1}{2} = \frac{5}{2} \quad \checkmark
\]

---

**Paso 8: Interpretar el resultado**

Ambas soluciones son válidas matemáticamente. Observamos una relación interesante:
- \(\frac{1}{2}\) y \(2\) son recíprocos uno del otro
- Si un número y su recíproco suman \(\frac{5}{2}\), entonces el recíproco y su recíproco (el número original) también suman \(\frac{5}{2}\)

Esto tiene sentido porque la operación es simétrica: \(x + \frac{1}{x} = \frac{1}{x} + x\)

---

**Respuesta:** Los números que satisfacen la condición son \(x = \frac{1}{2}\) o \(x = 2\).

**Verificación de la propiedad recíproca:**
- El recíproco de \(\frac{1}{2}\) es \(\frac{1}{\frac{1}{2}} = 2\)
- El recíproco de \(2\) es \(\frac{1}{2}\)

Por lo tanto, las dos soluciones son números recíprocos entre sí, lo cual es consistente con la naturaleza simétrica del problema.

---

## Resumen de conceptos clave

Este quiz cubre los siguientes conceptos fundamentales de ecuaciones racionales:

1. **Restricciones del dominio**: Identificar valores prohibidos que causan división por cero
2. **Mínimo común denominador (MCD)**: Determinar el MCD apropiado y usarlo para eliminar fracciones
3. **Factorización**: Reconocer y factorizar expresiones como diferencia de cuadrados y trinomios
4. **Soluciones extrañas**: Reconocer y descartar soluciones que violan restricciones
5. **Verificación**: Comprobar todas las soluciones en la ecuación original
6. **Ecuaciones cuadráticas**: Resolver mediante factorización o fórmula cuadrática
7. **Proceso sistemático**: Seguir los seis pasos del procedimiento general
8. **Aplicaciones**: Plantear y resolver problemas del mundo real usando ecuaciones racionales

**Técnicas algebraicas aplicadas:**
- Factorización de diferencia de cuadrados: \(a^2 - b^2 = (a-b)(a+b)\)
- Factorización de trinomios: \(x^2 + bx + c\)
- Fórmula cuadrática: \(x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}\)
- Simplificación de fracciones algebraicas
- Productos cruzados y multiplicación por el MCD

---

**Fin del Quiz 18**
