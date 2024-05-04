let enderecourl = 'https://go-wash-api.onrender.com/api/auth/address';
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

endereco()