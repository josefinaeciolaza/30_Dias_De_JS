// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

var map = function(arr, fn) {
    let newArr = []; //nuevo array
    for(let i = 0; i < arr.length; i++){ //usamos un bucle for para iterar a través de cada elemento del arreglo 'arr'
        newArr[i] = fn(arr[i], i); //Llamamos a la función 'fn' pasando el elemento y el índice actual. Ademas guardamos todo en el nuevo Array
    }
    return newArr;
};