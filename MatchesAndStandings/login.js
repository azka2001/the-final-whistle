// curl --location --request POST 'http://api.cup2022.ir/api/v1/user/login' \
// --header 'Content-Type: application/json' \
// --data-raw '{
// "email": "r.rahiminia@gmail.com",
// "password": "12345678"
// }'

async function login(){
    const res = await fetch(`${proxy}http://api.cup2022.ir/api/v1/user/login`,
    {
        method: 'POST' ,
        headers: {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify({
          email,
          password,
         }),
    });

    const data = await res.json();
    return data.data.token;
}

