/* curl --location --request POST 'http://api.cup2022.ir/api/v1/user' \
--header 'Content-Type: application/json' \
--data-raw '{
"name" : "Reza RAhiminia",
"email": "r.rahiminia@gmail.com",
"password": "******",
"passwordConfirm" : "******"
}' */

const email= "munazaa85@gmail.com",
password= 'Exolforever365';
const proxy = 'https://cors-anywhere.herokuapp.com/';

async function register(){
    const res = await fetch(`${proxy}http://api.cup2022.ir/api/v1/user`,
    {
        method: 'POST' ,
        headers: {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify({
          name : "Munaza Ashraf",
          email,
          password,
          passwordConfirm : "Exolforever365"
         }),
    });

    const data = await res.json()
    console.log(data)
}

// register();