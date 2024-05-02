modal = document.getElementById("cadastro");
blurEffect = document.getElementById("overlay");
closeIcon = document.getElementById("close-modal");

function abrirPainel(){
    modal.style.display = "block";
    blurEffect.style.display = "inherit";
    document.body.style = "overflow-y: hidden;"
}

function fecharPainel(){
    modal.style.display = "none";
    blurEffect.style.display = "none";
    document.body.style = "overflow-y: auto;"
}