// const audio = document.getElementsByTagName('audio')

// audio.forEach(element => {
//     element.
// });
// console.log(audio);
window.addEventListener('keydown', keyDown)
function keyDown(e){
    let key;
    if(typeof e == "string"){
        key = e
    }else{
        key = e.keyCode
    }
    const audio = document.querySelector(`Audio[data-key = '${key}']`)
    if(!audio) return // to stop the function to execute 
    
    audio.currentTime = 0;
    audio.play() 

    const classes = document.querySelector(`.btn[data-key="${key}"]`)
    classes.classList.toggle('btn-actv')
}

const btns = document.getElementsByClassName('btn')

for(let i = 0 ; i < btns.length; i++){
    btns[i].addEventListener('click', function () {
        keyClick(i)    
    })
    btns[i].addEventListener('transitionend', function (e) {
        removeClass(e, i)
    })
}

function keyClick(i){
    const key = btns[i].getAttribute('data-key')
    keyDown(key)
}

function removeClass(e, i) { 
    console.log(e);
    if(e.propertyName !== 'transform') return
    
        btns[i].classList.remove('btn-actv')
    
}