let listaTarefa; // Torna listaTarefa uma variável global

// JavaScript (script.js)

window.addEventListener('DOMContentLoaded', function() {
  carregarTarefas();
});

function carregarTarefas() {
  const tasksList = document.querySelector('.tasks-list');

  // Dados de exemplo - Substitua pelos dados reais das tarefas
  const tarefas = [
    { nome: 'qa', dataFim: '30/06/2023' },
    { nome: 'Tarefa 2', dataFim: '15/07/2023' },
    { nome: 'Tarefa 3', dataFim: '10/08/2023' }
    // Adicione mais tarefas, se necessário
  ];

  // Limpa a lista de tarefas
  tasksList.innerHTML = '';

  // Adiciona as tarefas à lista
  tarefas.forEach(function(tarefa) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
      <div class="task-content">
        <span class="task-name">${tarefa.nome}</span>
        <span class="task-deadline">Prazo: ${tarefa.dataFim}</span>
      </div>
    `;
    tasksList.appendChild(li);
  });
}

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



function adicionarTarefa() {
  let novaTarefa = document.querySelector('.novaTarefa');
  let descricaoTarefa = document.querySelector('.descricaoTarefa');
  
  let dataFim = document.querySelector('.dataFim');

  let tarefa = {
    nome: novaTarefa.value,
    descricao: descricaoTarefa.value,
    id: gerarId(),
    
    dataFim: dataFim.value,
    concluida: false  // Nova propriedade para marcar se a tarefa foi concluída
  };

  let li = criarTagLI(tarefa);

  listaTarefa.appendChild(li);
  novaTarefa.value = '';
  descricaoTarefa.value = ''; // Limpa o campo de descrição
}

function criarTagLI(tarefa) {
  
  let li = document.createElement('li');
  li.id = tarefa.id;

  
  

  let span = document.createElement('span');
  span.innerHTML = `
    <strong style="margin-left: 40px;">${tarefa.nome}</strong> 
  `;
  if (tarefa.concluida) {
    li.classList.add('completed');
    checkbox.checked = true;
  }

  let div = document.createElement('div');
  let btnDetalhes = document.createElement('button');
  btnDetalhes.classList.add('btnAcao');
  btnDetalhes.innerHTML = '<i class="fa fa-eye"></i>';
  btnDetalhes.addEventListener('click', function () {
    exibirDetalhes(tarefa);
  });

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

  div.appendChild(btnDetalhes);
  div.appendChild(btnEditar);
  div.appendChild(btnExcluir);

  
  li.appendChild(span);
  li.appendChild(div);

  return li;
}

function exibirDetalhes(tarefa) {
  // Atualize os elementos da modal de detalhes com os detalhes da tarefa
  const nomeTarefaModal = document.querySelector('.nomeTarefa');
  const descricaoTarefaModal = document.querySelector('.descricaoTarefaModal');
  const dataFimTarefa = document.querySelector('.dataFimTarefa');

  nomeTarefaModal.textContent = tarefa.nome;
  descricaoTarefaModal.textContent = tarefa.descricao;
  dataFimTarefa.textContent = `Agendado para: ${tarefa.dataFim}`;

  // Exibir a modal de detalhes
  let modalDetalhes = document.querySelector('.modal-detalhes');
  modalDetalhes.style.display = 'block';
  document.addEventListener('click', function (event) {
    
  });
  
}
function fecharDetalhes() {
  const modalDetalhes = document.querySelector('.modal-detalhes');
  modalDetalhes.style.display = 'none';
}

document.addEventListener('click', function (event) {
  const modalDetalhes = document.querySelector('.modal-detalhes');
  if (event.target === modalDetalhes) {
    fecharDetalhes();
  }
});
function marcarConcluida(idTarefa, concluida) {
  let li = document.getElementById('' + idTarefa + '');
  if (li) {
    if (concluida) {
      li.classList.add('completed');
    } else {
      li.classList.remove('completed');
    }
  }
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
