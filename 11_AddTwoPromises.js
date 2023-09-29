//Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
var addTwoPromises = async function(promise1, promise2) {
    //Resuelvo las dos promesas con Promise.all y las guardo a cada una en una variable, luego las sumo
    const [value1, value2] = await Promise.all([promise1, promise2]);
    return value1 + value2;
    };
