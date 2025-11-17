# Ecuaciones Racionales

Continuación de 14_ExpresionesRacionales.md. En esta lección se aplican las ideas de dominio, MCD y factorización para resolver ecuaciones que contienen expresiones fraccionarias.

---

## Objetivos

- Resolver ecuaciones racionales eliminando denominadores con el MCD.
- Identificar y excluir valores prohibidos del dominio.
- Verificar y descartar soluciones extrañas.
- Conectar con factorización y la propiedad de producto cero.

---

## Prerrequisitos

- Dominio y restricciones de expresiones racionales.
- Factorización de polinomios y producto cero.
- Suma y resta con MCD y manejo de signos.
- Multiplicar por el recíproco al dividir fracciones.

---

## Idea Clave

Multiplicar ambos lados por el mínimo común denominador (MCD) elimina los denominadores y produce una ecuación polinómica equivalente, siempre que primero se **excluyan** los ceros del MCD. Cada solución hallada debe **verificarse** en la ecuación original.

---

## Procedimiento General

1. Escriba las **restricciones**: valores que anulan cualquier denominador.
2. Multiplique ambos lados por el **MCD** de todos los denominadores.
3. Simplifique, expanda y lleve a forma estándar (a menudo cuadrática).
4. Resuelva por factorización, fórmula cuadrática u otro método.
5. **Verifique** en la ecuación original y descarte soluciones que violen restricciones.

---

## Ejemplo Guiado (como en la imagen)

Resuelva: \(\dfrac{3}{x} + \dfrac{5}{x+2} = 2\)

- Restricciones: \(x \neq 0\), \(x \neq -2\).
- MCD: \(x(x+2)\).

Multiplicando: \(\big(\dfrac{3}{x} + \dfrac{5}{x+2}\big) x(x+2) = 2x(x+2)\)

\[3(x+2) + 5x = 2x^2 + 4x\]

\[8x + 6 = 2x^2 + 4x\ \Rightarrow\ 0 = 2x^2 - 4x - 6\]

Dividiendo entre 2: \(x^2 - 2x - 3 = 0\)

Factorizando: \((x-3)(x+1)=0\) \(\Rightarrow x=3\) o \(x=-1\).

Verificación: ambas cumplen y no violan las restricciones.

---

## Ejemplo 2

Resuelva: \(\dfrac{2}{x-1} + \dfrac{1}{x+1} = 1\)

- Restricciones: \(x \neq \pm 1\). MCD: \((x-1)(x+1)\).

\[2(x+1) + (x-1) = (x-1)(x+1)\]

\[3x + 1 = x^2 - 1 \Rightarrow x^2 - 3x - 2 = 0\]

\[x = \dfrac{3 \pm \sqrt{17}}{2}\] (ambas válidas).

---

## Ejemplo 3: Solución extraña

Resuelva: \(\dfrac{x+2}{x-3} = 2 + \dfrac{5}{x-3}\)

- Restricción: \(x \neq 3\). MCD: \(x-3\).

\[x+2 = 2(x-3) + 5 \Rightarrow x+2 = 2x - 1 \Rightarrow x = 3\]

Se descarta por violar la restricción. Conclusión: **sin solución**.

---

## Errores Comunes

- Multiplicar por el MCD sin anotar primero las restricciones.
- “Cancelar” a través de sumas o restas.
- Olvidar verificar en la ecuación original.
- Cruzar productos cuando hay varias fracciones por lado en lugar de usar un MCD común.

---

## Práctica Rápida (con respuesta)

1. \(\dfrac{1}{x+1} + \dfrac{1}{x-1} = 1\) → \(x = 1 \pm \sqrt{2}\), \(x \neq \pm 1\).
2. \(\dfrac{x}{x-2} = 2\) → \(x=4\), \(x \neq 2\).
3. \(\dfrac{x+1}{x} = \dfrac{3}{x-2}\) → \(x = 2 \pm \sqrt{6}\), \(x \neq 0,2\).
4. \(\dfrac{1}{x-3} - \dfrac{1}{x+3} = \dfrac{1}{3}\) → \(x = \pm 3\sqrt{3}\), \(x \neq \pm 3\).

---

## Exit Ticket

Resuelva y verifique: \(\dfrac{5}{x-2} - \dfrac{1}{x} = 1\).

Respuesta esperada: \(x = 5 \pm \sqrt{5}\), con \(x \neq 0, 2\).

---

## Ejercicios Propuestos

1. \(\dfrac{3}{x-2} + \dfrac{4}{x+3} = 1\)
2. \(\dfrac{x}{x^2-4} - \dfrac{2}{x+2} = 0\)
3. \(\dfrac{1}{x} + \dfrac{2}{x^2} - \dfrac{3}{x^3} = 0\)
4. \(\dfrac{2x}{x^2-1} + \dfrac{3}{x-1} - \dfrac{1}{x+1} = 0\)
5. \(\dfrac{x+1}{x^2+5x+6} - \dfrac{x-1}{x^2+4x+3} = \dfrac{1}{x+3}\)

Sugerencia: En cada ejercicio liste primero las restricciones y utilice el MCD para limpiar denominadores.

---

## Notas Didácticas

- Mantenga visibles el MCD y las restricciones durante todo el procedimiento.
- Conecte con 14_ExpresionesRacionales.md: uso consistente de MCD, factorización y manejo de signos.
- Si al limpiar denominadores surge una igualdad imposible (p. ej., \(-2=4\)) concluye **sin solución** tras verificar restricciones.

