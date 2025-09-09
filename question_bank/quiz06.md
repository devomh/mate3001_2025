# Quiz 06: Factorización y Evaluación de Polinomios

**MATE 3001 - Matemática Elemental**  
**UPR-Humacao**

---

## Pregunta 1: Factor común básico

Factorice completamente la expresión: $24x^3y^2 - 18x^2y^3 + 12xy^4$

**Solución:**
1. **Identificar el MFC numérico:** $\gcd(24, 18, 12) = 6$
2. **Identificar el MFC literal:** Para $x$: $\min(3, 2, 1) = 1$, para $y$: $\min(2, 3, 4) = 2$
3. **MFC total:** $6xy^2$
4. **Factorización:**
   $$24x^3y^2 - 18x^2y^3 + 12xy^4 = 6xy^2(4x^2 - 3xy + 2y^2)$$

**Verificación:** $6xy^2 \cdot 4x^2 = 24x^3y^2$, $6xy^2 \cdot (-3xy) = -18x^2y^3$, $6xy^2 \cdot 2y^2 = 12xy^4$ ✓

---

## Pregunta 2: Trinomio cuadrático (a = 1)

Factorice completamente: $x^2 - 8x + 15$

**Solución:**
1. **Buscar dos números:** que sumen $-8$ y multipliquen $15$
2. **Los números son:** $-3$ y $-5$ (porque $-3 + (-5) = -8$ y $(-3) \times (-5) = 15$)
3. **Factorización:**
   $$x^2 - 8x + 15 = (x - 3)(x - 5)$$

**Verificación:** $(x - 3)(x - 5) = x^2 - 5x - 3x + 15 = x^2 - 8x + 15$ ✓

---

## Pregunta 3: Diferencia de cuadrados simple

Factorice completamente: $49a^2 - 16b^2$

**Solución:**
1. **Identificar cuadrados perfectos:** $49a^2 = (7a)^2$ y $16b^2 = (4b)^2$
2. **Aplicar la fórmula:** $A^2 - B^2 = (A + B)(A - B)$
3. **Factorización:**
   $$49a^2 - 16b^2 = (7a + 4b)(7a - 4b)$$

**Verificación:** $(7a + 4b)(7a - 4b) = 49a^2 - 28ab + 28ab - 16b^2 = 49a^2 - 16b^2$ ✓

---

## Pregunta 4: Factorización por agrupación

Factorice completamente: $2x^3 - 6x^2 + 3x - 9$

**Solución:**
1. **Agrupar en pares:** $(2x^3 - 6x^2) + (3x - 9)$
2. **Factorizar cada grupo:**
   - Primer grupo: $2x^2(x - 3)$
   - Segundo grupo: $3(x - 3)$
3. **Factor común binomial:** $(x - 3)$
4. **Factorización completa:**
   $$2x^3 - 6x^2 + 3x - 9 = (x - 3)(2x^2 + 3)$$

**Verificación:** $(x - 3)(2x^2 + 3) = 2x^3 + 3x - 6x^2 - 9 = 2x^3 - 6x^2 + 3x - 9$ ✓

---

## Pregunta 5: Trinomio cuadrático (método AC)

Factorice completamente: $6x^2 + 13x - 5$

**Solución:**
1. **Calcular AC:** $a = 6$, $c = -5$, entonces $AC = 6 \times (-5) = -30$
2. **Buscar dos números:** que sumen $13$ y multipliquen $-30$
   - Los números son: $15$ y $-2$ (porque $15 + (-2) = 13$ y $15 \times (-2) = -30$)
3. **Reescribir el término medio:** $6x^2 + 15x - 2x - 5$
4. **Agrupar y factorizar:**
   - $(6x^2 + 15x) + (-2x - 5)$
   - $3x(2x + 5) - 1(2x + 5)$
5. **Factorización completa:**
   $$6x^2 + 13x - 5 = (2x + 5)(3x - 1)$$

**Verificación:** $(2x + 5)(3x - 1) = 6x^2 - 2x + 15x - 5 = 6x^2 + 13x - 5$ ✓

