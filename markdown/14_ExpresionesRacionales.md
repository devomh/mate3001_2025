# Expresiones Racionales

## Definiciones

**Expresión Fraccionaria**: Es el cociente de dos expresiones algebraicas cualesquiera.

**Expresión racional**: Es una expresión fraccionaria donde el numerador y el denominador son polinomios.

Por ejemplo:

$$\frac{2x}{x-1} \qquad \frac{x}{x^2+1} \qquad \frac{x^3-x}{x^2-5x+6}$$

---

## Dominio de una expresión algebraica

Es el conjunto de números reales que se permite tenga la variable.

Antes de trabajar con expresiones racionales, es fundamental identificar los valores que hacen que la expresión esté definida. Esto nos ayudará a evitar errores al simplificar y operar con estas expresiones.

### Ejemplo 1

Encuentre los dominios de las siguientes expresiones.

1. $2x^2 + 3x - 1$
2. $\frac{x}{x^2-5x+6}$
3. $\frac{\sqrt{x}}{x-5}$

### Solución

1. El polinomio está definido para toda $x$. Entonces, el dominio es el conjunto números reales $\mathbb{R}$.

2. La expresión no puede tomar aquellos valores que hagan 0 el denominador. Por lo tanto se factoriza el denominador para ver claramente esos valores que no puede tomar.

$$\frac{x}{x^2-5x+6} = \frac{x}{(x-2)(x-3)}$$

Los valores $x = 2$ o $x = 3$ serían los valores para los cuales la expresión no está definida. Por lo tanto, el dominio es $\{x|x \neq 2 \text{ y } x \neq 3\}$

3. El numerador solo está definido para valores $x \geq 0$. Mientras que el denominador para valores $x \neq 5$. Por lo tanto, el dominio es $\{x|x \geq 0 \text{ y } x \neq 5\}$

### Ejemplo 2

Encuentre el dominio de $\frac{x+1}{x^2+x-12}$

### Solución

Factorizamos el denominador:

$$x^2+x-12 = (x+4)(x-3)$$

Por lo tanto:

$$\frac{x+1}{x^2+x-12} = \frac{x+1}{(x+4)(x-3)}$$

El dominio es $\{x|x \neq -4 \text{ y } x \neq 3\}$

### ¡Cuidado! - Errores Comunes

❌ **Error**: Olvidar factorizar el denominador completamente y perderse algunos valores excluidos.

❌ **Error**: Confundir el numerador con el denominador al determinar restricciones. Solo el denominador no puede ser cero.

✓ **Correcto**: Siempre factorizar completamente el denominador e identificar todos los valores que lo hacen cero.

### Ejercicios Propuestos: Dominio

1. Encuentre el dominio de $\frac{3x+1}{x^2-9}$

2. Encuentre el dominio de $\frac{\sqrt{x-3}}{x^2-4x+3}$

3. Encuentre el dominio de $\frac{x^2+1}{x^3-8}$

4. Encuentre el dominio de $\frac{\sqrt{2x+5}}{x^2-7x+10}$

5. Encuentre el dominio de $\frac{x-1}{x^3+x^2-6x}$

---

## Simplificación de expresiones racionales

Una vez determinado el dominio, podemos simplificar expresiones racionales. La clave está en factorizar completamente antes de cancelar.

Factorizar el numerador y el denominador y cancele los factores comunes al numerador y denominador, usando la propiedad:

$$\frac{AC}{BC} = \frac{A}{B}$$

### Ejemplo 1

Simplifique $\frac{x^2-1}{x^2-2x-3}$

### Solución

$$\frac{x^2-1}{x^2-2x-3} = \frac{(x+1)(x-1)}{(x+1)(x-3)} = \frac{(x-1)}{(x-3)}$$

### Ejemplo 2

Simplifique $\frac{x^2-4x-12}{x^2-36}$

### Solución

Factorizamos numerador y denominador:

$$\frac{x^2-4x-12}{x^2-36} = \frac{(x-6)(x+2)}{(x-6)(x+6)}$$

Cancelamos el factor común $(x-6)$:

$$= \frac{x+2}{x+6}$$

**Nota**: El dominio original excluye $x = 6$ y $x = -6$, aunque la forma simplificada solo muestra $x \neq -6$.

### ¡Cuidado! - Errores Comunes

❌ **Error**: Cancelar términos en lugar de factores. Por ejemplo: $\frac{x+3}{x+5} \neq \frac{3}{5}$

