let listaTarefa; // Torna listaTarefa uma variável global

// JavaScript (script.js)

window.addEventListener('load', function() {
  carregarTarefas();
  document.getElementById("menu-icon").addEventListener("click", toggleMenu);
});

let menuAberto = false; // Variável para rastrear o estado do menu

function toggleMenu() {
  const divleft = document.querySelector(".divleft");
  
  // Verificar se o menu está aberto ou fechado
  if (menuAberto) {
    divleft.style.display = "none"; // Fechar o menu
  } else {
    divleft.style.display = "block"; // Abrir o menu
  }
  
  // Atualizar o estado do menu
  menuAberto = !menuAberto;
}


function carregarTarefas() {
  const tasksList = document.querySelector('.tasks-list');

  if (tasksList) {
    // Dados de exemplo - Substitua pelos dados reais das tarefas
    const tarefas = [
      { nome: 'Implementar Firebase', dataFim: '30/06/2023' },
      { nome: 'Pagar a conta de luz', dataFim: '10/08/2023' }
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

function pesquisarTarefas() {
  const keywordInput = document.getElementById('keyword-search');
  const keyword = keywordInput.value.toLowerCase();

  // Obtenha a lista de tarefas
  const listaTarefa = document.getElementById('listaTarefa');

  // Percorra todas as tarefas e verifique se a palavra-chave está presente
  const tarefas = Array.from(listaTarefa.children);
  tarefas.forEach(function (tarefa) {
    const nomeTarefa = tarefa.querySelector('strong').textContent.toLowerCase();
    const descricaoTarefa = tarefa.querySelector('.descricaoTarefa').textContent.toLowerCase();

    if (nomeTarefa.includes(keyword) || descricaoTarefa.includes(keyword)) {
      // Exiba a tarefa se a palavra-chave for encontrada
      tarefa.style.display = 'block';
    } else {
      // Oculte a tarefa se a palavra-chave não for encontrada
      tarefa.style.display = 'none';
    }
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
  let checkbox = document.createElement('input');
   checkbox.className = 'checkbox-tarefa'; 
checkbox.type = 'checkbox';
checkbox.addEventListener('change', function() {
  marcarConcluida(tarefa.id, this.checked);
});
li.appendChild(checkbox);
  

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
function marcarConcluida(idTarefa, concluida) {
  let tarefa = obterTarefaPorId(idTarefa);
  if (tarefa) {
    tarefa.concluida = concluida;
    if (concluida) {
      document.getElementById(idTarefa).classList.add('concluida');
    } else {
      document.getElementById(idTarefa).classList.remove('concluida');
    }
  }
}


function exibirDetalhes(tarefa) {
  // Atualize os elementos da modal de detalhes com os detalhes da tarefa
  const nomeTarefaModal = document.querySelector('.nomeTarefa');
  const descricaoTarefaModal = document.querySelector('.descricaoTarefaModal');
  const dataFimTarefa = document.querySelector('.dataFimTarefa');

  nomeTarefaModal.textContent = tarefa.nome;
  descricaoTarefaModal.textContent = tarefa.descricao;
  const dataFim = new Date(tarefa.dataFim);
  
  // Verifica se a conversão foi bem-sucedida
  if (!isNaN(dataFim.getTime())) {
    // Formata a data no formato desejado
    const dataFormatada = dataFim.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    dataFimTarefa.textContent = `Agendado para: ${dataFormatada}`;
  } else {
    dataFimTarefa.textContent = 'Data inválida';
  }
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

function editar(idTarefa) {
  let tarefa = obterTarefaPorId(idTarefa);
  if (tarefa) {
    let modalEditar = document.querySelector('.modal-editar');
    modalEditar.setAttribute('data-id', idTarefa);
    modalEditar.style.display = "block";
    let nomeEditar = document.getElementById('editar-nome');
    let descricaoEditar = document.getElementById('editar-descricao');
    let dataFimEditar = document.getElementById('editar-data-fim');

    nomeEditar.value = tarefa.nome;
    descricaoEditar.value = tarefa.descricao; // Preenche o campo de descrição com o valor da tarefa
    dataFimEditar.value = tarefa.dataFim;
  }
}
function salvarEdicao() {
  let idTarefaEditar = document.querySelector('.modal-editar').getAttribute('data-id');
  let nomeEditar = document.getElementById('editar-nome').value;
  let descricaoEditar = document.getElementById('editar-descricao').value;
  let dataFimEditar = document.getElementById('editar-data-fim').value; // Obtém o novo valor da data fim

  atualizarTarefa(idTarefaEditar, nomeEditar, descricaoEditar, dataFimEditar);

  let modalEditar = document.querySelector('.modal-editar');
  modalEditar.style.display = "none";
}


function atualizarTarefa(idTarefa, novoNome, novaDescricao, novaDataFim) {
  let tarefa = obterTarefaPorId(idTarefa);
  if (tarefa) {
    tarefa.nome = novoNome;
    tarefa.descricao = novaDescricao;
    tarefa.dataFim = novaDataFim; // Atualiza o valor da data fim da tarefa

    let span = document.getElementById(idTarefa).querySelector('span strong');
    span.textContent = novoNome;

    let descricaoTarefaModal = document.querySelector('.descricaoTarefaModal');
    descricaoTarefaModal.textContent = novaDescricao;

    let dataFimTarefa = document.querySelector('.dataFimTarefa');
    dataFimTarefa.textContent = `Agendado para: ${novaDataFim}`; // Atualiza a data fim na modal de detalhes
  }
}


function fecharEditar() {
  let modalEditar = document.querySelector('.modal-editar');
  modalEditar.style.display = "none";
}
function obterTarefaPorId(idTarefa) {
  let tarefas = Array.from(listaTarefa.children);
  let tarefaEncontrada = tarefas.find(function (tarefa) {
    return tarefa.id === idTarefa.toString();
  });
  if (tarefaEncontrada) {
    return {
      id: tarefaEncontrada.id,
      nome: tarefaEncontrada.querySelector('strong').textContent,
      // Obtenha os outros valores da tarefa aqui
      // ...
    };
  }
  return null;
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
