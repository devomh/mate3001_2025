# Factorización y Evaluación de Polinomios

## Introducción a la Factorización

La **factorización** es el proceso inverso de la multiplicación de polinomios. Consiste en expresar un polinomio como el producto de dos o más factores más simples. Esta técnica es fundamental en álgebra y tiene aplicaciones importantes en la resolución de ecuaciones.

---

## Factorización de Polinomios

### Factor Común

Se extrae el mayor factor común de todos los términos del polinomio.

**Procedimiento:**
1. Identificar el máximo común divisor (MCD) de los coeficientes
2. Identificar las variables comunes con el menor exponente
3. Extraer el factor común y escribir el polinomio restante

**Ejemplo:**
$$6x^3 + 9x^2 - 12x = 3x(2x^2 + 3x - 4)$$

**Verificación:** $3x \cdot 2x^2 + 3x \cdot 3x + 3x \cdot (-4) = 6x^3 + 9x^2 - 12x$ ✓

### Agrupación

Se agrupan términos en pares o grupos para factorizar por partes, buscando un factor común binomial.

**Procedimiento:**
1. Agrupar términos que tengan factores comunes
2. Factorizar cada grupo
3. Extraer el factor común binomial resultante

**Ejemplo:**
$$ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y)$$

**Ejemplo más complejo:**
$$3x^3 - 3x^2 - 12x + 12 = 3x^2(x - 1) - 12(x - 1) = (x - 1)(3x^2 - 12) = 3(x - 1)(x^2 - 4)$$

Aplicando diferencia de cuadrados: $3(x - 1)(x + 2)(x - 2)$

### Trinomio Cuadrático

Para factorizar $ax^2 + bx + c$, se buscan dos números que multiplicados den $ac$ y sumados den $b$.

#### Caso 1: $a = 1$ (trinomio mónico)
Para $x^2 + bx + c$, buscar dos números $m$ y $n$ tales que:
- $m \cdot n = c$
- $m + n = b$

**Ejemplo:**
$$x^2 + 5x + 6$$
Necesitamos: $m \cdot n = 6$ y $m + n = 5$
Números: $m = 2$, $n = 3$
$$x^2 + 5x + 6 = (x + 2)(x + 3)$$

#### Caso 2: $a \neq 1$ (método AC)
1. Multiplicar $a \cdot c$
2. Buscar dos números que multipliquen $ac$ y sumen $b$
3. Reescribir el término medio usando estos números
4. Factorizar por agrupación

**Ejemplo:**
$$12x^2 - 7x - 10$$
- $ac = 12 \cdot (-10) = -120$
- Necesitamos: $m \cdot n = -120$ y $m + n = -7$
- Números: $m = 8$, $n = -15$
- Reescribir: $12x^2 + 8x - 15x - 10$
- Agrupar: $4x(3x + 2) - 5(3x + 2) = (3x + 2)(4x - 5)$

### Diferencia de Cuadrados

$$a^2 - b^2 = (a + b)(a - b)$$

**Identificación:** Dos términos donde ambos son cuadrados perfectos unidos por sustracción.

**Ejemplos:**
- $x^2 - 9 = x^2 - 3^2 = (x + 3)(x - 3)$
- $4x^2 - 25y^2 = (2x)^2 - (5y)^2 = (2x + 5y)(2x - 5y)$
- $x^4 - 16 = (x^2)^2 - 4^2 = (x^2 + 4)(x^2 - 4) = (x^2 + 4)(x + 2)(x - 2)$

---

## Algoritmos de Factorización

### Pasos Generales

1. **Factor común:** Extraer el máximo factor común de todos los términos
2. **Clasificar por número de términos:**
   - **2 términos:** Buscar diferencia de cuadrados o suma/diferencia de cubos
   - **3 términos:** Buscar trinomio cuadrático perfecto o factorizable
   - **4+ términos:** Intentar agrupación
3. **Verificar:** Multiplicar los factores para comprobar el resultado
4. **Factorizar completamente:** Continuar hasta que todos los factores sean irreducibles

### Diagrama de Decisión

```
¿Hay factor común? 
    ├─ Sí → Extraer factor común
    └─ No → Continuar

¿Cuántos términos?
    ├─ 2 términos → Diferencia de cuadrados, suma/diferencia de cubos
    ├─ 3 términos → Trinomio cuadrático, trinomio cuadrático perfecto
    └─ 4+ términos → Agrupación
```

### Ejemplo Completo

Factorizar: $2x^3 - 8x$

**Paso 1:** Factor común
$$2x^3 - 8x = 2x(x^2 - 4)$$

**Paso 2:** Factorizar $x^2 - 4$ (diferencia de cuadrados)
$$2x(x^2 - 4) = 2x(x + 2)(x - 2)$$

**Verificación:** 
$$2x(x + 2)(x - 2) = 2x(x^2 - 4) = 2x^3 - 8x$$ ✓

---

## Casos Especiales de Factorización

### Trinomio Cuadrático Perfecto

**Forma positiva:**
$$a^2 + 2ab + b^2 = (a + b)^2$$

**Forma negativa:**
$$a^2 - 2ab + b^2 = (a - b)^2$$

