//Representa o corpo do site. O eventListener fica escutando eperando algo acontecer.
//O evento esperado é o keyup (significa quando aperta uma tecla e solva
document.body.addEventListener('keyup', (event)=>{ )
   //quando clica em uma tecla executa a função playSound para tocar o som
playSound( event.code.toLowerCase());
}); //represnta todo o corpo do site

// fica observando o botão e quando alguém clica faz a execução
document.querySelector('.composer button').addEventListener('click', () =>{
   //variavel song criada. Pega o id input e registra os dados
   let song = document.querySelector('#input').value;
   
   if (song !== '') { // se song é diferente de vazio
      let songArray = song.split(''); // transforme em um array
      playComposition(songArray); //manda o array para a função playComposition
   }
});
//Função: toca o som
function playSound(sound) {
   //Variavel audioElement criada. Seleciona o id dinamicamente através do template string #s_${sound}
   let audioElement = document.querySelector(`#s_${sound}`);
   //Variavel keyElement criada. Seleciona a div com o template string `div[data-key="${sound}"]` 
   let keyElement = document.querySelector(`div[data-key="${sound}"]`);

   if(audioElement){
      audioElement.currentTime = 0; //serve para pegar o ponteiro e voltar para o começo
      audioElement.play();//serve para tocar o audio
   }
   //se encontrar o elemento adicione a class active
   if(keyElement){
      keyElement.classList.add('active');
      //Função que tem dois parâmetros: executa a remoção da classe active após 300 milisegundos
      setTimeout(()=>{
         keyElement.classList.remove('active');
      }, 300);
   }
}
//Função composição. Serve para pegar as letras digitadas no input e tocar quando se clica no botao tocar
function playComposition(songArray){
   let wait = 0;

   for(let songItem of songArray){ // Dando um loop no array, para agendar o tempo entre um som e outro
      setTimeout(()=>{
         playSound(`key${songItem}`); //pega a tecla e manda o som
      }, wait); //espera

      wait += 250; //espera e adiciona no loop 250 milisegundos
   }
}