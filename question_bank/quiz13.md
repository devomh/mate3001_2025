# Quiz 13: Sistema de Coordenadas Rectangulares
**MATE 3001 - Matemática Elemental**
**Lección 10: Sistema de Coordenadas**

---

## Question 1: Distance Formula - Negative Coordinates
**Topic**: Distance Formula - Basic Calculations

**Problem**: Calcule la distancia entre los puntos \((-5, -2)\) y \((1, 6)\).

**Solution**:
Usamos la fórmula de distancia:
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

Identificamos las coordenadas:
- \((x_1, y_1) = (-5, -2)\)
- \((x_2, y_2) = (1, 6)\)

Sustituimos en la fórmula:
\begin{align*}
d &= \sqrt{(1-(-5))^2 + (6-(-2))^2} \\
  &= \sqrt{(1+5)^2 + (6+2)^2} \\
  &= \sqrt{6^2 + 8^2} \\
  &= \sqrt{36 + 64} \\
  &= \sqrt{100} \\
  &= 10
\end{align*}

**Answer**: La distancia es **10 unidades**.

**Key Concepts**:
- When subtracting negative coordinates, remember that \(a - (-b) = a + b\)
- The distance formula works with any combination of positive and negative coordinates
- \(6^2 + 8^2 = 100\) is a common Pythagorean triple (scaled 3-4-5)

---

## Question 2: Distance Formula - Vertical Line
**Topic**: Distance Formula - Special Cases

**Problem**: Calcule la distancia entre los puntos \((-3, 7)\) y \((-3, -2)\).

**Solution**:
Observamos que ambos puntos tienen la misma coordenada \(x = -3\), por lo tanto están sobre una línea vertical.

Usando la fórmula de distancia:
$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

Sustituimos:
\begin{align*}
d &= \sqrt{(-3-(-3))^2 + (-2-7)^2} \\
  &= \sqrt{0^2 + (-9)^2} \\
  &= \sqrt{0 + 81} \\
  &= \sqrt{81} \\
  &= 9
\end{align*}

**Answer**: La distancia es **9 unidades**.

**Key Concepts**:
- When two points share the same \(x\)-coordinate, they lie on a vertical line
- The distance is simply the absolute value of the difference in \(y\)-coordinates: \(|y_2 - y_1| = |(-2) - 7| = |-9| = 9\)
- The distance formula still works even when one term becomes zero

---

## Question 3: Midpoint Formula - Mixed Coordinates
**Topic**: Midpoint Formula - Basic Calculations

**Problem**: Encuentre las coordenadas del punto medio del segmento con extremos \((-3, 5)\) y \((7, -1)\).

**Solution**:
Usamos la fórmula del punto medio:
$$M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$$

Identificamos las coordenadas:
- \((x_1, y_1) = (-3, 5)\)
- \((x_2, y_2) = (7, -1)\)

Calculamos cada coordenada del punto medio:

**Coordenada \(x\) del punto medio:**
$$\frac{x_1 + x_2}{2} = \frac{-3 + 7}{2} = \frac{4}{2} = 2$$

**Coordenada \(y\) del punto medio:**
$$\frac{y_1 + y_2}{2} = \frac{5 + (-1)}{2} = \frac{4}{2} = 2$$

Por lo tanto:
$$M = (2, 2)$$

**Answer**: El punto medio es **\(M(2, 2)\)**.

**Key Concepts**:
- The midpoint formula finds the average of the \(x\)-coordinates and the average of the \(y\)-coordinates
- The midpoint is equidistant from both endpoints
- When adding positive and negative numbers, subtract the smaller from the larger: \(-3 + 7 = 4\)

---

## Question 4: Midpoint Formula - Negative Coordinates
**Topic**: Midpoint Formula - All Negative Coordinates

**Problem**: Encuentre las coordenadas del punto medio del segmento con extremos \((-5, -3)\) y \((-1, 7)\).

**Solution**:
Usamos la fórmula del punto medio:
$$M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$$

Identificamos las coordenadas:
- \((x_1, y_1) = (-5, -3)\)
- \((x_2, y_2) = (-1, 7)\)

Calculamos cada coordenada del punto medio:

