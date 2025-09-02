//calculadora IMC
//1. Crear una funcion que calcule el indice de masa corporal.
//2. Debe recibir peso(en KG) y altura(en metros). 
//3. Debe retornar el IMC y una categoria(bajo peso, normal, sobrepeso, etc).
//4. Usa tipos especificos para los parametros y el entorno.
function calcularIMC(peso, altura) {
    var imc = Number(peso / (altura * altura));
    var categoria;
    //Determinar categoria usando if/else
    if (imc < 18.5) {
        categoria = "Bajo peso";
    }
    else if (imc >= 18.5 && imc < 25) {
        categoria = "Normal";
    }
    else if (imc >= 25 && imc < 30) {
        categoria = "Sobrepeso";
    }
    else {
        categoria = "Obesidad";
    }
    return {
        imc: imc,
        categoria: categoria
    };
}
var resultado = calcularIMC(70, 1.75);
console.log(resultado.imc);
console.log(resultado.categoria);
