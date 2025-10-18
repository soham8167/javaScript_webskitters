let userList = [];
function validName(name){
    if(name[0]===name[0].toUpperCase() ){
        return true
    }
    
    
}
function validPassword(password){
 if(password.length>=6){
    if(password.includes('@') || password.includes('$') || password.includes('*')){
        return true;
    }
    
 }
}

const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(event.target);
    let form = event.target;
    let name = form.name.value.trim();
    let email = form.email.value.trim();
    let password = form.password.value.trim();
     
    let validate = true;
    document.getElementById("nameError").textContent="";
    document.getElementById("emailError").textContent="";
    document.getElementById("passwordError").textContent="";
    if(!name){
        document.getElementById("nameError").textContent= "Name is required";
        validate=false
    }else if(!validName(name)){
        document.getElementById("nameError").textContent= "Invalid name";
        validate=false
    }
     if(!email){
        document.getElementById("emailError").textContent= "Email is required";
        validate=false
    }
     if(!password){
        document.getElementById("passwordError").textContent= "Password is required";
        validate=false
    }else if(!validPassword(password)){
        document.getElementById("passwordError").textContent= "Invalid password format";
        validate=false
    }
    
    const user = {name,email,password}
    userList.push(user)
    console.log(user);
    //form.reset()
    
console.log(userList);
        
}
