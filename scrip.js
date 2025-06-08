function alterarTexto() {
    document.getElementById("titulo").innerText = "Texto Alterado!";
    document.getElementById("titulo").classList.add("destaque");
    }

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

 
  const usuarioCadastrado = {
    email: 'teste@exemplo.com',
    senha: '1234'
  };

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailDigitado = document.getElementById('email').value;
    const senhaDigitada = document.getElementById('senha').value;

   
    if (emailDigitado === usuarioCadastrado.email && senhaDigitada === usuarioCadastrado.senha) {
      alert('Login bem-sucedido!');
     window.location.href='pagina-principal.html';
    } else {
      alert('E-mail ou senha inválidos.');
    }
  });
});