❌ **Error**: No factorizar completamente antes de cancelar.

❌ **Error**: Olvidar que el dominio original se mantiene después de simplificar.

✓ **Correcto**: Solo se pueden cancelar factores comunes, no términos individuales.

### Ejercicios Propuestos: Simplificación

1. Simplifique $\frac{x^2-4}{x^2+5x+6}$

2. Simplifique $\frac{2x^2-8x}{x^2-16}$

3. Simplifique $\frac{x^3-27}{x^2-9}$

4. Simplifique $\frac{x^2+6x+9}{x^2-9}$

5. Simplifique $\frac{3x^2-12}{x^2-4x+4}$

---

## Multiplicación de expresiones racionales

Ahora que podemos simplificar expresiones individuales, extendemos estas técnicas a productos de expresiones racionales.

Para multiplicar dos fracciones se multiplica sus numeradores y sus denominadores respectivamente, usando la propiedad:

$$\frac{A}{B} \cdot \frac{C}{D} = \frac{AC}{BD}$$

**Estrategia**: Es más eficiente factorizar primero y cancelar factores comunes antes de multiplicar.

### Ejemplo 1

Multiplique $\frac{x^2+2x-3}{x^2+8x+16} \cdot \frac{3x+12}{x-1}$

### Solución

$$\frac{x^2+2x-3}{x^2+8x+16} \cdot \frac{3x+12}{x-1} = \frac{(x-1)(x+3)}{(x+4)^2} \cdot \frac{3(x+4)}{x-1}$$

$$= \frac{3(x-1)(x+3)(x+4)}{(x-1)(x+4)^2}$$

$$= \frac{3(x+3)}{(x+4)}$$

### Ejemplo 2

Multiplique $\frac{x^2-9}{x^2+x-2} \cdot \frac{x+2}{x+3}$

### Solución

Factorizamos:

$$\frac{(x-3)(x+3)}{(x+2)(x-1)} \cdot \frac{x+2}{x+3}$$

Cancelamos factores comunes:

$$= \frac{(x-3)\cancel{(x+3)}}{\cancel{(x+2)}(x-1)} \cdot \frac{\cancel{x+2}}{\cancel{x+3}}$$

$$= \frac{x-3}{x-1}$$

### ¡Cuidado! - Errores Comunes

❌ **Error**: Multiplicar antes de factorizar y simplificar, lo que hace el trabajo más complicado.

❌ **Error**: Cancelar incorrectamente a través de signos de suma o resta.

✓ **Correcto**: Factorizar todo primero, luego cancelar, y finalmente multiplicar si es necesario.

### Ejercicios Propuestos: Multiplicación

1. Multiplique $\frac{x^2-1}{x^2+3x+2} \cdot \frac{x+2}{x-1}$

2. Multiplique $\frac{2x^2-2x-12}{x^2-9} \cdot \frac{x+3}{4x-12}$

3. Multiplique $\frac{x^2-4}{x+3} \cdot \frac{x^2+6x+9}{x^2-4x+4}$

4. Multiplique $\frac{x^2+x-6}{x^2-1} \cdot \frac{x^2-2x+1}{x^2-9}$

5. Multiplique $\frac{2x^2-8}{x^2+5x} \cdot \frac{x^2+4x-5}{x-2}$

---

## División de expresiones racionales

La división se convierte fácilmente en multiplicación, lo que nos permite usar las mismas técnicas de factorización y simplificación.

Para dividir expresiones racionales, transformar la división en una multiplicación, usando la propiedad:

$$\frac{A}{B} \div \frac{C}{D} = \frac{A}{B} \cdot \frac{D}{C}$$

**Regla clave**: "Multiplicar por el recíproco del divisor"

### Ejemplo 1

Divida $\frac{x^2-4}{x+1} \div \frac{x+2}{x^2-1}$

### Solución

Convertimos a multiplicación:

$$\frac{x^2-4}{x+1} \cdot \frac{x^2-1}{x+2}$$

Factorizamos:

$$= \frac{(x-2)(x+2)}{x+1} \cdot \frac{(x-1)(x+1)}{x+2}$$

Cancelamos:

$$= \frac{(x-2)\cancel{(x+2)}}{\cancel{x+1}} \cdot \frac{(x-1)\cancel{(x+1)}}{\cancel{x+2}}$$

