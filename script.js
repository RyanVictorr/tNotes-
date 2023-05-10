function acao() {
   let modal= document.querySelector('.modal')
    modal.style.display="block";

     let novaTarefa = document.querySelector('#novaTarefa');
 let btnAddTarefa = document.querySelector('#btnAddTarefa');
 let listaTarefa = document.querySelector('.content');
 
 novaTarefa.addEventListener('keypress', (e)=>{
    if(e.keycode==13){
    let tarefa ={
       nome: novaTarefa.value, 
       id:gerarId(),
    }
       adicionarTarefa(tarefa);
 }});
 
 
 btnAddTarefa.addEventListener('click',(e)=>{
    let tarefa={
       nome:novaTarefa.value,
       id:gerarId(),
    }
    adicionarTarefa(tarefa);
   
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
    let span = document.createElement('span')
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;
 
    let div = document.createElement('div');
    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcao');
    btnEditar.innerHTML='<i class="fa fa-pencil"></i>';
    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnAcao');
    btnExcluir.innerHTML='<i class="fa fa-trash"></i>';
 
    btnExcluir.addEventListener('click', () => {
    li.remove();
    }); 
    
    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);
    return li;
 }

     
 }
 function fechar(){
     let modal= document.querySelector('.modal')
    modal.style.display="none";
 }
