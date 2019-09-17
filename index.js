var users = [
    {
        username: "admin",
        password: "password"
    }
]

// clickevent for registering a user
var registerBtn = document.getElementById("registerBtn").addEventListener("click",
function register(username, password){
    username = document.getElementById("inputUsername").value;
    password = document.getElementById("inputPassword").value;
    this.username = username;
    this.password = password;
    
    // logic to check if user already exists
    let exists = false;
    for(i = 0; i < users.length; i++){
        if(users[i].username === username){
            exists = true;
            alert("Username is already taken!");
        } 
    }
    if(!exists){
        users.push({
            username: username,
            password: password
        })
        alert("User registered with username: " + username);
    }
})

function printUsers(){
    for(i = 0; i < users.length; i++){
        console.log(users[i]);
    }
}

var loginBtn = document.getElementById("loginBtn");