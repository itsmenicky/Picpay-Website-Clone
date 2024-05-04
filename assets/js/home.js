let enderecourl = 'https://go-wash-api.onrender.com/api/auth/address';
let username_header = document.getElementById('username-header');
let username_card = document.getElementById('username-card');
async function endereco(){
    
    let tokenUser = JSON.parse(localStorage.getItem("user")).access_token;

    let resposta = fetch(url, {
        method:"GET",
        headers:{
            "Authorization": "Bearer "+tokenUser
        }
    })

    let respostaApi = await resposta.json();
    console.log(respostaApi)
}

function setUsername(){
    let item = localStorage.getItem('user');
    let user = JSON.parse(item)
    username_header.textContent = `Olá ${user.user.name}!`
    username_card.textContent = user.user.name
}

setUsername()
endereco()