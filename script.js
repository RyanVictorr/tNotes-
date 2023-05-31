let listaTarefa; // Torna listaTarefa uma variável global

window.addEventListener('DOMContentLoaded', function() {
  const btnAddTarefa = document.querySelector('.btnAddTarefa');
  btnAddTarefa.addEventListener('click', function () {
    adicionarTarefa();
  });
});

function acao() {
  let modal = document.querySelector('.modal');
  modal.style.display = "block";

  const novaTarefa = document.querySelector('.novaTarefa');
  listaTarefa = document.querySelector('.divright'); // Atribui valor à variável global
  novaTarefa.value = '';

  document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      adicionarTarefa();
    }
  });
}

function adicionarTarefa() {
  let novaTarefa = document.querySelector('.novaTarefa');
  let tarefa = {
    nome: novaTarefa.value,
    id: gerarId()
  }
  let li = criarTagLI(tarefa);

  listaTarefa.appendChild(li);
  novaTarefa.value = '';
}

// Resto do código permanece o mesmo

function criarTagLI(tarefa) {
  let li = document.createElement('li');
  li.id = tarefa.id;
  let span = document.createElement('span')
  span.classList.add('textoTarefa');
  span.innerHTML = tarefa.nome;

  let div = document.createElement('div');
  let btnEditar = document.createElement('button');
  btnEditar.classList.add('btnAcao');
  btnEditar.innerHTML = '<i class="fa fa-pencil"></i>';
  btnEditar.addEventListener('click', function () {
    editar(tarefa.id);
  });
  let btnExcluir = document.createElement('button');
  btnExcluir.classList.add('btnAcao2');
  btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
  btnExcluir.addEventListener('click', function () {
    excluir(tarefa.id);
  });
  div.appendChild(btnEditar);
  div.appendChild(btnExcluir);

  li.appendChild(span);
  li.appendChild(div);
  return li;
}

function editar(idTarefa) {
  alert(idTarefa);
}

function excluir(idTarefa) {
  let confirmacao = window.confirm('Tem certeza que deseja excluir?');
  if (confirmacao) {
    let li = document.getElementById('' + idTarefa + '');
    if (li && li.parentNode === listaTarefa) {
      listaTarefa.removeChild(li);
    }
  }
}

function fechar() {
  let modal = document.querySelector('.modal');
  modal.style.display = "none";
}

function gerarId() {
  return Math.floor(Math.random() * 3000);
}
