let form = document.querySelector('form');

form.onsubmit = function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;

    if (email === 'teste@teste.com' && password === 'teste') {
        window.location.href = "/planner.html";
    } else if (email == "" || password == "") {
        alert('Preencha todos os campos');
    } else {
        alert('Email ou senha inválidos');
    }

    // window.location.href = "/planner.html";
}
