//listening for the key
window.addEventListener('keydown', function (e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);//getting the audio element by the keycode of the event
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);//getting the exact div element
    if(!audio) return; //stop the function if there is no audio for that code
    audio.currentTime = 0; //rewind to the start so we can spam a key
    audio.play();

    key.classList.add('playing');//adding the "animation"
});

function removeTransition(e){
    if(e.propertyName !== 'transform') return;//return early if the event is not a transform

    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))//every time a transition in the keys end calls the function