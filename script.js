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
   
  });
}
function obterDataAtual() {
  let data = new Date();
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

function obterHorarioAtual() {
  let data = new Date();
  let horas = data.getHours();
  let minutos = data.getMinutes();
  return `${horas}:${minutos}`;
}

function adicionarTarefa() {
  let novaTarefa = document.querySelector('.novaTarefa');
  let tarefa = {
    nome: novaTarefa.value,
    id: gerarId(),
    data: obterDataAtual(),
    horario: obterHorarioAtual()
  }
  let li = criarTagLI(tarefa);

  listaTarefa.appendChild(li);
  novaTarefa.value = '';
}


function criarTagLI(tarefa) {
  let li = document.createElement('li');
  li.id = tarefa.id;
  let span = document.createElement('span')
  span.classList.add('textoTarefa');
span.innerHTML = `<strong>Tarefa:</strong> ${tarefa.nome}<br><strong>Data:</strong> ${tarefa.data}<br><strong>Horário:</strong> ${tarefa.horario}`;


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
