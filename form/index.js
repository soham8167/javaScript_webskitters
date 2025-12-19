
let userList =[];
const handleSubmit = (event)=>{
    event.preventDefault()
  let ab = event.target;
  let name= ab.name.value
  let email= ab.email.value
  let ph= ab.phno.value
  
    const user={name,email,ph}
    userList.push(user)
    console.log(userList);
    
    
}