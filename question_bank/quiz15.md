# Quiz 15: Sistema de Dos Ecuaciones Lineales
**MATE 3001 - Matemática Elemental**
**UPR-Humacao**

---

## Pregunta 1: Sistema con Infinitas Soluciones

**Determine si el siguiente sistema tiene una solución, ninguna solución o infinitas soluciones. Explique su razonamiento y, si es posible, resuelva el sistema.**

$$\begin{cases}
2x + 3y = 6 \\
4x + 6y = 12
\end{cases}$$

### Solución:

**Paso 1: Analizar la relación entre las ecuaciones**

Observamos la segunda ecuación y la comparamos con la primera:
$$4x + 6y = 12$$

Si dividimos toda la segunda ecuación entre 2:
$$\frac{4x + 6y}{2} = \frac{12}{2}$$
$$2x + 3y = 6$$

Esto es exactamente igual a la primera ecuación.

**Paso 2: Interpretación geométrica**

Como la segunda ecuación es un múltiplo de la primera (multiplicada por 2), ambas ecuaciones representan la misma recta en el plano cartesiano.

Cuando dos rectas **coinciden**, todos los puntos de una recta son también puntos de la otra.

**Paso 3: Conclusión**

El sistema tiene **infinitas soluciones**.

Cualquier par ordenado $(x, y)$ que satisfaga la ecuación $2x + 3y = 6$ es una solución del sistema.

**Ejemplos de soluciones:**
- Si $x = 0$: $3y = 6 \implies y = 2$. Solución: $(0, 2)$
- Si $x = 3$: $6 + 3y = 6 \implies y = 0$. Solución: $(3, 0)$
- Si $x = -3$: $-6 + 3y = 6 \implies y = 4$. Solución: $(-3, 4)$

**Respuesta:** El sistema tiene infinitas soluciones porque ambas ecuaciones representan la misma recta.

---

## Pregunta 2: Sistema sin Solución

**Determine si el siguiente sistema tiene una solución, ninguna solución o infinitas soluciones. Explique su razonamiento.**

$$\begin{cases}
y = 2x + 1 \\
y = 2x - 3
\end{cases}$$

### Solución:

**Paso 1: Analizar la forma de las ecuaciones**

Ambas ecuaciones están en la forma pendiente-intersección: $y = mx + b$

- Primera ecuación: $y = 2x + 1$
  - Pendiente: $m_1 = 2$
  - Intersección con el eje $y$: $b_1 = 1$

- Segunda ecuación: $y = 2x - 3$
  - Pendiente: $m_2 = 2$
  - Intersección con el eje $y$: $b_2 = -3$

**Paso 2: Comparar las pendientes**

Las dos rectas tienen la **misma pendiente** ($m_1 = m_2 = 2$) pero **diferentes intersecciones** con el eje $y$ ($b_1 = 1 \neq -3 = b_2$).

**Paso 3: Interpretación geométrica**

Cuando dos rectas tienen la misma pendiente pero diferentes intersecciones con el eje $y$, las rectas son **paralelas**.

Las rectas paralelas nunca se intersectan.

**Paso 4: Verificación algebraica**

Si intentamos igualar las ecuaciones:
$$2x + 1 = 2x - 3$$
$$1 = -3$$

Esto es una **contradicción**, lo que confirma que no existe ningún valor de $x$ que satisfaga ambas ecuaciones simultáneamente.

**Respuesta:** El sistema no tiene solución porque las rectas son paralelas y nunca se intersectan.

---

## Pregunta 3: Resolver Sistema con Una Solución

**Resuelva el siguiente sistema de ecuaciones usando el método de eliminación:**

$$\begin{cases}
5x - 2y = 10 \\
x + 3y = 6
\end{cases}$$

### Solución:

**Paso 1: Ajustar los coeficientes**

Decidimos eliminar la variable $x$. Para ello, multiplicamos la segunda ecuación por $-5$:

Segunda ecuación $\times (-5)$:
$$-5(x + 3y) = -5(6)$$
$$-5x - 15y = -30$$

Ahora nuestro sistema equivalente es:
$$\begin{cases}
5x - 2y = 10 \\
-5x - 15y = -30
\end{cases}$$

**Paso 2: Sumar las ecuaciones**

Sumamos ambas ecuaciones para eliminar $x$:
$$(5x - 2y) + (-5x - 15y) = 10 + (-30)$$
$$5x - 2y - 5x - 15y = -20$$
$$-17y = -20$$
$$y = \frac{-20}{-17} = \frac{20}{17}$$

**Paso 3: Sustituir para hallar la otra variable**

Sustituimos $y = \frac{20}{17}$ en la segunda ecuación original:
$$x + 3\left(\frac{20}{17}\right) = 6$$
$$x + \frac{60}{17} = 6$$
$$x = 6 - \frac{60}{17}$$
$$x = \frac{102 - 60}{17}$$
$$x = \frac{42}{17}$$

**Paso 4: Verificación**

Verificamos en la primera ecuación:
$$5\left(\frac{42}{17}\right) - 2\left(\frac{20}{17}\right) = \frac{210}{17} - \frac{40}{17} = \frac{170}{17} = 10 \quad \checkmark$$

Verificamos en la segunda ecuación:
$$\frac{42}{17} + 3\left(\frac{20}{17}\right) = \frac{42}{17} + \frac{60}{17} = \frac{102}{17} = 6 \quad \checkmark$$

