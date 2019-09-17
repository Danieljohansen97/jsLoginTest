var users = [
    admin = {
        username: "admin",
        password: "password"
    }
]

function register(username, password){
    this.username = username;
    this.password = password;
    users.push(this.username = {
        username: username,
        password: password
    })
}