# Ecuaciones Lineales en Dos Variables

Una ecuación lineal en dos variables es una ecuación que se puede escribir en la forma $Ax + By = C$, donde A, B y C son constantes y A y B no son ambos cero.

## Soluciones de Ecuaciones Lineales en Dos Variables

En el caso de una ecuación lineal con dos variables, las soluciones son pares ordenados de números $(x, y)$ que se pueden representar como puntos en el sistema de coordenadas. Las ecuaciones lineales con dos variables, en general, tienen un número infinito de soluciones. Para obtener soluciones, se elige un valor para una de las variables, se sustituye en la ecuación y luego se obtiene el valor de la otra variable.

### Ejemplo

Dada la ecuación $2x + 3y = 6$:

1.  **Obtenga algunas soluciones.**
2.  **Grafique la ecuación.**

**Solución:**

1.  Tomando el valor $x = 0$. Reemplazando en la ecuación se obtiene:
    $2(0) + 3y = 6$
    $0 + 3y = 6$
    $y = 2$
    Por lo tanto una solución (o punto si lo ubicamos en el plano) es $(0, 2)$.

    Tomando otro valor $x = 3$. Reemplazando en la ecuación se obtiene:
    $2(3) + 3y = 6$
    $6 + 3y = 6$
    $y = 0$
    Por lo tanto otra solución (o punto si lo ubicamos en el plano) es $(3, 0)$.

2.  De la primera parte, se obtuvieron las soluciones $(0, 2)$ y $(3, 0)$. Para facilitar este proceso, se puede seguir un proceso denominada tabulación de puntos, donde se obtienen más soluciones y éstas se van colocando en formato de tabla para facilitar el acopio de datos. Que para este ejemplo quedaría como:

| x | y |
| :--- | :--- |
| -3 | 4 |
| 0 | 2 |
| 3 | 0 |
| 6 | -2 |
| 9 | -4 |

A partir de esta tabulación de puntos se produce la gráfica, ubicando los puntos y pasando una línea recta por encima de ellos:

*Figura: Gráfica de la ecuación 2x + 3y = 6, que es una línea recta que pasa a través de los puntos mencionados en la tabla.*

## Gráfica de una Ecuación Lineal con Dos Variables

La gráfica de cualquier ecuación lineal con dos variables es una recta. Para encontrar esta gráfica se obtienen al menos dos soluciones, se grafican como puntos sobre el plano de coordenadas y luego se traza una línea recta que pase sobre los puntos encontrados.

### Puntos de Intersección

*   **Puntos de intersección x:** Las coordenadas x de los puntos donde la gráfica de una ecuación interseca al eje x.
    *   Haga $y = 0$ y despeje x.
*   **Puntos de intersección y:** Las coordenadas y de los puntos donde la gráfica de una ecuación interseca al eje y.
    *   Haga $x = 0$ y despeje y.

## Pendiente de una Recta

La pendiente de una recta es una medida de su inclinación. Para medir la inclinación de una recta no vertical usaremos la razón del cambio vertical al cambio horizontal, al movernos de un punto de la recta a otro.

Si una recta no vertical pasa por los puntos $(x_1, y_1)$ y $(x_2, y_2)$, entonces la razón del cambio vertical al cambio horizontal al movernos del punto $(x_1, y_1)$ al punto $(x_2, y_2)$ está dada por:

$$ m = \frac{\text{cambio vertical}}{\text{cambio horizontal}} = \frac{y_2 - y_1}{x_2 - x_1} $$

### Pendiente de una Recta no Vertical

La pendiente $m$ de una recta no vertical que pasa por los puntos $(x_1, y_1)$ y $(x_2, y_2)$ es:

$$ m = \frac{y_2 - y_1}{x_2 - x_1} $$

**Observación:** Dado que la recta no es vertical, $x_1 \neq x_2$ y por lo tanto, $x_2 - x_1 \neq 0$.

### Pendiente de una Recta Horizontal

Dados dos puntos cualesquiera de una recta horizontal, sus coordenadas y son iguales. Si nos movemos de un punto de la recta a otro el cambio vertical es igual a cero. Por lo tanto, la pendiente de toda recta horizontal es 0.

$$ m = \frac{\text{cambio vertical}}{\text{cambio horizontal}} = \frac{0}{\text{cambio horizontal}} = 0 $$

### Pendiente de una Recta Vertical

Las coordenadas x de los puntos de una recta vertical son iguales. Si nos movemos de un punto de la recta a otro el cambio horizontal es 0. La división por cero no está definida, por lo tanto, decimos que la pendiente de una recta vertical **no está definida**.

$$ m = \frac{\text{cambio vertical}}{\text{cambio horizontal}} = \frac{\text{cambio vertical}}{0} $$

## Ecuaciones de Rectas

### Forma Punto-Pendiente

Suponga que conocemos la pendiente $m$ de una recta y un punto por donde pasa la recta, digamos $(x_1, y_1)$. Sea $(x, y)$ un punto cualquiera de la recta distinto de $(x_1, y_1)$. Usando la fórmula de la pendiente con los puntos $(x, y)$ y $(x_1, y_1)$ obtenemos que $\frac{y - y_1}{x - x_1} = m$. Ya que el punto $(x, y)$ es distinto de $(x_1, y_1)$ y están en la misma recta, tenemos que $x 
eq x_1$ y que $x - x_1 
eq 0$. Si multiplicamos por $x - x_1$ en ambos lados de la ecuación $\frac{y - y_1}{x - x_1} = m$ obtenemos la ecuación $y - y_1 = m(x - x_1)$. A esta forma de la ecuación de una recta la llamamos **ecuación punto-pendiente**.

### Forma Pendiente-Intersecto

Si usamos la fórmula punto-pendiente para obtener la ecuación de una recta que tiene pendiente $m$ y pasa por el punto $(0, b)$ (punto de intersección de la recta con el eje y) obtenemos lo siguiente:

$y - b = m(x - 0)$
$y - b = mx$
$y = mx + b$

A la ecuación $y = mx + b$ se la conoce como **forma pendiente-intersecto en y** de la ecuación de una recta.

### Ecuación de una Recta Vertical

Es suficiente con conocer un punto por donde pasa una recta vertical para hallar una ecuación. Si una recta vertical pasa por el punto $(a, b)$, entonces $x = a$ es una ecuación de la recta.

### Ecuación de una Recta Horizontal

Al igual que con rectas verticales, es suficiente con conocer un punto por donde pasa una recta horizontal para hallar una ecuación de la recta. Si una recta horizontal pasa por el punto $(a, b)$, entonces $y = b$ es una ecuación de la recta.