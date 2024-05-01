let url = 'https://go-wash-api.onrender.com/api/auth/address';
async function endereco(){

    let token = JSON.parse(localStorage.getItem('user')).access_token;
    let respostaApi = fetch(url,{
        method: "GET",
        headers:{
            "Authorization": "Bearer "+localStorage.getItem('user')
        }
    })
}

endereco();