**Coordenada \(x\) del punto medio:**
$$\frac{x_1 + x_2}{2} = \frac{-5 + (-1)}{2} = \frac{-6}{2} = -3$$

**Coordenada \(y\) del punto medio:**
$$\frac{y_1 + y_2}{2} = \frac{-3 + 7}{2} = \frac{4}{2} = 2$$

Por lo tanto:
$$M = (-3, 2)$$

**Answer**: El punto medio es **\(M(-3, 2)\)**.

**Key Concepts**:
- When both \(x\)-coordinates are negative, add them as usual: \(-5 + (-1) = -6\)
- The midpoint can have one positive and one negative coordinate
- The result \((-3, 2)\) is in Quadrant II

---

## Question 5: Triangle - Isosceles Verification
**Topic**: Combined Problems - Triangle Properties

**Problem**: Determine si el triángulo con vértices \(A(0, 0)\), \(B(3, 4)\), y \(C(6, 0)\) es isósceles (dos lados iguales).

**Solution**:
Un triángulo es isósceles si tiene al menos dos lados de igual longitud. Calculamos las tres distancias usando la fórmula de distancia.

**Lado AB:**
\begin{align*}
d_{AB} &= \sqrt{(3-0)^2 + (4-0)^2} \\
       &= \sqrt{3^2 + 4^2} \\
       &= \sqrt{9 + 16} \\
       &= \sqrt{25} \\
       &= 5
\end{align*}

**Lado BC:**
\begin{align*}
d_{BC} &= \sqrt{(6-3)^2 + (0-4)^2} \\
       &= \sqrt{3^2 + (-4)^2} \\
       &= \sqrt{9 + 16} \\
       &= \sqrt{25} \\
       &= 5
\end{align*}

**Lado AC:**
\begin{align*}
d_{AC} &= \sqrt{(6-0)^2 + (0-0)^2} \\
       &= \sqrt{6^2 + 0^2} \\
       &= \sqrt{36} \\
       &= 6
\end{align*}

**Comparación:**
- \(d_{AB} = 5\)
- \(d_{BC} = 5\)
- \(d_{AC} = 6\)

Como \(d_{AB} = d_{BC} = 5\), el triángulo tiene dos lados iguales.

**Answer**: El triángulo **SÍ es isósceles** porque \(AB = BC = 5\) unidades.

**Key Concepts**:
- An isosceles triangle has at least two sides of equal length
- All three side lengths must be calculated to verify the property
- This triangle is a 3-4-5 right triangle (scaled)
- Point \(C\) is on the \(x\)-axis, making \(AC\) horizontal

---

## Question 6: Application - Ship Navigation
**Topic**: Application Problems - Midpoint in Context

**Problem**: Un barco parte del punto \(A(-4, 2)\) y navega hasta el punto \(B(8, 7)\) en línea recta. ¿En qué punto se encuentra el barco cuando ha recorrido exactamente la mitad del camino?

**Solution**:
Cuando el barco ha recorrido exactamente la mitad del camino, se encuentra en el **punto medio** del segmento \(AB\).

Usamos la fórmula del punto medio:
$$M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$$

Identificamos las coordenadas:
- Punto de partida: \(A(-4, 2)\) donde \(x_1 = -4, y_1 = 2\)
- Punto de destino: \(B(8, 7)\) donde \(x_2 = 8, y_2 = 7\)

Calculamos cada coordenada del punto medio:

**Coordenada \(x\) del punto medio:**
$$\frac{x_1 + x_2}{2} = \frac{-4 + 8}{2} = \frac{4}{2} = 2$$

**Coordenada \(y\) del punto medio:**
$$\frac{y_1 + y_2}{2} = \frac{2 + 7}{2} = \frac{9}{2} = 4.5$$

Por lo tanto:
$$M = (2, 4.5)$$

**Answer**: El barco está en el punto **\((2, 4.5)\)** cuando ha recorrido la mitad del camino.

**Key Concepts**:
- The midpoint represents the halfway point of a journey
- Real-world applications often use coordinate systems to model locations
- The midpoint formula is practical for navigation and mapping problems
- Coordinates can be decimal values (4.5)

---

