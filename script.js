
function gerarTabuada() {
    const compNumero = document.getElementById('numero');
    let numero = compNumero.value;

    if (numero == ""){
        alert('Informe um número');
        compNumero.focus();
        return false;

    }
    else {
        numero = parseInt(numero);

    }
    if (numero < 1 || numero > 100) {
        alert('Informe um número entre 1 e 100');
        compNumero.focus();
        return false;
    }
     const compResultado = document.getElementById('resultado');
     compResultado.innerHTML = "";
    for(let i = 1; i <=10; i++ ){
       compResultado.innerHTML += 
        '<p>' + i + 'x' + numero + '=' + (i*numero) + ' </p>';
    }
}