**Identificación:** 
1. El primer y tercer término son cuadrados perfectos
2. El término medio es el doble del producto de las raíces cuadradas
3. El signo del término medio determina el signo en el binomio

**Ejemplos:**
- $9x^2 + 12x + 4 = (3x)^2 + 2(3x)(2) + 2^2 = (3x + 2)^2$
- $16x^2 - 24x + 9 = (4x)^2 - 2(4x)(3) + 3^2 = (4x - 3)^2$
- $x^2 + 10x + 25 = (x + 5)^2$

### Suma y Diferencia de Cubos

**Suma de cubos:**
$$a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$

**Diferencia de cubos:**
$$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$$

**Identificación:** Dos términos donde ambos son cubos perfectos.

**Ejemplos:**

**Suma de cubos:**
- $x^3 + 27 = x^3 + 3^3 = (x + 3)(x^2 - 3x + 9)$
- $8x^3 + 125 = (2x)^3 + 5^3 = (2x + 5)(4x^2 - 10x + 25)$

**Diferencia de cubos:**
- $x^3 - 8 = x^3 - 2^3 = (x - 2)(x^2 + 2x + 4)$
- $8x^3 - 1 = (2x)^3 - 1^3 = (2x - 1)(4x^2 + 2x + 1)$

### Otros Casos Especiales

#### Diferencia de Cuartas Potencias
$$a^4 - b^4 = (a^2)^2 - (b^2)^2 = (a^2 + b^2)(a^2 - b^2) = (a^2 + b^2)(a + b)(a - b)$$

**Ejemplo:**
$$x^4 - 81 = (x^2 + 9)(x^2 - 9) = (x^2 + 9)(x + 3)(x - 3)$$

#### Suma de Cuadrados
**Nota importante:** La suma de cuadrados $a^2 + b^2$ **NO** se puede factorizar sobre los números reales.

**Ejemplos de expresiones no factorizables:**
- $x^2 + 4$ (no factorizable sobre los reales)
- $9x^2 + 16$ (no factorizable sobre los reales)

---

## Aplicaciones de Polinomios

### Evaluación de Polinomios

Para evaluar un polinomio $P(x)$ en $x = a$, se sustituye $x$ por $a$ y se calculan las operaciones.

**Definición:**
Si $P(x) = a_nx^n + a_{n-1}x^{n-1} + \cdots + a_1x + a_0$, entonces:
$$P(a) = a_na^n + a_{n-1}a^{n-1} + \cdots + a_1a + a_0$$

**Ejemplo:**
Si $P(x) = 2x^3 - 3x^2 + x - 5$, evaluar $P(2)$:

$$P(2) = 2(2)^3 - 3(2)^2 + 2 - 5$$
$$= 2(8) - 3(4) + 2 - 5$$
$$= 16 - 12 + 2 - 5 = 1$$

### Teorema del Residuo

**Enunciado:** Si un polinomio $P(x)$ se divide por $(x - a)$, entonces el residuo de la división es $P(a)$.

**Aplicación:** Este teorema permite encontrar el residuo de una división polinomial sin realizar la división larga.

**Ejemplo:**
Encontrar el residuo cuando $P(x) = x^3 + 2x^2 - x + 3$ se divide por $(x - 2)$.

**Solución:** Por el teorema del residuo, el residuo es $P(2)$:
$$P(2) = (2)^3 + 2(2)^2 - 2 + 3 = 8 + 8 - 2 + 3 = 17$$

Por tanto, el residuo es 17.

### Teorema del Factor

**Enunciado:** $(x - a)$ es un factor de un polinomio $P(x)$ si y solo si $P(a) = 0$.

**Aplicaciones:**
1. **Verificar factores:** Si $P(a) = 0$, entonces $(x - a)$ es factor de $P(x)$
2. **Encontrar factores:** Probar valores hasta encontrar uno que haga $P(a) = 0$
3. **Factorización completa:** Usar factores conocidos para simplificar la factorización

**Ejemplo:**
Verificar si $(x - 3)$ es factor de $P(x) = x^3 - 6x^2 + 11x - 6$.

**Solución:** Evaluar $P(3)$:
$$P(3) = 3^3 - 6(3)^2 + 11(3) - 6 = 27 - 54 + 33 - 6 = 0$$

Como $P(3) = 0$, entonces $(x - 3)$ **es** factor de $P(x)$.

**Factorización completa:**
$$P(x) = (x - 3)(x^2 - 3x + 2) = (x - 3)(x - 1)(x - 2)$$

### Aplicación Combinada de los Teoremas

**Ejemplo:** Factorizar completamente $P(x) = x^3 - 7x + 6$.

**Paso 1:** Buscar raíces racionales posibles (divisores del término independiente)
Posibles raíces: $\pm 1, \pm 2, \pm 3, \pm 6$

**Paso 2:** Probar valores:
- $P(1) = 1 - 7 + 6 = 0$ ✓ → $(x - 1)$ es factor
- $P(2) = 8 - 14 + 6 = 0$ ✓ → $(x - 2)$ es factor  
- $P(-3) = -27 + 21 + 6 = 0$ ✓ → $(x + 3)$ es factor

