
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

// clickevent for logging in
var loginBtn = document.getElementById("loginBtn").addEventListener("click",
function login(username, password){
    username = document.getElementById("inputUsername").value;
    password = document.getElementById("inputPassword").value;
    this.username = username;
    this.password = password;
    // logic to check if user already exists
    let exists = false;
    for(i = 0; i < users.length; i++){
        if(users[i].username === username && users[i].password === password){
            exists = true;
        } 
    }
    if(!exists){
        alert("Wrong username or password");
    }else if(exists){
        window.location.pathname = "loggedIn.html";
        document.getElementById("overhead").innerHTML = username;
    }
})

function printUsers(){
    for(i = 0; i < users.length; i++){
        console.log(users[i]);
    }
}

var loginBtn = document.getElementById("loginBtn");