# Quiz 17: Expresiones Racionales
**MATE 3001 - Matemática Elemental**
**UPR-Humacao**
**Lección 14: Expresiones Racionales**

---

## Dominio de Expresiones Racionales

### Pregunta 1: Dominio con Radicales

**Problema:** Encuentre el dominio de $\dfrac{\sqrt{2x+5}}{x^2-7x+10}$

**Solución:**

Para encontrar el dominio, debemos considerar dos restricciones:

1. **Restricción del numerador (radical):** El radicando debe ser no negativo:
   $$2x+5 \geq 0$$
   $$2x \geq -5$$
   $$x \geq -\frac{5}{2}$$

2. **Restricción del denominador:** No puede ser cero. Factorizamos:
   $$x^2-7x+10 = (x-2)(x-5)$$

   El denominador es cero cuando $x=2$ o $x=5$.

**Conclusión:** El dominio es el conjunto de valores que cumplen ambas condiciones:
$$\text{Dominio} = \left\{x\middle|x \geq -\frac{5}{2}, x \neq 2, x \neq 5\right\}$$

En notación de intervalos: $\left[-\frac{5}{2}, 2\right) \cup (2, 5) \cup (5, \infty)$

---

### Pregunta 2: Dominio con Factorización Triple

**Problema:** Encuentre el dominio de $\dfrac{x-1}{x^3+x^2-6x}$

**Solución:**

El numerador no impone restricciones. Para el denominador, factorizamos completamente:

1. **Factorización por factor común:**
   $$x^3+x^2-6x = x(x^2+x-6)$$

2. **Factorización del trinomio:**
   $$x^2+x-6 = (x+3)(x-2)$$

   Verificación: $(x+3)(x-2) = x^2-2x+3x-6 = x^2+x-6$ ✓

3. **Factorización completa:**
   $$x^3+x^2-6x = x(x+3)(x-2)$$

El denominador es cero cuando $x=0$, $x=-3$, o $x=2$.

**Conclusión:** El dominio es:
$$\text{Dominio} = \{x|x \neq 0, x \neq -3, x \neq 2\}$$

En notación de intervalos: $(-\infty, -3) \cup (-3, 0) \cup (0, 2) \cup (2, \infty)$

---

## Simplificación de Expresiones Racionales

### Pregunta 3: Diferencia de Cubos

**Problema:** Simplifique $\dfrac{x^3-27}{x^2-9}$

**Solución:**

1. **Factorización del numerador (diferencia de cubos):**
   $$x^3-27 = x^3-3^3 = (x-3)(x^2+3x+9)$$

   Fórmula: $a^3-b^3 = (a-b)(a^2+ab+b^2)$

2. **Factorización del denominador (diferencia de cuadrados):**
   $$x^2-9 = x^2-3^2 = (x-3)(x+3)$$

3. **Simplificación:**
   $$\dfrac{x^3-27}{x^2-9} = \dfrac{(x-3)(x^2+3x+9)}{(x-3)(x+3)} = \dfrac{\cancel{(x-3)}(x^2+3x+9)}{\cancel{(x-3)}(x+3)}$$

**Respuesta:** $\dfrac{x^2+3x+9}{x+3}$, donde $x \neq 3$ y $x \neq -3$

**Nota importante:** Aunque cancelamos $(x-3)$, la restricción $x \neq 3$ permanece del dominio original.

---

### Pregunta 4: Trinomio Cuadrado Perfecto

**Problema:** Simplifique $\dfrac{x^2+6x+9}{x^2-9}$

**Solución:**

1. **Factorización del numerador (TCP):**
   $$x^2+6x+9 = (x+3)^2$$

   Verificación: Es TCP porque $6x = 2(x)(3)$ y $9 = 3^2$ ✓

2. **Factorización del denominador:**
   $$x^2-9 = (x-3)(x+3)$$

3. **Simplificación:**
   $$\dfrac{x^2+6x+9}{x^2-9} = \dfrac{(x+3)^2}{(x-3)(x+3)} = \dfrac{(x+3)\cancel{(x+3)}}{(x-3)\cancel{(x+3)}}$$

**Respuesta:** $\dfrac{x+3}{x-3}$, donde $x \neq 3$ y $x \neq -3$

---

### Pregunta 5: Factor Común y Simplificación

**Problema:** Simplifique $\dfrac{3x^2-12}{x^2-4x+4}$

**Solución:**

1. **Factorización del numerador (factor común):**
   $$3x^2-12 = 3(x^2-4) = 3(x-2)(x+2)$$

