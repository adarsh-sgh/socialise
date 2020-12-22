const overlay=document.querySelector('.overlay')
nt=document.getElementById('notice')
let timeout
function notice(message,time=false) {
    overlay.style.display='flex';
    nt.innerHTML=message;
    if (time) {
        if (typeof(timeout)) {
            clearTimeout(timeout)
        }
        setTimeout(
            ()=>{
                fade()
            },time
        )
    }
};
function dismiss(){
overlay.style.display='none';
}
function fade(selector='.overlay') {
    element=document.querySelector(selector);
    if(element.style.opacity&&element.style.opacity<.1){
        element.style.display='none';
        element.style.opacity=1;
        return
    }
    element.style.opacity=(element.style.opacity||1)/1.08;
    setTimeout(()=> fade(selector),20)
}
