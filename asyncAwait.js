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

// lamado con asignacion funcion tipo async y llamada main.

async function main() {
  let acumulado = 0;
  try{
    acumulado = await sumar(acumulado, 4);
    acumulado = await sumar(acumulado, 4);
    acumulado = await sumar(acumulado, 2);
  } catch(error){
    console.log(error);
  } 
  
  console.log(acumulado); 
};

// try catch para manejar la excepción y no explotar el código.
// await espera la acción.

main();

// necesario llamar a la función para ejecutarla.

console.log("Estoy al final");


// consola ctrl ñ  
//  node .\asyncAwait.js