2. **Factorización del denominador (TCP):**
   $$x^2-4x+4 = (x-2)^2$$

   Verificación: $-4x = 2(x)(-2)$ y $4 = (-2)^2$ ✓

3. **Simplificación:**
   $$\dfrac{3x^2-12}{x^2-4x+4} = \dfrac{3(x-2)(x+2)}{(x-2)^2} = \dfrac{3\cancel{(x-2)}(x+2)}{(x-2)^{\cancel{2}}}$$

**Respuesta:** $\dfrac{3(x+2)}{x-2}$, donde $x \neq 2$

---

## Multiplicación de Expresiones Racionales

### Pregunta 6: Multiplicación con Cancelación Múltiple

**Problema:** Multiplique $\dfrac{x^2-4}{x+3} \cdot \dfrac{x^2+6x+9}{x^2-4x+4}$

**Solución:**

**Estrategia:** Factorizar primero, cancelar factores comunes, luego multiplicar.

1. **Factorización de cada expresión:**
   - $x^2-4 = (x-2)(x+2)$
   - $x+3$ ya está factorizado
   - $x^2+6x+9 = (x+3)^2$ (TCP)
   - $x^2-4x+4 = (x-2)^2$ (TCP)

2. **Reescribir con factores:**
   $$\dfrac{(x-2)(x+2)}{x+3} \cdot \dfrac{(x+3)^2}{(x-2)^2}$$

3. **Cancelar factores comunes:**
   $$\dfrac{\cancel{(x-2)}(x+2)\cancel{(x+3)}^{\,2}}{\cancel{x+3}(x-2)^{\cancel{2}}} = \dfrac{(x+2)(x+3)}{x-2}$$

**Respuesta:** $\dfrac{(x+2)(x+3)}{x-2}$ o expandido: $\dfrac{x^2+5x+6}{x-2}$

**Dominio:** $x \neq -3, x \neq 2$

---

### Pregunta 7: Multiplicación Compleja

**Problema:** Multiplique $\dfrac{x^2+x-6}{x^2-1} \cdot \dfrac{x^2-2x+1}{x^2-9}$

**Solución:**

1. **Factorización:**
   - $x^2+x-6 = (x+3)(x-2)$ [buscar dos números que sumen 1 y multipliquen -6: +3 y -2]
   - $x^2-1 = (x-1)(x+1)$
   - $x^2-2x+1 = (x-1)^2$ (TCP)
   - $x^2-9 = (x-3)(x+3)$

2. **Multiplicación con factores:**
   $$\dfrac{(x+3)(x-2)}{(x-1)(x+1)} \cdot \dfrac{(x-1)^2}{(x-3)(x+3)}$$

3. **Cancelación:**
   $$\dfrac{\cancel{(x+3)}(x-2)\cancel{(x-1)}^{\,2}}{\cancel{(x-1)}(x+1)(x-3)\cancel{(x+3)}} = \dfrac{(x-2)(x-1)}{(x+1)(x-3)}$$

**Respuesta:** $\dfrac{(x-2)(x-1)}{(x+1)(x-3)}$ o expandido: $\dfrac{x^2-3x+2}{x^2-2x-3}$

---

### Pregunta 8: Multiplicación con Factor Común

**Problema:** Multiplique $\dfrac{2x^2-8}{x^2+5x} \cdot \dfrac{x^2+4x-5}{x-2}$

**Solución:**

1. **Factorización:**
   - $2x^2-8 = 2(x^2-4) = 2(x-2)(x+2)$
   - $x^2+5x = x(x+5)$
   - $x^2+4x-5 = (x+5)(x-1)$ [buscar dos números que sumen 4 y multipliquen -5: +5 y -1]
   - $x-2$ ya está factorizado

2. **Multiplicación:**
   $$\dfrac{2(x-2)(x+2)}{x(x+5)} \cdot \dfrac{(x+5)(x-1)}{x-2}$$

3. **Cancelación:**
   $$\dfrac{2\cancel{(x-2)}(x+2)\cancel{(x+5)}(x-1)}{x\cancel{(x+5)}\cancel{(x-2)}} = \dfrac{2(x+2)(x-1)}{x}$$

**Respuesta:** $\dfrac{2(x+2)(x-1)}{x}$ o expandido: $\dfrac{2x^2+2x-4}{x}$ o $2x+2-\dfrac{4}{x}$

**Dominio:** $x \neq 0, x \neq -5, x \neq 2$

---

## División de Expresiones Racionales

### Pregunta 9: División Básica

**Problema:** Divida $\dfrac{x^2-1}{x+3} \div \dfrac{x-1}{x^2+6x+9}$

