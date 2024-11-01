// Asegúrate de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    alert("ESTE ES MI MUNDO!!");
    const nombre = prompt("Cómo te llamas?");
    alert("Hola " + nombre + "! Bienvenido a mi portfolio!");

    // Script para generar frase aleatoria
    const frases = [
        "El conocimiento es poder.",
        "La curiosidad es la clave del aprendizaje.",
        "Cada día es una nueva oportunidad para aprender.",
        "La educación es la mejor inversión.",
        "El aprendizaje nunca se detiene."
    ];

    const btnGenerar = document.getElementById('btn-generar');
    const fraseElemento = document.getElementById('frase');

    btnGenerar.addEventListener('click', () => {
        const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
        fraseElemento.textContent = fraseAleatoria;
    });
});


    