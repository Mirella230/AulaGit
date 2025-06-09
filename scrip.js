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

const clientes = [
      {
        nome: "João Silva",
        endereco: "Rua das Flores, 123",
        dataNascimento: "1985-03-15",
        cpf: "123.456.789-00"
      },
      {
        nome: "Maria Oliveira",
        endereco: "Avenida Brasil, 456",
        dataNascimento: "1990-07-22",
        cpf: "987.654.321-11"
      },
      {
        nome: "Carlos Souza",
        endereco: "Travessa da Paz, 789",
        dataNascimento: "1978-12-03",
        cpf: "321.654.987-22"
      }
    ];

    const tbody = document.querySelector("#tabela-clientes tbody");
    const listarBtn = document.getElementById("listar-btn");

    listarBtn.addEventListener("click", function () {
      
      tbody.innerHTML = "";

      clientes.forEach(cliente => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${cliente.nome}</td>
          <td>${cliente.endereco}</td>
          <td>${cliente.dataNascimento}</td>
          <td>${cliente.cpf}</td>
        `;

        tbody.appendChild(row);
      });
    });
