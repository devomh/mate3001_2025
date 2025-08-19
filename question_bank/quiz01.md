# Quiz 01: Conjuntos y Valor Absoluto
**MATE 3001 - Matemática Elemental**  
**UPR-Humacao**

---

## Instrucciones
Resuelva las siguientes preguntas mostrando todo su trabajo. Cada pregunta vale 10 puntos.

---

## Parte I: Conjuntos y Operaciones con Conjuntos

### Pregunta 1
Escriba en forma descriptiva y en forma de enumeración los siguientes conjuntos:

a) El conjunto de números enteros entre -3 y 5 (inclusive)  
b) El conjunto de las primeras cinco letras del alfabeto español  

**Solución:**

a) **Forma descriptiva:** $A = \{x \mid x \in \mathbb{Z}, -3 \leq x \leq 5\}$  
   **Forma de enumeración:** $A = \{-3, -2, -1, 0, 1, 2, 3, 4, 5\}$

b) **Forma descriptiva:** $B = \{x \mid x \text{ es una de las primeras cinco letras del alfabeto español}\}$  
   **Forma de enumeración:** $B = \{a, b, c, d, e\}$

---

### Pregunta 2
Sean $A = \{1, 3, 5, 7, 9\}$, $B = \{2, 4, 6, 8\}$ y $C = \{3, 6, 9, 12\}$. Encuentre:

a) $A \cup C$  
b) $A \cap C$  
c) $B \cap C$  
d) $(A \cup B) \cap C$  

**Solución:**

a) $A \cup C = \{1, 3, 5, 6, 7, 9, 12\}$  
   (Todos los elementos que están en A o en C, sin repetir)

b) $A \cap C = \{3, 9\}$  
   (Elementos comunes entre A y C)

c) $B \cap C = \{6\}$  
   (Elementos comunes entre B y C)

d) Primero: $A \cup B = \{1, 2, 3, 4, 5, 6, 7, 8, 9\}$  
   Luego: $(A \cup B) \cap C = \{3, 6, 9\}$  
   (Elementos que están tanto en la unión A∪B como en C)

---

### Pregunta 3
Determine si las siguientes afirmaciones son verdaderas (V) o falsas (F). Justifique su respuesta:

a) $\{2, 4\} \subseteq \{1, 2, 3, 4, 5\}$  
b) $\mathbb{N} \subseteq \mathbb{Q}$  
c) $\sqrt{16} \in \mathbb{N}$  
d) $\frac{3}{4} \in \mathbb{Z}$  

**Solución:**

a) **V** - Todos los elementos del primer conjunto (2 y 4) están contenidos en el segundo conjunto.

b) **V** - Todos los números naturales pueden escribirse como fracciones (ej: $3 = \frac{3}{1}$), por lo tanto son racionales.

c) **V** - $\sqrt{16} = 4$, y 4 es un número natural.

d) **F** - $\frac{3}{4} = 0.75$ no es un número entero, es un número racional pero no entero.

---

### Pregunta 4
Clasifique los siguientes números como primos o compuestos. Si son compuestos, proporcione su factorización prima:

a) 19  
b) 21  
c) 23  
d) 35  

**Solución:**

a) **19 es primo** - Sus únicos divisores son 1 y 19.

b) **21 es compuesto** - Factorización prima: $21 = 3 \times 7$

c) **23 es primo** - Sus únicos divisores son 1 y 23.

d) **35 es compuesto** - Factorización prima: $35 = 5 \times 7$

---

### Pregunta 5
En una encuesta a 100 estudiantes sobre sus materias favoritas:
- 45 prefieren matemáticas
- 35 prefieren ciencias  
- 15 prefieren ambas materias
- El resto no prefiere ninguna de las dos

¿Cuántos estudiantes prefieren solo matemáticas? ¿Cuántos prefieren solo ciencias? ¿Cuántos no prefieren ninguna de las dos materias?

**Solución:**

Sea $M$ = conjunto de estudiantes que prefieren matemáticas  
Sea $C$ = conjunto de estudiantes que prefieren ciencias

Datos: $|M| = 45$, $|C| = 35$, $|M \cap C| = 15$, Total = 100

**Solo matemáticas:** $|M| - |M \cap C| = 45 - 15 = 30$ estudiantes

**Solo ciencias:** $|C| - |M \cap C| = 35 - 15 = 30$ estudiantes

**Alguna de las dos materias:** $|M \cup C| = |M| + |C| - |M \cap C| = 45 + 35 - 15 = 65$ estudiantes

