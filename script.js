const bar = document.getElementById('bar');
const close =document.getElementById('close');
const nav = document.getElementById('navbar');
// check if the sidebar is open or not
if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}
// function to make close icon clickable
if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

