let listaTarefa; // Torna listaTarefa uma variável global

function acao() {
  let modal = document.querySelector('.modal');
  modal.style.display = "block";

  const novaTarefa = document.querySelector('.novaTarefa');
  const btnAddTarefa = document.querySelector('.btnAddTarefa');
  listaTarefa = document.querySelector('.divright'); // Atribui valor à variável global

  btnAddTarefa.addEventListener('click', (e) => {
    let tarefa = {
      nome: novaTarefa.value,
      id: gerarId()
    }
    adicionarTarefa(tarefa);
  });

  document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {

    }
  });

  function gerarId() {
    return Math.floor(Math.random() * 3000);
  }

  function adicionarTarefa(tarefa) {
   
    let li = criarTagLI(tarefa);
    
    listaTarefa.appendChild(li);
    novaTarefa.value = '';
  }

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
    btnEditar.setAttribute('onclick', 'editar(' + tarefa.id + ')');
    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnAcao2');
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
    btnExcluir.setAttribute('onclick', 'excluir(' + tarefa.id + ')');
    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);
    return li;
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