## Question 7: Quadrant Identification
**Topic**: Coordinate System Basics - Quadrant Classification

**Problem**: Determine en qué cuadrante se encuentra el punto \(P(-7, 5)\) y explique su razonamiento.

**Solution**:
Para determinar el cuadrante de un punto, analizamos los signos de sus coordenadas.

El punto \(P(-7, 5)\) tiene:
- Coordenada \(x = -7\) (negativa)
- Coordenada \(y = 5\) (positiva)

**Recordemos los cuadrantes:**
- **Cuadrante I**: \(x > 0, y > 0\) — ambas coordenadas positivas
- **Cuadrante II**: \(x < 0, y > 0\) — \(x\) negativa, \(y\) positiva
- **Cuadrante III**: \(x < 0, y < 0\) — ambas coordenadas negativas
- **Cuadrante IV**: \(x > 0, y < 0\) — \(x\) positiva, \(y\) negativa

Como el punto \(P(-7, 5)\) tiene \(x < 0\) y \(y > 0\), se encuentra en el **Cuadrante II**.

**Razonamiento geométrico:**
- Desde el origen, nos movemos 7 unidades a la **izquierda** (coordenada \(x\) negativa)
- Luego nos movemos 5 unidades **hacia arriba** (coordenada \(y\) positiva)
- Esto nos coloca en el cuadrante superior izquierdo

**Answer**: El punto \(P(-7, 5)\) se encuentra en el **Cuadrante II**.

**Key Concepts**:
- Quadrant II contains all points with negative \(x\) and positive \(y\)
- The sign pattern \((-,+)\) uniquely identifies Quadrant II
- Moving left from the origin means negative \(x\), moving up means positive \(y\)

---

## Question 8: Distance from Origin
**Topic**: Distance Formula - Origin as Reference Point

**Problem**: Calcule la distancia desde el origen \(O(0, 0)\) hasta el punto \(P(6, 8)\).

**Solution**:
La distancia desde el origen a cualquier punto se puede calcular usando la fórmula de distancia.

Identificamos las coordenadas:
- Origen: \((x_1, y_1) = (0, 0)\)
- Punto: \((x_2, y_2) = (6, 8)\)

Usamos la fórmula de distancia:
\begin{align*}
d &= \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \\
  &= \sqrt{(6-0)^2 + (8-0)^2} \\
  &= \sqrt{6^2 + 8^2} \\
  &= \sqrt{36 + 64} \\
  &= \sqrt{100} \\
  &= 10
\end{align*}

**Fórmula simplificada desde el origen:**
Cuando uno de los puntos es el origen \((0,0)\), la fórmula se simplifica a:
$$d = \sqrt{x^2 + y^2}$$

Verificación:
$$d = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10$$

**Answer**: La distancia desde el origen hasta \(P(6, 8)\) es **10 unidades**.

**Key Concepts**:
- Distance from the origin simplifies to \(d = \sqrt{x^2 + y^2}\)
- The triple (6, 8, 10) is a multiple of the 3-4-5 Pythagorean triple
- This represents the length of the position vector from the origin to the point

---

## Question 9: Finding Unknown Endpoint
**Topic**: Midpoint Formula - Reverse Problem

**Problem**: El punto medio de un segmento es \(M(5, 4)\) y uno de sus extremos es \(A(2, 9)\). Encuentre las coordenadas del otro extremo \(B\).

**Solution**:
Este es un problema "inverso" de punto medio. Conocemos el punto medio y un extremo, y buscamos el otro extremo.

Sea \(B(x, y)\) el extremo desconocido.

Recordemos que el punto medio se calcula como:
$$M = \left(\frac{x_1 + x}{2}, \frac{y_1 + y}{2}\right)$$

Donde \(A(x_1, y_1) = A(2, 9)\) y \(M = (5, 4)\).

**Para encontrar la coordenada \(x\) de \(B\):**
$$\frac{2 + x}{2} = 5$$

Multiplicamos ambos lados por 2:
$$2 + x = 10$$

Despejamos \(x\):
$$x = 10 - 2 = 8$$

**Para encontrar la coordenada \(y\) de \(B\):**
$$\frac{9 + y}{2} = 4$$

