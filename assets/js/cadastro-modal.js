modal = document.getElementById("cadastro");
blurEffect = document.getElementById("overlay");
closeIcon = document.getElementById("close-modal");

function openModal(){
    modal.style.display = "block";
    blurEffect.style.display = "inherit";
}

function closeModal(){
    modal.style.display = "none";
    blurEffect.style.display = "none";
}