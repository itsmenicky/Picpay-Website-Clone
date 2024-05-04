async function cadastrarEndereco(){
    let url= 'https://go-wash-api.onrender.com/api/auth/address';

    let Nome = document.getElementById("nome_da_rua_cadastro").value;
    let cep = document.getElementById("cep_cadastro").value;
    let endereco = document.getElementById("endereco_cadastro").value;
    let numero = document.getElementById("numero_rua_cadastro").value;

    let user = localStorage.getItem('user');
    let token = JSON.parse(user).access_token;

    let ApiEndereco =  await fetch( url,{
        method:"POST",
        body:JSON.stringify({
            "title":titulo.value,
            "cep": cep.value,
            "address": endereco.value,
            "number": numero.value,
            "complement": ""
        }),
        headers:{
            'Content-Type': 'application/json',
            "Authorization": "Bearer "+token

        }
    });

}