**Respuesta:** La solución del sistema es $(x, y) = \left(\dfrac{42}{17}, \dfrac{20}{17}\right)$.

---

## Pregunta 4: Problema de Ventas en una Tienda

**Una tienda vende camisetas a \$15 cada una y pantalones a \$25 cada uno. Si en un día se vendieron 45 artículos por un total de \$825, ¿cuántas camisetas y cuántos pantalones se vendieron?**

### Solución:

**Paso 1: Identificar las variables**

Sea:
- $x$ = número de camisetas vendidas
- $y$ = número de pantalones vendidos

**Paso 2: Expresar las cantidades en términos de las variables**

Información del problema:
- Total de artículos vendidos: 45
  $$x + y = 45$$

- Valor total de las ventas: \$825
  - Cada camiseta cuesta \$15, entonces $x$ camisetas cuestan $15x$ dólares
  - Cada pantalón cuesta \$25, entonces $y$ pantalones cuestan $25y$ dólares
  $$15x + 25y = 825$$

**Paso 3: Establecer el sistema de ecuaciones**

$$\begin{cases}
x + y = 45 \\
15x + 25y = 825
\end{cases}$$

**Paso 4: Resolver el sistema**

De la primera ecuación, despejamos $x$:
$$x = 45 - y$$

Sustituimos en la segunda ecuación:
$$15(45 - y) + 25y = 825$$
$$675 - 15y + 25y = 825$$
$$675 + 10y = 825$$
$$10y = 150$$
$$y = 15$$

Sustituimos en el despeje de $x$:
$$x = 45 - 15 = 30$$

**Paso 5: Verificación**

- Total de artículos: $30 + 15 = 45$ ✓
- Valor total: $15(30) + 25(15) = 450 + 375 = 825$ dólares ✓

**Respuesta:** Se vendieron 30 camisetas y 15 pantalones.

---

## Pregunta 5: Problema de Relación entre Números

**La suma de dos números es 50. Tres veces el primer número menos el segundo número es igual a 10. Encuentre los dos números.**

### Solución:

**Paso 1: Identificar las variables**

Sea:
- $x$ = el primer número
- $y$ = el segundo número

**Paso 2: Expresar las cantidades en términos de las variables**

Información del problema:
- La suma de los dos números es 50:
  $$x + y = 50$$

- Tres veces el primer número menos el segundo número es 10:
  $$3x - y = 10$$

**Paso 3: Establecer el sistema de ecuaciones**

$$\begin{cases}
x + y = 50 \\
3x - y = 10
\end{cases}$$

**Paso 4: Resolver el sistema**

Observamos que los coeficientes de $y$ son opuestos ($+1$ y $-1$), por lo que podemos usar el método de eliminación directamente.

Sumamos ambas ecuaciones:
$$(x + y) + (3x - y) = 50 + 10$$
$$x + y + 3x - y = 60$$
$$4x = 60$$
$$x = 15$$

Sustituimos $x = 15$ en la primera ecuación:
$$15 + y = 50$$
$$y = 35$$

**Paso 5: Verificación**

- Suma: $15 + 35 = 50$ ✓
- Relación: $3(15) - 35 = 45 - 35 = 10$ ✓

**Respuesta:** Los dos números son 15 y 35.

---

## Pregunta 6: Problema de Geometría - Perímetro de un Rectángulo

**Un rectángulo tiene un perímetro de 60 metros. El largo es 6 metros más que el ancho. Encuentre las dimensiones del rectángulo.**

### Solución:

**Paso 1: Identificar las variables**

Sea:
- $l$ = largo del rectángulo (en metros)
- $a$ = ancho del rectángulo (en metros)

**Paso 2: Expresar las cantidades en términos de las variables**

Información del problema:
- El perímetro de un rectángulo es: $P = 2l + 2a$
  $$2l + 2a = 60$$

- El largo es 6 metros más que el ancho:
  $$l = a + 6$$

**Paso 3: Establecer el sistema de ecuaciones**

$$\begin{cases}
2l + 2a = 60 \\
l = a + 6
\end{cases}$$

**Paso 4: Resolver el sistema**

Usando el método de sustitución, sustituimos la segunda ecuación en la primera:
$$2(a + 6) + 2a = 60$$
$$2a + 12 + 2a = 60$$
$$4a + 12 = 60$$
$$4a = 48$$
$$a = 12$$

Sustituimos en la segunda ecuación:
$$l = 12 + 6 = 18$$

**Paso 5: Verificación**

- Perímetro: $2(18) + 2(12) = 36 + 24 = 60$ metros ✓
- Relación: $18 = 12 + 6$ ✓

**Interpretación:** Las dimensiones tienen sentido porque el largo (18 m) es mayor que el ancho (12 m), como debe ser en un rectángulo.

**Respuesta:** El rectángulo tiene 18 metros de largo y 12 metros de ancho.

---

## Resumen de Conceptos

Este quiz cubre los siguientes conceptos clave sobre sistemas de ecuaciones lineales:

1. **Identificación del número de soluciones** (infinitas, ninguna, una)
2. **Interpretación geométrica** (rectas coincidentes, paralelas, que se intersectan)
3. **Método de eliminación** para resolver sistemas
4. **Método de sustitución** para resolver sistemas
5. **Modelado de problemas del mundo real** usando sistemas de ecuaciones
6. **Verificación de soluciones** en el contexto del problema

---

*Quiz preparado según BANK_SPEC.md - Fase 1: Creación de Quiz Inicial*