$$= (x-2)(x-1) = x^2-3x+2$$

### Ejemplo 2

Divida $\frac{x^2+5x+6}{x^2-4} \div \frac{x+3}{x-2}$

### Solución

$$\frac{x^2+5x+6}{x^2-4} \cdot \frac{x-2}{x+3}$$

$$= \frac{(x+2)(x+3)}{(x-2)(x+2)} \cdot \frac{x-2}{x+3}$$

$$= \frac{\cancel{(x+2)}\cancel{(x+3)}}{\cancel{(x-2)}\cancel{(x+2)}} \cdot \frac{\cancel{x-2}}{\cancel{x+3}} = 1$$

### ¡Cuidado! - Errores Comunes

❌ **Error**: Invertir la fracción incorrecta. Debe invertirse la segunda fracción (el divisor).

❌ **Error**: Intentar "cancelar" antes de convertir la división en multiplicación.

✓ **Correcto**: Primero convertir a multiplicación, luego factorizar y simplificar.

### Ejercicios Propuestos: División

1. Divida $\frac{x^2-9}{x^2+4x+4} \div \frac{x+3}{x+2}$

2. Divida $\frac{x^2+5x+6}{x^2-4} \div \frac{x^2+4x+3}{x^2-3x+2}$

3. Divida $\frac{x^2-1}{x+3} \div \frac{x-1}{x^2+6x+9}$

4. Divida $\frac{2x^2-8}{x^2+x-6} \div \frac{x-2}{x+3}$

5. Simplifique $\frac{x^2-16}{2x+6} \cdot \frac{x^2+3x}{x^2-4x} \div \frac{x+4}{2x}$

---

## Suma y resta de expresiones racionales

Para combinar expresiones racionales mediante suma o resta, necesitamos un denominador común, similar al proceso con fracciones numéricas.

Si las fracciones tienen el mismo denominador, entonces se puede usar la propiedad:

$$\frac{A}{C} + \frac{B}{C} = \frac{A+B}{C}$$

Si las fracciones no tienen el mismo denominador, entonces obtener el mínimo común denominador (MCD) como sigue:

- Factorizar cada denominador.
- Tomar el producto de los factores distintos. Usar la potencia mayor de cada factor correspondiente.

### Ejemplo 1: Mismo denominador

Efectúe $\frac{3x+2}{x-5} + \frac{x-7}{x-5}$

### Solución

Como tienen el mismo denominador, sumamos los numeradores:

$$\frac{3x+2}{x-5} + \frac{x-7}{x-5} = \frac{(3x+2)+(x-7)}{x-5}$$

$$= \frac{3x+2+x-7}{x-5} = \frac{4x-5}{x-5}$$

### Ejemplo 2: Diferente denominador

Efectúe $\frac{5}{x+1} + \frac{2x}{x-2}$

### Solución

$MCD = (x+1)(x-2)$

$$\frac{5}{x+1} + \frac{2x}{x-2} = \frac{5(x-2)}{(x+1)(x-2)} + \frac{2x(x+1)}{(x+1)(x-2)}$$

$$= \frac{5(x-2) + 2x(x+1)}{(x+1)(x-2)}$$

$$= \frac{5x-10+2x^2+2x}{(x+1)(x-2)}$$

$$= \frac{2x^2+7x-10}{(x+1)(x-2)}$$

### Ejemplo 3: Con potencias

Efectúe $\frac{2}{x^2-1} - \frac{3}{(x+1)^2}$

### Solución

Factorizamos: $x^2-1 = (x-1)(x+1)$

$MCD = (x+1)^2(x-1)$

$$\frac{2}{(x-1)(x+1)} - \frac{3}{(x+1)^2} = \frac{2(x+1)}{(x+1)^2(x-1)} - \frac{3(x-1)}{(x+1)^2(x-1)}$$

$$= \frac{2(x+1) - 3(x-1)}{(x+1)^2(x-1)}$$

$$= \frac{2x+2-3x+3}{(x+1)^2(x-1)}$$

$$= \frac{-x+5}{(x+1)^2(x-1)} = \frac{5-x}{(x+1)^2(x-1)}$$

### ¡Cuidado! - Errores Comunes

❌ **Error**: Olvidar usar paréntesis al restar. $\frac{A}{C} - \frac{B}{C} = \frac{A-B}{C}$, no $\frac{A-B}{C}$ sin paréntesis en $B$.

