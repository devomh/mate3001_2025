# Funciones — Definición y gráficas de funciones simples

Temario:
- Definición de función
- Notación funcional y evaluación
- Dominio y rango
- Prueba de la recta vertical
- Gráficas de funciones simples (lineal, cuadrática, valor absoluto, raíz cuadrada)

Salvo aviso contrario, trabajamos en números reales. Una función asigna a cada elemento del dominio **exactamente un** elemento del rango.

---

## Definición de función

Objetivos
- Comprender qué es una función como una relación especial.
- Distinguir entre relaciones que son funciones y las que no lo son.
- Identificar dominio y rango de una función.

Definiciones y propiedades
- **Función**: Una relación entre dos conjuntos en la que a cada elemento del primer conjunto (dominio) le corresponde **exactamente un** elemento del segundo conjunto (rango).
- **Dominio**: El conjunto de todos los valores de entrada permitidos (usualmente valores de \(x\)).
- **Rango**: El conjunto de todos los valores de salida posibles (usualmente valores de \(y\) o \(f(x)\)).
- **Notación funcional**: \(f(x)\) se lee "f de x" y representa el valor de la función \(f\) cuando la variable independiente es \(x\).

Ejemplo 1 (relación que es función)
- \(\{(1,2), (2,4), (3,6), (4,8)\}\) **es una función** porque cada valor de entrada (1, 2, 3, 4) tiene exactamente una salida.

Ejemplo 2 (relación que NO es función)
- \(\{(1,2), (1,3), (2,4)\}\) **no es función** porque el valor de entrada 1 tiene dos salidas diferentes (2 y 3).

Ejemplo 3 (función definida por ecuación)
- \(f(x) = 2x + 3\)
- Dominio: todos los números reales \((-\infty, \infty)\).
- Para encontrar \(f(5)\): \(f(5) = 2(5) + 3 = 13\).

Errores comunes
- Confundir función con cualquier relación (una función es un tipo especial de relación).
- Pensar que el dominio y rango son siempre todos los números reales.

---

## Notación funcional y evaluación

Objetivos
- Usar correctamente la notación \(f(x)\).
- Evaluar funciones para valores específicos.
- Simplificar expresiones como \(f(a+h)\).

Procedimiento de evaluación
1. Sustituya el valor dado en lugar de la variable independiente.
2. Simplifique siguiendo el orden de las operaciones.

Ejemplo 1 (del nivel del curso)
- Dada \(f(x) = x^2 - 3x + 1\), evalúe \(f(4)\).

Solución
\[f(4) = (4)^2 - 3(4) + 1 = 16 - 12 + 1 = 5.\]

Ejemplo 2 (sustitución algebraica)
- Dada \(f(x) = 2x - 5\), encuentre \(f(a+1)\).

Solución
\[f(a+1) = 2(a+1) - 5 = 2a + 2 - 5 = 2a - 3.\]

Ejemplo 3 (evaluación con radicales)
- Dada \(g(x) = \sqrt{x+4}\), encuentre \(g(5)\).

Solución
\[g(5) = \sqrt{5+4} = \sqrt{9} = 3.\]

Aplicación rápida
- Si \(h(t) = t^2 - 2t\), entonces \(h(-3) = (-3)^2 - 2(-3) = 9 + 6 = 15\).

Errores comunes
- Olvidar usar paréntesis al sustituir expresiones: \(f(a+1) \ne 2x - 5\).
- Errores aritméticos al simplificar (especialmente con signos negativos).

---

## Dominio y rango

Objetivos
- Determinar el dominio de funciones algebraicas simples.
- Identificar restricciones comunes (división por cero, raíces pares de números negativos).

Restricciones típicas
- **División**: El denominador no puede ser cero.
- **Raíces pares**: El radicando debe ser \(\ge 0\).
- **Funciones lineales**: Dominio siempre \((-\infty, \infty)\).

Ejemplo 1 (función racional)
- Encuentre el dominio de \(f(x) = \dfrac{1}{x-3}\).

Solución
El denominador \(x-3 \ne 0 \Rightarrow x \ne 3\). Dominio: \((-\infty, 3) \cup (3, \infty)\) o "todos los reales excepto 3".

Ejemplo 2 (función con radical)
- Encuentre el dominio de \(g(x) = \sqrt{2x-6}\).

Solución
Necesitamos \(2x - 6 \ge 0 \Rightarrow 2x \ge 6 \Rightarrow x \ge 3\). Dominio: \([3, \infty)\).

Ejemplo 3 (función combinada)
- Encuentre el dominio de \(h(x) = \dfrac{\sqrt{x+1}}{x-2}\).

Solución
Necesitamos \(x + 1 \ge 0\) (para el radical) y \(x - 2 \ne 0\) (para el denominador).
- \(x \ge -1\) y \(x \ne 2\).
- Dominio: \([-1, 2) \cup (2, \infty)\).

Consejos
- Identifique todas las restricciones antes de escribir el dominio.
- Use notación de intervalos correctamente: \([a,b]\) incluye extremos; \((a,b)\) los excluye.

---

## Prueba de la recta vertical

Objetivos
- Aplicar la prueba de la recta vertical para determinar si una gráfica representa una función.

