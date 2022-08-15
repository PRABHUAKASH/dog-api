function displayuser(res){
    let users = res.data.data;
    for(let user of users){
        const div= document.createElement("div");
        const id=document.createElement("h1");
        const FirstName = document.createElement("p");
        const LastName = document.createElement("p");
        const email = document.createElement("p");
        const avatar = document.createElement("img");

        id.textContent = user.id;
        FirstName.textContent=user.first_name;
        LastName.textContent=user.last_name;
        email.textContent=user.email;
        avatar.src=user.avatar; 

        div.appendChild(id);
        div.appendChild(FirstName);
        div.appendChild(LastName);
        div.appendChild(email);
        div.appendChild(avatar);


        container.appendChild(div);



    }
}


const base_url ="https://reqres.in/api/users?pages=2";
const container= document.querySelector(".container");


axios
.get(base_url)
.then(displayuser)