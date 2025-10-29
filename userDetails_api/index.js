const getUserData = async () => {
    try{
        let response = await fetch('https://dummyjson.com/users')
        let data = await response.json();
        console.log(data.users[0]);
        displayUsers(data?.users)
        
    }catch(e){
        console.log("error", e);
        
    }

}

const displayUsers = (users) => {
    let print = document.getElementById('result')
    print.innerHTML = users.map((item)=>{
        return `
        <div style= "border:2px solid #070726ff; padding:10px; margin:10px; width:200px;">
        <h2 style="color:blue">${item?.firstName} ${item?.lastName}</h2>
        <div style= "border:2px solid #ccc; padding:5px; margin:5px; width:150px;">
        <h4>Address</h4>
        <p>${item?.address.address}, ${item?.address.city}, ${item?.address.state},${item?.address.country}, Lat:${item?.address.coordinates.lat}, Lng:${item?.address.coordinates.lng}</p>
        </div>
        <h4>Company Details</h4>
        <p>${item?.company.address.city} , ${item?.company.address.country}, ${item?.company.department}, ${item?.company.name}</p>
       
        
        </div>
        `
    })

}