❌ **Error**: No encontrar correctamente el MCD, especialmente cuando hay potencias de factores.

❌ **Error**: Errores de signo al distribuir términos negativos.

✓ **Correcto**: Usar paréntesis, encontrar el MCD correcto, y distribuir cuidadosamente.

### Ejercicios Propuestos: Suma y Resta

1. Efectúe $\frac{3}{x-2} + \frac{4}{x+3}$

2. Efectúe $\frac{x}{x^2-4} - \frac{2}{x+2}$

3. Efectúe $\frac{1}{x} + \frac{2}{x^2} - \frac{3}{x^3}$

4. Efectúe $\frac{2x}{x^2-1} + \frac{3}{x-1} - \frac{1}{x+1}$

5. Efectúe $\frac{x+1}{x^2+5x+6} - \frac{x-1}{x^2+4x+3}$

---

## Fracciones compuestas

Las fracciones compuestas aparecen frecuentemente en cálculo y otras áreas avanzadas. Simplificarlas requiere combinar todas las técnicas anteriores.

Aquellas cuyo numerador, denominador, o ambos, son expresiones fraccionarias. Se operan como sigue:

- Se convierte el numerador a una sola fracción, si fuese necesario también el denominador.
- El resultado anterior se reescribe como un producto de fracciones y se efectúa, usando la siguiente propiedad:

$$\frac{\frac{A}{B}}{\frac{C}{D}} = \frac{A}{B} \div \frac{C}{D} = \frac{A}{B} \cdot \frac{D}{C} = \frac{AD}{BC}$$

### Ejemplo 1

Simplifique $\frac{\frac{x}{y}-1}{1+\frac{y}{x}}$

### Solución

$$\frac{\frac{x}{y}-1}{1+\frac{y}{x}} = \frac{\frac{x}{y}-\frac{y}{y}}{\frac{x}{x}+\frac{y}{x}}$$

$$= \frac{\frac{x-y}{y}}{\frac{x+y}{x}}$$

$$= \frac{x-y}{y} \div \frac{x+y}{x}$$

$$= \frac{x-y}{y} \cdot \frac{x}{x+y}$$

$$= \frac{x(x-y)}{y(x+y)}$$

### Ejemplo 2

Simplifique $\frac{1-\frac{1}{x^2}}{\frac{1}{x}-\frac{1}{x^2}}$

### Solución

Convertimos el numerador y denominador a fracciones únicas:

$$\frac{\frac{x^2-1}{x^2}}{\frac{x-1}{x^2}}$$

Dividimos:

$$= \frac{x^2-1}{x^2} \cdot \frac{x^2}{x-1}$$

$$= \frac{x^2-1}{x-1}$$

Factorizamos:

$$= \frac{(x-1)(x+1)}{x-1} = x+1$$

### ¡Cuidado! - Errores Comunes

❌ **Error**: Intentar simplificar sin convertir primero el numerador y denominador a fracciones únicas.

❌ **Error**: Confundir qué fracción se invierte en la división.

✓ **Correcto**: Simplificar el numerador y denominador por separado primero, luego dividir.

### Ejercicios Propuestos: Fracciones Compuestas

1. Simplifique $\frac{1+\frac{1}{x}}{1-\frac{1}{x^2}}$

2. Simplifique $\frac{\frac{a}{b}+\frac{b}{a}}{\frac{1}{a}+\frac{1}{b}}$

3. Simplifique $\frac{\frac{x+1}{x-1}}{\frac{x^2-1}{x+2}}$

4. Simplifique $\frac{1-\frac{2}{x}+\frac{1}{x^2}}{1-\frac{1}{x^2}}$

5. Simplifique $\frac{\frac{1}{x+1}-\frac{1}{x-1}}{\frac{2}{x^2-1}}$

---

## Ejercicios Adicionales de Repaso

1. Simplifique completamente: $\frac{x^3-8}{x^2-4} \cdot \frac{x+2}{x^2+2x+4}$

2. Efectúe y simplifique: $\frac{1}{x+1} + \frac{2}{x-1} - \frac{3x}{x^2-1}$

3. Simplifique la fracción compuesta: $\frac{\frac{1}{a}-\frac{1}{b}}{\frac{1}{a^2}-\frac{1}{b^2}}$

4. Encuentre el dominio y simplifique: $\frac{x^2-5x+6}{x^2-9}$
