const form = document.getElementById('form-sorteio');
const resultado = document.getElementById('numero-sorteado');
document.addEventListener('DOMContentLoaded', function () {
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita o envio do formulário
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);
        let numeroSorteado = Math.random() * numeroMaximo;
       resultado.innerText=Math.floor(numeroSorteado+1)
        console.log(Math.round(numeroSorteado));
        document.querySelector('.resultado').style.display='block'
    }
    )
})