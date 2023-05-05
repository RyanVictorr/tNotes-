function acao() {
  let modal= document.querySelector('.modal')
   modal.style.display="block";
    
}
function fechar(){
    let modal= document.querySelector('.modal')
   modal.style.display="none";
}
let novaTarefa = document.querySelector('novaTarefa');
let btnAddTarefa = document.querySelector('btnAddTarefa');
let lisTarefa = document.querySelector('listaTarefa');

novaTarefa.addEventListener('keypress', (e)=>{if(e.keycode==13){
   let tarefa ={nome: novaTarefa.ariaValueMax, id}
}})
function gerarId(){
   return Math.floar(Math.random)
}