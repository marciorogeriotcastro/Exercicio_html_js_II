const form = document.getElementById('form-valores');

function validaValor(valorDosCampos){
    const valorComoArray = valorDosCampos.split('');
    return valorComoArray.length > valorDosCampos
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const valorA = document.getElementById('campoA').value
    const valorB = document.getElementById('campoB').value

    function comparaValor(valorA, valorB) {
        
        if (valorA === valorB) {
            alert ("Erro valor 1 é igula a valor 2!");
        } else if (valorA > valorB) {
            alert (" Erro valor 1 é maior que valor 2!");
        } else {
            alert ("Tudo certo valor 2 maior que valor 1!")
        }
 }
     formEValido = comparaValor(valorA, valorB)
     campoA.value = '';
     campoB.value = '';
    
});


 

