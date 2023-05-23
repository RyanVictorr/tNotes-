function acao() {
   let modal= document.querySelector('.modal')
    modal.style.display="block";

   const novaTarefa = document.querySelector('.novaTarefa');
   const btnAddTarefa = document.querySelector('.btnAddTarefa');
   const listaTarefa = document.querySelector('.divright');

 
 
 btnAddTarefa.addEventListener('click',(e)=>{
    let tarefa={
       nome:novaTarefa.value,
       id:gerarId()
    }
    adicionarTarefa(tarefa);
   
 });
   
 document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {

  }
});
 
 function gerarId(){
    return Math.floor(Math.random()*300);
 
 }
 function adicionarTarefa(tarefa){
    let li = criarTagLI(tarefa);
    listaTarefa.appendChild(li);
    novaTarefa.value='';
 }
 
 function criarTagLI(tarefa){
    let li=document.createElement('li');
    li.id=tarefa.id;
    let span = document.createElement('span')
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;
 
    let div = document.createElement('li');
    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcao');
    btnEditar.innerHTML='<i class="fa fa-pencil"></i>';
    btnEditar.setAttribute('onclick', 'editar('+tarefa.id+')');
    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnAcao2');
    btnExcluir.innerHTML= '<i class="fa fa-trash"></i>';
    btnExcluir.setAttribute('onclick', 'btnExcluir ('+tarefa.id+')');
 
    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);
    return li;
 }
 function editar(idTarefa){
   alert(idTarefa);
 }
 function excluir(idTarefa){
   let confirmacao = window.confirm('Tem certeza que deseja excluir?');
   if(confirmacao){
      let li = document.querySelector('#'+idTarefa+'');
      if(li){
         listaTarefa.removeChild(li);
      }
   }
 }

 
 }
 function fechar(){
   let modal= document.querySelector('.modal')
  modal.style.display="none";
}
