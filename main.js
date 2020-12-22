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
function showAbout() {
    notice(
        `<p    style= "font-family: monospace;
        font-size: small;
        line-height: 2;">This website was created to Help students in selecting the Society / club which'll help them to prosper.
        But back-stage it's also helping existing  members to induct more talent in their group by
        highlighting Benefits of their club/society.<br>
        this webpage was initiated by a hackathon named "codigo" and since then there are peoples continuously trying 
        to make it more usefull to to visitors. <br>
        <i>All pictures,info used here belong to respective group, we encourage club/society maintiners to ask us for edits<br></i></p>`
    )
}