function sumar(acumulado, valor) {
    return new Promise(function(resolve, reject){
        if(valor == 2) return reject("los números 2 son de mala suerte")
        let suma;
        setTimeout(function () {
            suma =  acumulado +  valor;
            resolve(suma);
        }, 1000);
    });
};

// mew promise para ejecutar en el momento requerido y no anidar en el llamado, resive "resolve" (para imprimir el resultado) y "reject" (para evaluar resultado) PARA SABER SI SE EJECUTA O NO.
//setTimeout funcion para demorar (function (){ }, en milisegundos);

let acumulado = 0;

//lamando asincrono 

sumar(acumulado, 4)
.then(function(suma){
    return sumar(suma, 4);
})
.then(function(suma){
    return sumar(suma, 2);
})
.then(function(suma){
    console.log(suma);
})
.catch(function(error){
    console.log(error);
})

// .then para llamar la funcion promise  y se repite en caso de querer sumar la acumulaciones.
// .catch imprime el error sin necesidad del try.

console.log("Estoy al final");


// consola ctrl ñ  
//  node .\promesas.js