
function login(){
    const username = document.getElementById("username1").value
    const password = document.getElementById("password1").value

    const users = JSON.parse(localStorage.getItem("users")) || []

    const user = users.find(u => u.username === username && u.password === password)

    if(user){
        window.location.href = "../Home Page/Home-Page.html";
        alert("Login succesful")
        
    }else {
        alert("Invalid username or password")
    }
}

function register(){
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const email = document.getElementById("email").value

    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const users = JSON.parse(localStorage.getItem("users")) || []

    if(users.find(u => u.username === username)){
        document.getElementById('nameError').textContent = 'Enter the name.';
        return;
    }

    if(users.find(u => u.email === email)){
        if(!emailPattern.test(password)){
        document.getElementById('emailError').textContent = 'Enter a valid email address';
        return;
    }}

    if(users.find(u => u.password === password)){
        if(!passwordPattern.test(password)){
        document.getElementById('passwordError').textContent = 
        'Plese enter a password which contain at least one numeric digit, one uppercase and one lowercase letter.';
        return;
    }}


    users.push({ username, password, email})

    localStorage.setItem("users", JSON.stringify(users))

    alert('Registered successfully!');
    window.location.href = "../Home Page/Home-Page.html";

}