---

## Pregunta 6: Múltiples técnicas - Factor común y diferencia de cuadrados

Factorice completamente: $3x^4 - 48$

**Solución:**
1. **Factor común:** $3(x^4 - 16)$
2. **Diferencia de cuadrados:** $x^4 - 16 = (x^2)^2 - 4^2 = (x^2 + 4)(x^2 - 4)$
3. **Segunda diferencia de cuadrados:** $x^2 - 4 = (x + 2)(x - 2)$
4. **Factorización completa:**
   $$3x^4 - 48 = 3(x^2 + 4)(x + 2)(x - 2)$$

**Verificación:** $3(x^2 + 4)(x + 2)(x - 2) = 3(x^2 + 4)(x^2 - 4) = 3(x^4 - 16) = 3x^4 - 48$ ✓

---

## Pregunta 7: Trinomio cuadrático perfecto

Factorice completamente: $25x^2 + 30x + 9$

**Solución:**
1. **Verificar cuadrados perfectos:**
   - Primer término: $25x^2 = (5x)^2$
   - Último término: $9 = 3^2$
2. **Verificar término medio:** $30x = 2(5x)(3) = 30x$ ✓
3. **Aplicar la fórmula:** $a^2 + 2ab + b^2 = (a + b)^2$
4. **Factorización:**
   $$25x^2 + 30x + 9 = (5x + 3)^2$$

**Verificación:** $(5x + 3)^2 = 25x^2 + 30x + 9$ ✓

---

## Pregunta 8: Suma de cubos

Factorice completamente: $27x^3 + 64y^3$

**Solución:**
1. **Identificar cubos perfectos:**
   - $27x^3 = (3x)^3$
   - $64y^3 = (4y)^3$
2. **Aplicar la fórmula:** $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$
3. **Sustituir:** $a = 3x$, $b = 4y$
4. **Calcular cada parte:**
   - $a^2 = 9x^2$
   - $ab = 12xy$
   - $b^2 = 16y^2$
5. **Factorización completa:**
   $$27x^3 + 64y^3 = (3x + 4y)(9x^2 - 12xy + 16y^2)$$

**Verificación:** Se puede verificar expandiendo el producto.

---

## Pregunta 9: Técnica combinada avanzada

Factorice completamente: $x^4 - 10x^2 + 25$

**Solución:**
1. **Reconocer como cuadrática en $x^2$:** Sea $u = x^2$, entonces $u^2 - 10u + 25$
2. **Factorizar la cuadrática:** Buscar números que sumen $-10$ y multipliquen $25$: $-5$ y $-5$
3. **Factorización en términos de $u$:** $u^2 - 10u + 25 = (u - 5)^2$
4. **Sustituir de vuelta:** $(x^2 - 5)^2$
5. **Factorización completa:**
   $$x^4 - 10x^2 + 25 = (x^2 - 5)^2$$

**Nota:** Como $x^2 - 5$ no se puede factorizar más en números reales, esta es la factorización completa.

**Verificación:** $(x^2 - 5)^2 = x^4 - 10x^2 + 25$ ✓

---

## Pregunta 10: Diferencia de cubos

Factorice completamente: $8x^3 - 125$

**Solución:**
1. **Identificar cubos perfectos:**
   - $8x^3 = (2x)^3$
   - $125 = 5^3$
2. **Aplicar la fórmula:** $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$
3. **Sustituir:** $a = 2x$, $b = 5$
4. **Calcular cada parte:**
   - $a - b = 2x - 5$
   - $a^2 = 4x^2$
   - $ab = 10x$
   - $b^2 = 25$
5. **Factorización completa:**
   $$8x^3 - 125 = (2x - 5)(4x^2 + 10x + 25)$$

**Verificación:** Se puede verificar expandiendo: $(2x - 5)(4x^2 + 10x + 25) = 8x^3 + 20x^2 + 50x - 20x^2 - 50x - 125 = 8x^3 - 125$ ✓