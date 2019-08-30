 /*let btnDo = document.getElementById('btnDO');
 btnDo.addEventListener('click', PlaySound );

 function PlaySound(){
     let ctrlAudio = document.getElementById('AudioNota');
     ctrlAudio.pause();
     ctrlAudio.currentTime = 0;
     ctrlAudio.play();
 }
 */

 //-----------------
 // CÓDIGO VERSION 2
 //------------------

 let botones = document.querySelectorAll('button');
 console.log ( botones );

/* botones.forEach( function ( button) {
        button.addEventListener('click', PlaySound );
 });
*/
 botones.forEach( 
     button => button.addEventListener('click', PlaySound )
);


// La funcion recibe información del evento que estoy disparando en la variable EVENT
 function PlaySound( event ){
     let button = event.target;
     let note   = button.dataset.note;
     //let ctrlAudio = document.getElementById('Nota'+note);
     let ctrlAudio = document.getElementById(`Nota${note}`);
    ctrlAudio.pause();
    ctrlAudio.currentTime = 0;
    ctrlAudio.play();
}

// detectar la pulsación de teclas a nivel de documento 
document.addEventListener('keydown', event => {
   let key = event.key;
   let button = document.querySelector(`button[data-key= "${key}"]`);
   if ( button )
        button.click();
});