**Ninguna de las dos:** $100 - 65 = 35$ estudiantes

---

## Parte II: Valor Absoluto y Leyes de Signos

### Pregunta 6
Evalúe las siguientes expresiones de valor absoluto:

a) $|-15|$  
b) $|8 - 12|$  
c) $|-(-7)|$  
d) $|0|$  

**Solución:**

a) $|-15| = 15$  
   (Por definición: si $a < 0$, entonces $|a| = -a$)

b) $|8 - 12| = |-4| = 4$  
   (Primero resolvemos dentro del valor absoluto, luego aplicamos la definición)

c) $|-(-7)| = |7| = 7$  
   (Primero: $-(-7) = 7$, luego: $|7| = 7$)

d) $|0| = 0$  
   (El valor absoluto de cero es cero)

---

### Pregunta 7
Simplifique las siguientes expresiones usando las propiedades de valor absoluto:

a) $|6| + |-8|$  
b) $|-12| - |5|$  
c) $|4| \cdot |-3|$  
d) $\frac{|-24|}{|6|}$  

**Solución:**

a) $|6| + |-8| = 6 + 8 = 14$

b) $|-12| - |5| = 12 - 5 = 7$

c) $|4| \cdot |-3| = 4 \cdot 3 = 12$

d) $\frac{|-24|}{|6|} = \frac{24}{6} = 4$

---

### Pregunta 8
Aplique las propiedades de signos para simplificar:

a) $(-1) \cdot 25$  
b) $-(-11)$  
c) $(-7) \cdot (-6)$  
d) $-(8 + 3)$  
e) $-(5 - 12)$  

**Solución:**

a) $(-1) \cdot 25 = -25$  
   (Propiedad: $(-1)a = -a$)

b) $-(-11) = 11$  
   (Propiedad: $-(-a) = a$)

c) $(-7) \cdot (-6) = 42$  
   (Propiedad: $(-a)(-b) = ab$)

d) $-(8 + 3) = -8 - 3 = -11$  
   (Propiedad: $-(a + b) = -a - b$)

e) $-(5 - 12) = 12 - 5 = 7$  
   (Propiedad: $-(a - b) = b - a$)

---

### Pregunta 9
Resuelva las siguientes operaciones aplicando las reglas de signos:

a) $(-9) + (-6)$  
b) $(-12) + 8$  
c) $7 - (-4)$  
d) $(-8) \times 5$  
e) $(-36) \div (-9)$  

**Solución:**

a) $(-9) + (-6) = -15$  
   (Mismo signo: suma los valores absolutos y conserva el signo negativo)

b) $(-12) + 8 = -4$  
   (Signos diferentes: resta los valores absolutos y conserva el signo del mayor en valor absoluto)

c) $7 - (-4) = 7 + 4 = 11$  
   (Restar un negativo es lo mismo que sumar su positivo)

d) $(-8) \times 5 = -40$  
   (Negativo por positivo es negativo)

e) $(-36) \div (-9) = 4$  
   (Negativo entre negativo es positivo)

---

### Pregunta 10
Simplifique la siguiente expresión paso a paso:

$$|(-3) \cdot 2| - |5 - 9| + \frac{|-18|}{|-3|}$$

**Solución:**

**Paso 1:** Evaluar cada parte por separado

$|(-3) \cdot 2| = |-6| = 6$

$|5 - 9| = |-4| = 4$

$\frac{|-18|}{|-3|} = \frac{18}{3} = 6$

**Paso 2:** Sustituir y resolver

$6 - 4 + 6 = 8$

**Respuesta final:** $8$

---

## Respuestas Rápidas

**Parte I (Conjuntos):**
1. Ver soluciones detalladas arriba
2. a) $\{1,3,5,6,7,9,12\}$ b) $\{3,9\}$ c) $\{6\}$ d) $\{3,6,9\}$
3. a) V b) V c) V d) F
4. a) Primo b) Compuesto: $3 \times 7$ c) Primo d) Compuesto: $5 \times 7$
5. Solo matemáticas: 30, Solo ciencias: 30, Ninguna: 35

**Parte II (Valor Absoluto):**
6. a) 15 b) 4 c) 7 d) 0
7. a) 14 b) 7 c) 12 d) 4
8. a) -25 b) 11 c) 42 d) -11 e) 7
9. a) -15 b) -4 c) 11 d) -40 e) 4
10. 8