**Solución:**

**Regla:** Dividir entre una fracción es multiplicar por su recíproco.

1. **Convertir a multiplicación:**
   $$\dfrac{x^2-1}{x+3} \div \dfrac{x-1}{x^2+6x+9} = \dfrac{x^2-1}{x+3} \cdot \dfrac{x^2+6x+9}{x-1}$$

2. **Factorización:**
   - $x^2-1 = (x-1)(x+1)$
   - $x^2+6x+9 = (x+3)^2$ (TCP)

3. **Multiplicación y cancelación:**
   $$\dfrac{(x-1)(x+1)}{x+3} \cdot \dfrac{(x+3)^2}{x-1} = \dfrac{\cancel{(x-1)}(x+1)\cancel{(x+3)}^{\,2}}{\cancel{x+3}\cancel{(x-1)}}$$

**Respuesta:** $(x+1)(x+3)$ o expandido: $x^2+4x+3$

---

### Pregunta 10: División con Simplificación

**Problema:** Divida $\dfrac{2x^2-8}{x^2+x-6} \div \dfrac{x-2}{x+3}$

**Solución:**

1. **Convertir a multiplicación:**
   $$\dfrac{2x^2-8}{x^2+x-6} \cdot \dfrac{x+3}{x-2}$$

2. **Factorización:**
   - $2x^2-8 = 2(x^2-4) = 2(x-2)(x+2)$
   - $x^2+x-6 = (x+3)(x-2)$

3. **Multiplicación:**
   $$\dfrac{2(x-2)(x+2)}{(x+3)(x-2)} \cdot \dfrac{x+3}{x-2}$$

4. **Cancelación:**
   $$\dfrac{2\cancel{(x-2)}(x+2)\cancel{(x+3)}}{\cancel{(x+3)}\cancel{(x-2)}^{\,2}} = \dfrac{2(x+2)}{x-2}$$

**Respuesta:** $\dfrac{2(x+2)}{x-2}$ o $\dfrac{2x+4}{x-2}$

**Nota:** Observe que $(x-2)$ aparece tres veces en total, pero solo podemos cancelar dos ocurrencias.

---

### Pregunta 11: División Múltiple con Multiplicación

**Problema:** Simplifique $\dfrac{x^2-16}{2x+6} \cdot \dfrac{x^2+3x}{x^2-4x} \div \dfrac{x+4}{2x}$

**Solución:**

1. **Convertir división a multiplicación:**
   $$\dfrac{x^2-16}{2x+6} \cdot \dfrac{x^2+3x}{x^2-4x} \cdot \dfrac{2x}{x+4}$$

2. **Factorización completa:**
   - $x^2-16 = (x-4)(x+4)$
   - $2x+6 = 2(x+3)$
   - $x^2+3x = x(x+3)$
   - $x^2-4x = x(x-4)$
   - $2x$ ya está factorizado
   - $x+4$ ya está factorizado

3. **Reescribir con factores:**
   $$\dfrac{(x-4)(x+4)}{2(x+3)} \cdot \dfrac{x(x+3)}{x(x-4)} \cdot \dfrac{2x}{x+4}$$

4. **Cancelación sistemática:**
   $$\dfrac{\cancel{(x-4)}\cancel{(x+4)}\cancel{x}\cancel{(x+3)}\cancel{2}x}{\cancel{2}\cancel{(x+3)}\cancel{x}\cancel{(x-4)}\cancel{(x+4)}} = \dfrac{x}{1} = x$$

**Respuesta:** $x$ (donde $x \neq 0, -3, -4, 4$)

**Observación interesante:** Una expresión aparentemente compleja se simplifica completamente a simplemente $x$.

---

## Suma y Resta de Expresiones Racionales

### Pregunta 12: Suma con Potencias Sucesivas

**Problema:** Efectúe $\dfrac{1}{x} + \dfrac{2}{x^2} - \dfrac{3}{x^3}$

**Solución:**

1. **Identificar el MCD (Mínimo Común Denominador):**

   Denominadores: $x$, $x^2$, $x^3$

   MCD = $x^3$ (la mayor potencia)

2. **Convertir cada fracción al MCD:**
   $$\dfrac{1}{x} = \dfrac{1 \cdot x^2}{x \cdot x^2} = \dfrac{x^2}{x^3}$$
   $$\dfrac{2}{x^2} = \dfrac{2 \cdot x}{x^2 \cdot x} = \dfrac{2x}{x^3}$$
   $$\dfrac{3}{x^3} = \dfrac{3}{x^3}$$

