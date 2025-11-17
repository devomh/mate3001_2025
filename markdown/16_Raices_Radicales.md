# Raíces y Radicales

Temario:
- Raíces y radicales / Simplificación de expresiones con radicales
- Multiplicación y simplificación de radicales
- División y racionalización de radicales
- Suma y resta de radicales
- Radicales y notación exponencial

Salvo aviso contrario, trabajamos en números reales. Para índices **pares** se exige radicando ≥ 0 y, al simplificar, pueden aparecer valores absolutos (por ejemplo, \(\sqrt{x^2}=|x|\)).

---

## Raíces y radicales — Simplificación de expresiones con radicales

Objetivos
- Reconocer partes de un radical: índice, signo radical y radicando.
- Determinar cuándo una raíz es real (índice par vs. impar).
- Simplificar extrayendo factores que sean potencias perfectas del índice.

Definiciones y propiedades
- Raíz n‑ésima: \(\sqrt[n]{a}\) es el número \(b\) tal que \(b^n=a\) (si existe en \(\mathbb{R}\)).
- Producto y potencia perfectos: si \(a=k^n\), entonces \(\sqrt[n]{a}=k\).
- Extracción de factores: \(\sqrt[n]{a^n b}=|a|\,\sqrt[n]{b}\) si \(n\) es par; \(\sqrt[n]{a^n b}=a\,\sqrt[n]{b}\) si \(n\) es impar.

Procedimiento de simplificación (índice general \(n\))
1. Factorice el radicando como producto de potencias: \(a=a_1^n\,a_2\).
2. Extraiga \(a_1\) fuera del radical; mantenga \(a_2\) dentro.
3. Para índices pares, use valor absoluto cuando corresponda.

Ejemplo 1 (del banco de exámenes)
- Simplifique \(\sqrt{72x^3y^4}\).

Solución
\[\sqrt{72x^3y^4}=\sqrt{36\cdot2\cdot x^2\cdot x\cdot (y^2)^2}=6\,\sqrt{2x}\,\sqrt{x^2}\,\sqrt{y^4}
=6\,\sqrt{2x}\,|x|\,y^2=6|x|y^2\sqrt{2x}.\]
- Si se asume \(x\ge 0\), entonces \(6xy^2\sqrt{2x}\).

Ejemplo 2 (índice impar)
- Simplifique \(\sqrt[3]{54a^5b^3}\).

Solución
\[\sqrt[3]{54a^5b^3}=\sqrt[3]{27\cdot2}\,\sqrt[3]{a^3}\,\sqrt[3]{a^2}\,\sqrt[3]{b^3}=3ab\,\sqrt[3]{2a^2}.\]

Aplicación rápida (dominio)
- Si \(f(x)=\sqrt{x-3}\), entonces el dominio real cumple \(x-3\ge 0\Rightarrow x\ge 3\).

Errores comunes
- Olvidar el valor absoluto al simplificar \(\sqrt{x^2}\).
- Pretender que \(\sqrt{a+b}=\sqrt{a}+\sqrt{b}\) (falso).

---

## Multiplicación y simplificación de radicales

Objetivos
- Multiplicar radicales con el mismo índice y simplificar el resultado.

Propiedad clave
- Para \(a,b\ge 0\) si el índice es par: \(\sqrt[n]{a}\,\sqrt[n]{b}=\sqrt[n]{ab}\).
- Se debe simplificar el radicando y, si es posible, extraer factores perfectos.

Ejemplo 1 (del banco de exámenes)
- Multiplique y simplifique: \((\sqrt{3x})(\sqrt{15x^3})\).

Solución
\[(\sqrt{3x})(\sqrt{15x^3})=\sqrt{45x^4}=\sqrt{9\cdot5\cdot x^4}=3x^2\sqrt{5}.\]

Ejemplo 2
- \(\sqrt[3]{8a^2}\cdot\sqrt[3]{2a}=\sqrt[3]{16a^3}=2a\,\sqrt[3]{2}.\)

Consejos
- Factorice antes de multiplicar para extraer más fácilmente potencias perfectas.

---

## División y racionalización de radicales

Objetivos
- Dividir radicales con el mismo índice y racionalizar denominadores.

Propiedades
- \(\dfrac{\sqrt[n]{a}}{\sqrt[n]{b}}=\sqrt[n]{\dfrac{a}{b}}\) con \(b>0\) (y condiciones de realidad para índice par).
- Para eliminar radicales en el denominador:
  - Denominador monomial con \(\sqrt{m}\): multiplicar por \(\dfrac{\sqrt{m}}{\sqrt{m}}\).
  - Denominador binomial \(a\pm b\sqrt{m}\): multiplicar por el conjugado \(a\mp b\sqrt{m}\).

Ejemplo 1 (del banco de exámenes)
- Racionalice: \(\dfrac{5}{4-\sqrt{2}}\).