Regla (Prueba de la recta vertical)
- Una gráfica representa una función si y solo si **ninguna recta vertical** interseca la gráfica en más de un punto.
- Si alguna recta vertical toca la gráfica en dos o más puntos, la relación **no es función**.

Ejemplo 1 (es función)
- La gráfica de \(y = x^2\) pasa la prueba: cualquier recta vertical \(x = a\) toca la parábola en exactamente un punto.

Ejemplo 2 (no es función)
- La gráfica de \(x = y^2\) (una parábola horizontal) **no pasa** la prueba: por ejemplo, la recta \(x = 4\) interseca la gráfica en \((4, 2)\) y \((4, -2)\).

Ejemplo 3 (círculo)
- El círculo \(x^2 + y^2 = 9\) **no es función** porque, por ejemplo, \(x = 0\) interseca en \((0, 3)\) y \((0, -3)\).

Aplicación
- Esta prueba es útil para identificar rápidamente funciones al examinar gráficas.

---

## Gráficas de funciones simples

Objetivos
- Reconocer y graficar funciones básicas: lineal, cuadrática, valor absoluto, raíz cuadrada.
- Identificar características clave: interceptos, vértice, pendiente.

Función lineal: \(f(x) = mx + b\)
- Gráfica: línea recta.
- \(m\): pendiente; \(b\): intercepto en \(y\).
- Dominio: \((-\infty, \infty)\); rango: \((-\infty, \infty)\) (si \(m \ne 0\)).

Ejemplo (lineal)
- \(f(x) = 2x - 3\): pendiente \(2\), intercepto \(y = -3\).
- Puntos: \((0, -3)\), \((1, -1)\), \((2, 1)\).

Función cuadrática: \(f(x) = ax^2 + bx + c\)
- Gráfica: parábola que abre hacia arriba (si \(a > 0\)) o hacia abajo (si \(a < 0\)).
- Vértice en \(x = -\dfrac{b}{2a}\).
- Dominio: \((-\infty, \infty)\).

Ejemplo (cuadrática)
- \(f(x) = x^2 - 4\): vértice en \((0, -4)\), abre hacia arriba.
- Interceptos en \(x\): \(x^2 - 4 = 0 \Rightarrow x = \pm 2\).

Función valor absoluto: \(f(x) = |x|\)
- Gráfica: forma de "V".
- Vértice en el origen \((0,0)\).
- Dominio: \((-\infty, \infty)\); rango: \([0, \infty)\).

Ejemplo (valor absoluto)
- \(f(x) = |x - 2| + 1\): vértice en \((2, 1)\), abre hacia arriba.

Función raíz cuadrada: \(f(x) = \sqrt{x}\)
- Gráfica: curva que empieza en \((0,0)\) y crece lentamente.
- Dominio: \([0, \infty)\); rango: \([0, \infty)\).

Ejemplo (raíz cuadrada)
- \(f(x) = \sqrt{x + 3}\): se desplaza 3 unidades a la izquierda.
- Dominio: \(x + 3 \ge 0 \Rightarrow x \ge -3\).

Consejos para graficar
- Identifique puntos clave: interceptos, vértice, puntos de referencia.
- Trace suficientes puntos para ver la forma de la gráfica.
- Use la simetría cuando sea aplicable (parábolas, valor absoluto).

Errores comunes
- Confundir \(f(x) = x^2\) con \(x = y^2\) (la segunda no es función).
- No considerar restricciones de dominio al graficar funciones con radicales.
- Graficar sin escala apropiada en los ejes.

---

## Práctica guiada (opcional)

1) Determine si es función: \(\{(2,5), (3,7), (4,5), (5,9)\}\).
- **Sí**, cada entrada tiene exactamente una salida.

2) Dada \(f(x) = 3x^2 - 2x + 1\), evalúe \(f(-2)\).
- \(f(-2) = 3(-2)^2 - 2(-2) + 1 = 3(4) + 4 + 1 = 12 + 4 + 1 = 17\).

3) Encuentre el dominio de \(g(x) = \dfrac{\sqrt{x-5}}{x-7}\).
- Necesitamos \(x - 5 \ge 0 \Rightarrow x \ge 5\) y \(x \ne 7\).
- Dominio: \([5, 7) \cup (7, \infty)\).

4) ¿La gráfica de \(x^2 + y^2 = 16\) representa una función?
- **No**, falla la prueba de la recta vertical (es un círculo).

5) Grafique \(f(x) = |x + 1|\) e identifique vértice, dominio y rango.
- Vértice: \((-1, 0)\).
- Dominio: \((-\infty, \infty)\).
- Rango: \([0, \infty)\).

---

## Notas didácticas
- Enfatice la diferencia entre relación y función usando ejemplos del mundo real (cada persona tiene un número de seguro social, pero varias personas pueden tener la misma fecha de nacimiento).
- Use gráficas visuales para reforzar la prueba de la recta vertical.
- Conecte el concepto de dominio con restricciones algebraicas vistas en lecciones anteriores (radicales, fracciones).
- Para funciones cuadráticas, mencione que el estudio completo (incluyendo vértice, eje de simetría) se verá en cursos posteriores.