3. **Sumar con denominador común:**
   $$\dfrac{x^2}{x^3} + \dfrac{2x}{x^3} - \dfrac{3}{x^3} = \dfrac{x^2+2x-3}{x^3}$$

4. **Factorizar el numerador (si es posible):**
   $$x^2+2x-3 = (x+3)(x-1)$$

   [buscar dos números que sumen 2 y multipliquen -3: +3 y -1]

**Respuesta:** $\dfrac{(x+3)(x-1)}{x^3}$ o $\dfrac{x^2+2x-3}{x^3}$

---

### Pregunta 13: Suma con Denominadores Relacionados

**Problema:** Efectúe $\dfrac{2x}{x^2-1} + \dfrac{3}{x-1} - \dfrac{1}{x+1}$

**Solución:**

1. **Factorizar denominadores:**
   - $x^2-1 = (x-1)(x+1)$
   - $x-1$ ya está factorizado
   - $x+1$ ya está factorizado

2. **Identificar el MCD:**

   MCD = $(x-1)(x+1)$

3. **Convertir cada fracción al MCD:**
   $$\dfrac{2x}{x^2-1} = \dfrac{2x}{(x-1)(x+1)}$$ (ya tiene el MCD)

   $$\dfrac{3}{x-1} = \dfrac{3(x+1)}{(x-1)(x+1)}$$

   $$\dfrac{1}{x+1} = \dfrac{x-1}{(x-1)(x+1)}$$

4. **Sumar con denominador común:**
   $$\dfrac{2x + 3(x+1) - (x-1)}{(x-1)(x+1)}$$

5. **Simplificar el numerador:**
   $$2x + 3x + 3 - x + 1 = 4x + 4 = 4(x+1)$$

6. **Simplificación final:**
   $$\dfrac{4(x+1)}{(x-1)(x+1)} = \dfrac{4\cancel{(x+1)}}{(x-1)\cancel{(x+1)}} = \dfrac{4}{x-1}$$

**Respuesta:** $\dfrac{4}{x-1}$

---

### Pregunta 14: Resta con Trinomios en Denominadores

**Problema:** Efectúe $\dfrac{x+1}{x^2+5x+6} - \dfrac{x-1}{x^2+4x+3}$

**Solución:**

1. **Factorizar denominadores:**

   $x^2+5x+6$: buscar dos números que sumen 5 y multipliquen 6 → +2 y +3
   $$x^2+5x+6 = (x+2)(x+3)$$

   $x^2+4x+3$: buscar dos números que sumen 4 y multipliquen 3 → +1 y +3
   $$x^2+4x+3 = (x+1)(x+3)$$

2. **Identificar el MCD:**

   Factores distintos: $(x+1)$, $(x+2)$, $(x+3)$

   MCD = $(x+1)(x+2)(x+3)$

3. **Convertir al MCD:**
   $$\dfrac{x+1}{(x+2)(x+3)} = \dfrac{(x+1)(x+1)}{(x+1)(x+2)(x+3)} = \dfrac{(x+1)^2}{(x+1)(x+2)(x+3)}$$

   $$\dfrac{x-1}{(x+1)(x+3)} = \dfrac{(x-1)(x+2)}{(x+1)(x+2)(x+3)}$$

4. **Restar:**
   $$\dfrac{(x+1)^2 - (x-1)(x+2)}{(x+1)(x+2)(x+3)}$$

5. **Expandir y simplificar el numerador:**
   $$(x+1)^2 = x^2+2x+1$$
   $$(x-1)(x+2) = x^2+2x-x-2 = x^2+x-2$$

   Resta: $(x^2+2x+1) - (x^2+x-2) = x^2+2x+1-x^2-x+2 = x+3$

6. **Simplificación final:**
   $$\dfrac{x+3}{(x+1)(x+2)(x+3)} = \dfrac{\cancel{x+3}}{(x+1)(x+2)\cancel{(x+3)}} = \dfrac{1}{(x+1)(x+2)}$$

**Respuesta:** $\dfrac{1}{(x+1)(x+2)}$ o $\dfrac{1}{x^2+3x+2}$

---

## Fracciones Compuestas

### Pregunta 15: Fracción Compuesta Simple

**Problema:** Simplifique $\dfrac{\dfrac{x+1}{x-1}}{\dfrac{x^2-1}{x+2}}$

**Solución:**

**Concepto:** Una fracción compuesta se simplifica dividiendo el numerador entre el denominador.

1. **Reescribir como división:**
   $$\dfrac{x+1}{x-1} \div \dfrac{x^2-1}{x+2}$$

