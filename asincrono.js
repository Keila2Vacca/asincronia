function sumar(acumulado, valor, callback) {
    let suma;
    setTimeout(function () {
        suma =  acumulado +  valor;
        callback(suma);
    }, 1000);
}

// callback funcion para ejecutar una vez se haya cumplido la suma  y determinar el tiempo de demora.
//setTimeout funcion para demorar (function (){ }, en milisegundos);

let acumulado = 0;

//lamando asincrono 

sumar(acumulado, 4, function (suma) {
    sumar(suma, 4, function (suma){
        sumar(suma, 2, function(suma){
            console.log(suma); 
        }); 
    });
});

// para lamar y sumar varias veces se mete la el mismo llamado dentro del principal, per recibiendo la suma anterior para poder acumularlo.

console.log("Estoy al final");


// consola ctrl ñ  
//  node asincrono.js