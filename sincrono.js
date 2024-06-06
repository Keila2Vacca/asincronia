function sumar(acumulado, valor) {
    const suma =  acumulado +  valor;
    return suma;
}

let acumulado = 0;

//lamando sincrono 

acumulado = sumar(acumulado, 4);
acumulado = sumar(acumulado, 4);
acumulado = sumar(acumulado, 4);

console.log(acumulado);

// consola ctrl ñ  
//  node .\sincrono.js