2. **Convertir a multiplicación:**
   $$\dfrac{x+1}{x-1} \cdot \dfrac{x+2}{x^2-1}$$

3. **Factorizar:**
   $$x^2-1 = (x-1)(x+1)$$

4. **Sustituir y cancelar:**
   $$\dfrac{x+1}{x-1} \cdot \dfrac{x+2}{(x-1)(x+1)} = \dfrac{\cancel{(x+1)}(x+2)}{(x-1)^2\cancel{(x+1)}}$$

**Respuesta:** $\dfrac{x+2}{(x-1)^2}$

---

### Pregunta 16: Fracción Compuesta con Expresiones Múltiples

**Problema:** Simplifique $\dfrac{1-\dfrac{2}{x}+\dfrac{1}{x^2}}{1-\dfrac{1}{x^2}}$

**Solución:**

**Método:** Simplificar numerador y denominador por separado.

1. **Simplificar el numerador:**

   MCD de $1$, $\dfrac{2}{x}$, $\dfrac{1}{x^2}$ es $x^2$

   $$1-\dfrac{2}{x}+\dfrac{1}{x^2} = \dfrac{x^2}{x^2}-\dfrac{2x}{x^2}+\dfrac{1}{x^2} = \dfrac{x^2-2x+1}{x^2}$$

   Factorizar: $x^2-2x+1 = (x-1)^2$ (TCP)

   Numerador: $\dfrac{(x-1)^2}{x^2}$

2. **Simplificar el denominador:**

   MCD de $1$ y $\dfrac{1}{x^2}$ es $x^2$

   $$1-\dfrac{1}{x^2} = \dfrac{x^2}{x^2}-\dfrac{1}{x^2} = \dfrac{x^2-1}{x^2}$$

   Factorizar: $x^2-1 = (x-1)(x+1)$

   Denominador: $\dfrac{(x-1)(x+1)}{x^2}$

3. **Dividir:**
   $$\dfrac{\dfrac{(x-1)^2}{x^2}}{\dfrac{(x-1)(x+1)}{x^2}} = \dfrac{(x-1)^2}{x^2} \cdot \dfrac{x^2}{(x-1)(x+1)}$$

4. **Cancelar:**
   $$\dfrac{(x-1)^{\cancel{2}}\cancel{x^2}}{\cancel{x^2}\cancel{(x-1)}(x+1)} = \dfrac{x-1}{x+1}$$

**Respuesta:** $\dfrac{x-1}{x+1}$

---

### Pregunta 17: Fracción Compuesta con Diferencia

**Problema:** Simplifique $\dfrac{\dfrac{1}{x+1}-\dfrac{1}{x-1}}{\dfrac{2}{x^2-1}}$

**Solución:**

1. **Simplificar el numerador:**

   MCD de $\dfrac{1}{x+1}$ y $\dfrac{1}{x-1}$ es $(x+1)(x-1)$

   $$\dfrac{1}{x+1}-\dfrac{1}{x-1} = \dfrac{(x-1)}{(x+1)(x-1)} - \dfrac{(x+1)}{(x+1)(x-1)}$$

   $$= \dfrac{(x-1)-(x+1)}{(x+1)(x-1)} = \dfrac{x-1-x-1}{(x+1)(x-1)} = \dfrac{-2}{(x+1)(x-1)}$$

   Nota: $(x+1)(x-1) = x^2-1$

   Numerador: $\dfrac{-2}{x^2-1}$

2. **El denominador ya está simplificado:**

   Denominador: $\dfrac{2}{x^2-1}$

3. **Dividir:**
   $$\dfrac{\dfrac{-2}{x^2-1}}{\dfrac{2}{x^2-1}} = \dfrac{-2}{x^2-1} \cdot \dfrac{x^2-1}{2}$$

4. **Cancelar:**
   $$\dfrac{-2\cancel{(x^2-1)}}{\cancel{(x^2-1)} \cdot 2} = \dfrac{-2}{2} = -1$$

**Respuesta:** $-1$

**Observación sorprendente:** Esta expresión compleja se reduce a la constante $-1$ para todos los valores en su dominio ($x \neq 1, x \neq -1$).

---

## Fin del Quiz 17

**Resumen de temas cubiertos:**
- Dominio de expresiones racionales (con radicales y factorización múltiple)
- Simplificación usando diferencia de cubos, cuadrados perfectos y factorización
- Multiplicación con cancelación de factores comunes
- División mediante conversión a multiplicación
- Suma y resta con mínimo común denominador
- Fracciones compuestas con diversas estructuras

**Total de preguntas:** 17
