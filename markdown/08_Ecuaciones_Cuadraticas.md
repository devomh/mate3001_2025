# Sección 3.8: Ecuaciones Cuadráticas

## Definición

- **Ecuación cuadrática:** puede escribirse como
  $$ax^2 + bx + c = 0, \quad a\neq 0,\ a,b,c\in\mathbb{R}.$$

## Ejemplos

- $x^2 + 6x = -9$  
- $x(x+5) = -4$  
- $x^2 - 3x = 0$  
- $5x^2 = x^2$ (equivalente a $4x^2=0$)  

## Soluciones de ecuaciones cuadráticas

- $x=c$ es solución si, al sustituir en la ecuación, produce una identidad.
- Una cuadrática puede tener: dos soluciones reales, una solución real (doble) o ninguna solución real.

## Métodos para resolver

- **Factorización**
- **Completar el cuadrado**
- **Fórmula cuadrática**

## Teorema del Cero como Factor

- Si $p$ y $q$ son expresiones algebraicas, entonces
  $$pq=0 \iff p=0 \ \text{o bien}\ q=0.$$

## Método: Factorización

1) Escribir en forma estándar: $ax^2 + bx + c = 0$ con $a\neq 0$.  
2) Factorizar el trinomio: $(rx+p)(sx+q)=0$ con $rs=a$ y $pq=c$.  
3) Igualar cada factor a cero y resolver las resultantes lineales.

### Ejemplo A
Resolver $6x^2 + x - 12 = 0$.

- Factorizar: $(3x - 4)(2x + 3)=0$.
- Igualar factores a cero: $3x-4=0$ ó $2x+3=0$.
- Soluciones: $x=\dfrac{4}{3}$, $x=-\dfrac{3}{2}$.

### Ejemplo B
Resolver $2x(4x+15)=27$.

- Expandir y escribir estándar: $8x^2 + 30x - 27 = 0$.
- Factorizar: $(4x - 3)(2x + 9)=0$.
- Soluciones: $x=\dfrac{3}{4}$, $x=-\dfrac{9}{2}$.

## Fórmula cuadrática y discriminante

- Para $ax^2 + bx + c = 0$ con $a\neq 0$:
  $$x = \frac{-b \pm \sqrt{\,b^2 - 4ac\,}}{2a}.$$
- **Discriminante:** $\Delta = b^2 - 4ac$.
  - $\Delta > 0$: dos raíces reales distintas.
  - $\Delta = 0$: una raíz real de multiplicidad dos.
  - $\Delta < 0$: no tiene raíces reales.

### Ejemplo C (fórmula cuadrática)
Resolver $x^2 - x - 2 = 0$.

- $a=1$, $b=-1$, $c=-2$.  
- Discriminante: $\Delta = (-1)^2 - 4(1)(-2) = 1 + 8 = 9$.
- Sustituir: $x = \dfrac{-(-1) \pm \sqrt{9}}{2(1)} = \dfrac{1 \pm 3}{2}$.
- Soluciones: $x=2$, $x=-1$.

### Ejemplo D (racional que lleva a cuadrática)
Resolver $\dfrac{5x}{x^2 + 9} = -1$.

- Multiplicar ambos lados por $x^2+9$: $5x = -(x^2+9)$.
- Escribir estándar: $x^2 + 5x + 9 = 0$.
- Discriminante: $\Delta = 5^2 - 4(1)(9) = 25 - 36 = -11 < 0$.
- Conclusión: no hay soluciones reales.
