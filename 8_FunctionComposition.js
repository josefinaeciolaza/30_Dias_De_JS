// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

// You may assume each function in the array accepts one integer as input and returns one integer as output.

//Explicación: El objetivo principal de la composición de funciones es tomar un valor de entrada (x en este caso) y pasar ese valor a través de una serie de funciones, una tras otra, para obtener el resultado final.
// Cada función en la serie toma el resultado de la función anterior como entrada.

var compose = function(functions) {
	return function(x) {
    let result = x;
    for(let i = functions.length - 1; i >= 0; i--) { //lo hacemos de derecha a izquierda:
                                                    // Supongamos que tenemos tres funciones: f(x), g(x), y h(x).
                                                    // (es decir, f3(f2(f1(x)))).
      const currentFunction = functions[i]
      result = currentFunction(result);
    }
      return result;  
    }
};