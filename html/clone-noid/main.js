
// custom  selector
// const cl= console.log.bind(console);
// const select = document.querySelector.bind(document);
function cl(value) {
    return console.log(value);
}

function select (selector) {
    return document.querySelector(selector)

}
// <!-- ======================================{here}============================================================== -->
//function fullpage
const fullpage =select('.content-panel-left');
cl('bangsatt')

fullpage.addEventListener('click', ()=> {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();

    }else{
            document.exitFullscreen();
    }
    
});




//fungsi onscroll => refactor pindahkan css ke file global

window.onscroll = function() {
    scrollFunction()
}

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        select('.navbar').style.backgroundColor = '#121e6e73'

    }else {
        select('.navbar').style.backgroundColor = 'transparent'
    }
}