Multiplicamos ambos lados por 2:
$$9 + y = 8$$

Despejamos \(y\):
$$y = 8 - 9 = -1$$

Por lo tanto, el otro extremo es \(B(8, -1)\).

**Verificación:**
$$M = \left(\frac{2+8}{2}, \frac{9+(-1)}{2}\right) = \left(\frac{10}{2}, \frac{8}{2}\right) = (5, 4)$$ ✓

**Answer**: El otro extremo es **\(B(8, -1)\)**.

**Key Concepts**:
- The midpoint formula can be "reversed" to find an unknown endpoint
- Set up two equations (one for \(x\), one for \(y\)) and solve independently
- Always verify your answer by calculating the midpoint with both endpoints
- This problem demonstrates algebraic manipulation of the midpoint formula

---

## Question 10: Triangle Perimeter
**Topic**: Combined Problems - Multiple Distance Calculations

**Problem**: Los puntos \(A(1, 1)\), \(B(4, 5)\), y \(C(7, 1)\) son los vértices de un triángulo. Calcule el perímetro del triángulo.

**Solution**:
El perímetro de un triángulo es la suma de las longitudes de sus tres lados. Calculamos cada lado usando la fórmula de distancia.

**Lado AB:**
\begin{align*}
d_{AB} &= \sqrt{(4-1)^2 + (5-1)^2} \\
       &= \sqrt{3^2 + 4^2} \\
       &= \sqrt{9 + 16} \\
       &= \sqrt{25} \\
       &= 5
\end{align*}

**Lado BC:**
\begin{align*}
d_{BC} &= \sqrt{(7-4)^2 + (1-5)^2} \\
       &= \sqrt{3^2 + (-4)^2} \\
       &= \sqrt{9 + 16} \\
       &= \sqrt{25} \\
       &= 5
\end{align*}

**Lado AC:**
\begin{align*}
d_{AC} &= \sqrt{(7-1)^2 + (1-1)^2} \\
       &= \sqrt{6^2 + 0^2} \\
       &= \sqrt{36} \\
       &= 6
\end{align*}

**Perímetro:**
$$P = d_{AB} + d_{BC} + d_{AC} = 5 + 5 + 6 = 16$$

**Answer**: El perímetro del triángulo es **16 unidades**.

**Additional Observation**: Este triángulo es isósceles porque \(AB = BC = 5\) unidades. Los puntos \(A\) y \(C\) están sobre la línea horizontal \(y = 1\), por lo que el lado \(AC\) es horizontal.

**Key Concepts**:
- Perimeter requires calculating all three side lengths
- This is an isosceles triangle (two equal sides)
- The base \(AC\) is horizontal since both points have \(y = 1\)
- Each leg is a 3-4-5 right triangle from the base to the apex

---

## Summary of Topics Covered

This quiz comprehensively covers Lesson 10 (Sistema de Coordenadas Rectangulares):

1. **Distance Formula** (Questions 1, 2, 8, 10)
   - Basic calculations with mixed positive/negative coordinates
   - Special case: vertical line (same \(x\)-coordinate)
   - Distance from the origin
   - Multiple distance calculations for perimeter

2. **Midpoint Formula** (Questions 3, 4, 6, 9)
   - Basic midpoint calculations
   - Negative coordinates
   - Real-world application (navigation)
   - Reverse problem (finding unknown endpoint)

3. **Quadrants** (Question 7)
   - Identifying quadrants from coordinate signs
   - Understanding the coordinate plane structure

4. **Triangle Properties** (Questions 5, 10)
   - Isosceles triangle verification
   - Perimeter calculation
   - Combining distance formula for geometric analysis

**Difficulty Distribution:**
- Basic (Questions 1, 2, 3, 4, 7, 8): 60%
- Intermediate (Questions 5, 6, 10): 30%
- Advanced (Question 9): 10%

**Alignment with Exercises:**
- Exercise 3, Problems 4 & 6: Questions 1, 2
- Exercise 4, Problems 3 & 5: Questions 3, 4
- Exercise 5, Problem 3: Question 5
- Exercise 6, Problem 2: Question 6
- Additional concept coverage: Questions 7, 8, 9, 10
