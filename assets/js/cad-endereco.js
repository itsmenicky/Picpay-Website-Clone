async function CadastrarEndereco(){
    const url= "https://go-wash-api.onrender.com/api/auth/address";

    let Nome = document.getElementById("nome").value;
    let cep = document.getElementById("cep").value;
    let enderco = document.getElementById("enderco").value;
    let numero = document.getElementById("numero").value;

    let user = localStorage.getItem('user');
    let token = JSON.parse(user).access_token;

    let ApiEndereco =  await fetch( url,{
        method:"POST",
        body:JSON.stringify({
            "title":titulo,
            "cep": cep,
            "address": enderco,
            "number": numero,
            "complement": ""
        }),
        headers:{
            'Content-Type': 'application/json',
            "Authorization": "Bearer "+token

        }
    });

    let response = await ApiEndereco.json();

    window.location.href="home.html"


}