**Paso 3:** Como es un polinomio cúbico con coeficiente principal 1:
$$P(x) = (x - 1)(x - 2)(x + 3)$$

**Verificación:** Expandir para comprobar.

---

## Ejercicios Resueltos

### Ejercicio 1: Factor Común

**Problema:** Factorizar $12x^4y^2 - 8x^3y + 16x^2y^3$

**Solución:**
1. MCD de coeficientes: $\gcd(12, 8, 16) = 4$
2. Variables comunes: $x^{\min(4,3,2)} = x^2$, $y^{\min(2,1,3)} = y$
3. Factor común: $4x^2y$

$$12x^4y^2 - 8x^3y + 16x^2y^3 = 4x^2y(3x^2y - 2x + 4y)$$

### Ejercicio 2: Agrupación

**Problema:** Factorizar $6x^3 + 9x^2 - 4x - 6$

**Solución:**
$$6x^3 + 9x^2 - 4x - 6 = 3x^2(2x + 3) - 2(2x + 3) = (2x + 3)(3x^2 - 2)$$

### Ejercicio 3: Trinomio Cuadrático

**Problema:** Factorizar $6x^2 + 7x - 5$

**Solución (método AC):**
1. $ac = 6 \cdot (-5) = -30$
2. Buscar dos números que multipliquen $-30$ y sumen $7$: $10$ y $-3$
3. $6x^2 + 10x - 3x - 5 = 2x(3x + 5) - 1(3x + 5) = (3x + 5)(2x - 1)$

### Ejercicio 4: Factorización Completa

**Problema:** Factorizar $x^4 - 16$

**Solución:**
$$x^4 - 16 = (x^2)^2 - 4^2 = (x^2 + 4)(x^2 - 4) = (x^2 + 4)(x + 2)(x - 2)$$

**Nota:** $x^2 + 4$ no se puede factorizar más sobre los números reales.

### Ejercicio 5: Aplicación de Teoremas

**Problema:** Si $P(x) = 2x^3 - 3x^2 - 8x + 12$, verificar si $(x - 2)$ es factor y factorizar completamente.

**Solución:**
1. **Verificar factor:** $P(2) = 2(8) - 3(4) - 8(2) + 12 = 16 - 12 - 16 + 12 = 0$
   
   Como $P(2) = 0$, entonces $(x - 2)$ es factor.

2. **División:** $P(x) = (x - 2)(2x^2 + x - 6)$

3. **Factorizar el trinomio:** $2x^2 + x - 6$
   - $ac = 2 \cdot (-6) = -12$
   - Números que multiplican $-12$ y suman $1$: $4$ y $-3$
   - $2x^2 + 4x - 3x - 6 = 2x(x + 2) - 3(x + 2) = (x + 2)(2x - 3)$

4. **Factorización completa:**
   $$P(x) = (x - 2)(x + 2)(2x - 3)$$

---

## Estrategias de Factorización

### Algoritmo General

1. **Siempre comenzar con factor común**
2. **Identificar el patrón según número de términos:**
   - 2 términos → diferencia de cuadrados, suma/diferencia de cubos
   - 3 términos → trinomio cuadrático perfecto o factorizable
   - 4+ términos → agrupación
3. **Verificar si hay factorización adicional posible**
4. **Comprobar el resultado multiplicando**

### Casos que NO se pueden factorizar (sobre los reales)

- Suma de cuadrados: $a^2 + b^2$
- Suma de potencias pares: $a^{2n} + b^{2n}$
- Trinomios con discriminante negativo

### Herramientas de Verificación

1. **Multiplicación directa:** Expandir los factores obtenidos
2. **Sustitución numérica:** Evaluar la expresión original y factorizada en varios puntos
3. **Teoremas del residuo y del factor:** Para factorizaciones con factores lineales

---

## Resumen de Conceptos Clave

### Técnicas Fundamentales
1. **Factor Común:** Siempre el primer paso en cualquier factorización
2. **Agrupación:** Útil para polinomios de 4 o más términos
3. **Trinomio Cuadrático:** Método AC para casos generales
4. **Patrones Especiales:** Diferencia de cuadrados, trinomio cuadrático perfecto, suma/diferencia de cubos

### Herramientas Teóricas
1. **Teorema del Residuo:** Relaciona división polinomial con evaluación
2. **Teorema del Factor:** Conecta factores lineales con raíces del polinomio
3. **Evaluación de Polinomios:** Técnica fundamental para aplicar los teoremas

### Estrategias de Resolución
1. **Enfoque sistemático:** Seguir el algoritmo general paso a paso
2. **Verificación constante:** Comprobar cada resultado obtenido
3. **Factorización completa:** No detenerse hasta que todos los factores sean irreducibles
4. **Reconocimiento de patrones:** Identificar rápidamente casos especiales

La factorización es una herramienta fundamental que conecta la manipulación algebraica con la resolución de ecuaciones, el análisis de funciones y muchas otras áreas de las matemáticas. Su dominio es esencial para el progreso en álgebra avanzada y cálculo.