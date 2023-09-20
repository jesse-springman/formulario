
const enviar = document.getElementById('enviar');


enviar.addEventListener('click', ()=>{
    const campos = document.querySelectorAll('.input');


   const mensagemErro = document.querySelectorAll('.nao-preenchido')


   campos.forEach(function(item, indice){

        if(item.value === ""){
        
       item.classList.add('borda-red');
       item.classList.remove('borda-green')
       mensagemErro[indice].classList.add('mostrar');
       }
   

       else{
        item.classList.add('borda-green');
        mensagemErro[indice].classList.remove('mostrar')
         }
       
      })
    })


