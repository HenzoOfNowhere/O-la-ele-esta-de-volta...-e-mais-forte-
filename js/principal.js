var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');
for (let i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];
    var peso = paciente.querySelector('.info-peso').textContent;
    var altura = paciente.querySelector('.info-altura').textContent;
    var imc = peso / Math.pow(altura, 2);
    imc = parseFloat(imc.toFixed(3));
    paciente.querySelector('.info-imc').textContent = imc;
}