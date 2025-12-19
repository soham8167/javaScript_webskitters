const getData = async ()=>{
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/comments")
  const data = await response.json()
  console.log(data);
  displayData(data)
  }
  catch(e){
    console.log("error",e);
    
  }
}


const displayData = (value)=>{
    let ans = document.getElementById('result')
    ans.innerHTML= value.map((items)=>{
        return `
        <div style= "border:2px solid #070726ff; padding:10px; margin:10px; width:200px;">
        <p>hi</p>
        <div style>${items.name}</div>
        </div>
        `
    }).join('')

}