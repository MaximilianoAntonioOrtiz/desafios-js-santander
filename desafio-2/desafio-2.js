//Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo() {
    console.log("hola mundo");
}
/*Crear una función que reciba un nombre como parámetro y muestre
 "¡Hola, [nombre]!" en la consola.*/
let nombre = prompt("introduce tu nombre: ");
function holaPersonalizado() {
    console.log(`¡Hola, ${nombre}!`);
 }
/*Crear una función que reciba un número como parámetro y devuelva el doble de
ese número.*/
let numero = parseInt(prompt("introduce un numero: "));
function dobleDeUnNumero(numero) {
    return numero * 2;
}
console.log(dobleDeUnNumero(numero));
//Crear una función que reciba tres números como parámetros y devuelva su promedio.
let numero1 = parseFloat(prompt("Ingresa el primer numero"));
let numero2 = parseFloat(prompt("Ingresa el segundo numero"));
let numero3 = parseFloat(prompt("Ingrese el tercer numero"));
function promedioDeTres(numero1, numero2, numero3) {
    let promedio = (numero1 + numero2 + numero3) / 3;
    return promedio;
}
let promedio = promedioDeTres(numero1, numero2, numero3);
console.log(`el promedio de sumar ${numero1}, ${numero2}, ${numero3} es ${promedio}`);

/*Crear una función que reciba dos números como parámetros y devuelva el mayor
de ellos.*/
function mayorDeDosNumeros(numero1, numero2) {
    if (numero1 > numero2) {
        return `${numero1} es mayor que ${numero2}`;
    } else if (numero1 < numero2) {
        return `${numero2} es mayor que ${numero1}`;
    } else {
        return "los numeros son iguales";
    }
}
let mayor = mayorDeDosNumeros(numero1, numero2);
console.log(mayor);

/*Crear una función que reciba un número como parámetro y devuelva el resultado
de multiplicar ese número por sí mismo.*/
function numeroMultiplicado (numero1) {
    return numero1 * numero1;
}
let multiplicacion = numeroMultiplicado(numero1);
console.log(multiplicacion);