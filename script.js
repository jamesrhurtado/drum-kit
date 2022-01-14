window.addEventListener('keydown', function(e) {
    //select the audio according to the key pressed
    const audio = document.querySelector(`audio[data-key="${e.key}"]`)
    //select the key class
    const key = document.querySelector(`.key[data-key="${e.key}"]`)
    if(!audio){return}
    //allows to sound when pressing multiple times
    audio.currentTime = 0;
    audio.play()
    //adds the class playing
    key.classList.add('playing')
});

function removeTransition(e){
    //this is key because it was the last called
    if(e.propertyName != 'transform' ) return //skip if it is not transform
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
