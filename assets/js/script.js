$(document).ready(() => {

    $('section').load('pages/home.html')
    $('#menuHome').addClass('active')

    function clearClass() {
        $('#menuHome').removeClass('active')
        $('#menuSobre').removeClass('active')
        $('#menuProdutos').removeClass('active')
        $('#menuContato').removeClass('active')

    }

    $('#menuHome').click(() => {
        clearClass()
        $('#menuHome').addClass('active')
        $('section').load('pages/home.html')
    })

    $('#menuSobre').click(() => {
        clearClass()
        $('#menuSobre').addClass('active')
        $('section').load('pages/sobre.html')
    })

    $('#menuProdutos').click(() => {
        clearClass()
        $('#menuProdutos').addClass('active')
        $('section').load('pages/produtos.html')
    })

    $('#menuContato').click(() => {
        clearClass()
        $('#menuContato').addClass('active')
        $('section').load('pages/contato.html')
    })

})

function login() {

    var senhaCorreta = 'diogo123'
    var senhaDigitada = ' ';
    var contador = 1;

    var usuario = prompt('Nome de usuário: ')
    while (senhaDigitada != senhaCorreta && contador <= 3) {
        senhaDigitada = prompt('Senha: ')
        contador = contador + 1;
    } if (senhaDigitada == senhaCorreta) {
        alert(`Bem vindo a VolcanoWheels ${usuario}!`)
    } else {
        alert("Senha incorreta. Tente novamente!")
    }



}