Solución (conjugado)
\[\frac{5}{4-\sqrt{2}}\cdot\frac{4+\sqrt{2}}{4+\sqrt{2}}=\frac{5(4+\sqrt{2})}{(4)^2-(\sqrt{2})^2}=\frac{20+5\sqrt{2}}{14}=\frac{10}{7}+\frac{5\sqrt{2}}{14}.\]

Ejemplo 2 (monomial)
- \(\dfrac{3}{\sqrt{5}}=\dfrac{3\sqrt{5}}{5}.\)

Ejemplo 3 (simplificar antes de racionalizar)
- \(\dfrac{2\sqrt{3}}{\sqrt{6}}=\sqrt{\dfrac{12}{6}}=\sqrt{2}=\dfrac{2\sqrt{6}}{6}\) (ambas formas equivalentes; la simplificada es \(\sqrt{2}\)).

Errores comunes
- Racionalizar sin antes simplificar; usar conjugado incorrecto; olvidar distribuir.

---

## Suma y resta de radicales

Objetivos
- Identificar radicales semejantes y combinarlos correctamente.

Regla
- Solo se suman/restan radicales con **mismo índice y mismo radicando** una vez simplificados. Actúan como “términos semejantes”.

Ejemplo 1 (del banco de exámenes)
- Simplifique: \(4\sqrt{20}-3\sqrt{5}+\sqrt{45}\).

Solución
\(\sqrt{20}=2\sqrt{5}\), \(\sqrt{45}=3\sqrt{5}\). Entonces
\[4(2\sqrt{5})-3\sqrt{5}+3\sqrt{5}=8\sqrt{5}.\]

Ejemplo 2
- \(3\sqrt{8}-\sqrt{18}+2\sqrt{2}=3(2\sqrt{2})-3\sqrt{2}+2\sqrt{2}=5\sqrt{2}.\)

Ejemplo 3 (con variables)
- \(5x\sqrt{3y}-2\sqrt{27y}+\sqrt{12y}=5x\sqrt{3y}-6\sqrt{3y}+2\sqrt{3y}=(5x-4)\sqrt{3y}.\)

Errores comunes
- Intentar combinar radicales no semejantes; no simplificar cada radical antes de combinar.

---

## Radicales y notación exponencial

Objetivos
- Convertir entre notación radical y exponente racional y aplicar leyes de exponentes.

Equivalencias
- \(\sqrt[n]{a^m}=a^{\frac{m}{n}}\) (si \(a\ge 0\) cuando \(n\) es par).
- \(a^{p/q}=\sqrt[q]{a^p}\); \(a^{-r}=\dfrac{1}{a^r}\) para \(a\ne 0\).

Ejemplo 1 (del banco de exámenes)
- Convertir: \(\sqrt[5]{x^2}=x^{2/5}\).
- Convertir: \(y^{-3/4}=\dfrac{1}{y^{3/4}}=\dfrac{1}{\sqrt[4]{y^3}}\).

Ejemplo 2 (operando con exponentes racionales)
\[\frac{x^{3/2}\,x^{1/2}}{x^{5/2}}=x^{(3/2+1/2-5/2)}=x^{-1/2}=\frac{1}{\sqrt{x}}.\]

Ejemplo 3 (de radical a exponente y simplificación)
\[\sqrt[3]{a^5}=a^{5/3}=a\,a^{2/3}=a\sqrt[3]{a^2}.\]

Errores comunes
- Omitir el signo de fracción en el exponente (\(a^{m/n}\)); olvidar que un exponente negativo “manda al denominador”.

---

## Práctica guiada (opcional)

1) Simplifique completamente: \(\sqrt{200x^4y^3}\).
- \(\sqrt{200x^4y^3}=\sqrt{100\cdot2}\,\sqrt{x^4}\,\sqrt{y^2\cdot y}=10x^2|y|\sqrt{2y}.\)

2) Multiplique y simplifique: \(\sqrt{7a}\cdot\sqrt{21a^3}=\sqrt{147a^4}=7a^2\sqrt{3}.\)

3) Racionalice: \(\dfrac{2}{\sqrt{3}-\sqrt{2}}=\dfrac{2(\sqrt{3}+\sqrt{2})}{(\sqrt{3})^2-(\sqrt{2})^2}=\dfrac{2(\sqrt{3}+\sqrt{2})}{1}.\)

4) Sume/resta: \(2\sqrt{12}+\sqrt{27}-5\sqrt{3}=4\sqrt{3}+3\sqrt{3}-5\sqrt{3}=2\sqrt{3}.\)

5) Convierta y simplifique: \(\sqrt[4]{x^6}=x^{6/4}=x^{3/2}=x\sqrt{x}.\)

---

Notas didácticas
- Mantenga visibles las restricciones de dominio para índices pares.
- Siempre simplifique radicales antes de sumar/restar o racionalizar.
- En problemas con variables, indique cuándo aparecen valores absolutos o especifique supuestos (por ejemplo, “para \(x\ge 0\)”).

