// let a =  [2,3,4,[3,5],[4,6],5,7,[4,5,[4,3],[8,5,[3,6]]]]
// console.log(a.flat(3));

// let sum =0;
// let a = (arr)=>{
//    return  arr.filter((value)=> value%2==0).reduce((acc, curr)=>  acc+curr )

    

// }
// console.log(a([1,2,3,4,5,6]));







// let result = (arr1,arr2) =>{


//     return arr1.map((ele,index)=>{
//         return [arr2[index],ele]
        
//     })
// }


// console.log(result([1,2,3],['a','b','c']));





// let countVowel = (msg)=>{
//  let ans=  msg.toLowerCase().split('')
//   let count =0;
//   let vowel =["a","e","i","o" , "u"];
//  let b= ans.filter((e)=>{
//    if(vowel.includes(e))
//    count++;
    
//  });
// return count
// }

// console.log(countVowel("I love javascript"));






// Write a program to find the index of the first occurrence of a given element in an array.


// let question = (arr,n)=> {
//     let a = arr.findIndex((e)=>  n === e)
//     return a
// }
// console.log(question([3,2,3,4,5,3],5));



// Write a program that joins all elements of an array into a single string separated by commas.

// let s = (value)=>{
//     let a = value.join(',');
//     console.log(a);
    

// }

// s(["Apple", "Banana", "Mango"])





// let merge = (arr1,arr2)=>{
//     let newarr = [arr1, arr2].flat(1)
//     let ans = newarr.filter((e, index)=> newarr.indexOf(e) === index)

// return ans;      

// }
// console.log(merge([2,1,3,4,2], [3,2,3,6,7]));



// let commonelement = (arr1,arr2)=>{
//     let newarr = arr1.filter((e)=>arr2.includes(e))
    
    
//   console.log(newarr);
  

// }
// console.log(commonelement([2,1,3,], [3,2,6,7]));






// let chunkArray = (arr,num)=>{
//     let newarr = [];
//     for(let i=0;i<arr.length;i+=num){
//         newarr.push(arr.slice(i,i+num))
//     }
//   console.log(newarr);
  
// }
// chunkArray([1,2,3,4,5,6,7],3)





// let unique = (arr)=>{
//     let a = arr.filter((e,index)=>{
//        return index=== arr.indexOf(e)
       
        
//     })
//      console.log(a);

// }
// unique([2,5,5,4,3,2])


 


// let uni = (arr)=>{
//     let newarr=[]
//     arr.map((e)=>{
//         if(!newarr.includes(e)){
//             newarr.push(e)
//         }
//     })
// console.log(newarr);

// }
// uni([3,2,6,2,4,5,3])





// let a =[2,5,4]
// let a1 =[6,7,5]
// console.log([...a,...a1]);

// let a= [2,3,4,5,1,2,3,9]
// let ans = [...new Set(a)]

// console.log(ans);





// let random = (max,min)=>{
//     let a =Math.random()*(max-min)+min;
//     return a

// }
// console.log(random(30,20));



// let randomgenerate = (min,max,range)=>{
// let arr=[];
    
//    for(let i = 0 ; i<range;i++){
//     let a = Math.round(Math.random()*(max-min)+min);
//     arr.push(a);
//    }
//    return arr
// }
// console.log(randomgenerate(10,50,3));



//rest parameter & spread operator

// spread operator
//  const arr1 = [1,3,2,5,4,];
//  const arr2 = [...arr1,3,8,7,9,0]
//  console.log(arr2);
 
// rest parameter

// let userInput = (...num) => {
    
// let a = [...new Set(num)]
// console.log(a);

// }
 
//  console.log(userInput(2,3,1,5,4,7,6,3,6));
 







// const uniqueId = (userName, dept)=>{
//     const randomNum = Math.round (10+ Math.random()*100)
//     const id = userName+`${randomNum}`
//     console.log(id);
    

// }

// uniqueId("Rahul", "ECE")




// let checkInteger = (num)=>{
//     if(Number.isInteger(num)){
//         console.log("integer");
        
//     }else{
//         console.log("not integer");
        
//     }

// }
// checkInteger(10.1)




// let convertNumber= (num)=>{
//     let ans = parseFloat(num)

//     return ans
// }
// console.log(convertNumber("123.45"));








// let num =(n)=>{
    
//     let ans = Math.round(n*100)/100
// console.log(ans);

// }
// num(3.4567);





// let num =(n)=>{
    
//     let ans = Number(n.toFixed(2))
// console.log(ans);

// }
// num(3.4567);




// function getDayName(date){
// let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
//     let newdate = new Date(date)
//     return days[newdate.getDay()]
    
// }

// console.log(getDayName("10/08/2025"));



// let date = new Date();
// console.log(date);





// function getDayaleft(){
//     let today = new Date();
//     let yearleft = today.getFullYear() +1;
//     let newYear = new Date(`01/01/${yearleft}`)
//     let diff = newYear-today;
//     console.log(diff);
//     let convertDay = diff/(1000*60*60*24)
//     let accDate = Math.ceil(convertDay)
//     console.log(accDate);
    
    
// }
// getDayaleft()





// function dayDiff(d1,d2){
//     const date1 = new Date(d1)
//     console.log(date1.toLocaleString());
    
//     const date2 = new Date(d2)
//      console.log(date2.toLocaleString());
//     const diff = date2-date1
//     console.log(diff);
    
//     let convertDay = diff/(1000*60*60*24)
    
// console.log(convertDay);

// }
// dayDiff("10/05/2025", "10/15/2025")




// let today = new Date()
// let hour = today.getHours()
// let minitue = today.getMinutes()
// let time = hour>=12 ? "PM" : "AM";
// let ans = `${hour}-${minitue}-${time}`

// console.log(ans);











// let today = new Date();
// let time = today.toLocaleString();
// console.log(time);

// let today1 = new Date();
// let time1 = today1.toISOString();
// console.log(time1);



// let date = new Date()
// let day = date.getDay()
// console.log(day);



// let myDetails = {
//     n: "soham",
//     dept: "ece",
//     id: 10,
//     showDetails: function (){
//         console.log(`Details ${this.n} ${this.dept} ${this.id}`);
        
//     }
// }


// myDetails.age=24;
// console.log(myDetails);

// let size = Object.keys(myDetails).length
// console.log(size);
// myDetails.showDetails();





// let personalDetails = {
//     nam: "soham",
//     roll: 10,
//     sec: 'A',
//     address:{
//         state: "west bengal",
//         country: "India"
//     },
//     personalDetails: function (){
//         console.log(`personal details is ${this.nam} ${this.roll} ${this.sec}`);
        
//     },
//     AddressDetails: function (){
//         console.log(`Address is ${this.address.state} ${this.address.country}`);
        
//     },
//     wholeDetails: function (){
//         console.log(`full details is ${this.nam} ${this.address.state}`);
        
        
//     }
// }


// console.log('details',personalDetails.wholeDetails());






// let arr = [1,6,3,4,9,2,4]
// let ans = Math.max.apply(null,arr)
// console.log(ans);






// let arrobj = (userList, id, updateName) => {

//   const update =  userList.map((user)=>{
//     return user.id === id ? {...user, name: updateName} : user
         
//     })
//     return update

// }

// const students = [ 
//       { id: 1, name: 'Alice', age: 20 },   
//        { id: 2, name: 'Bob', age: 22 },      
//        { id: 3, name: 'Charlie', age: 21 }    
//     ];

//     console.log(arrobj(students, 3 , "soham"));
    





    // const deletUser = (userList,id)=>{
    //     const update = userList.filter((user)=>{
    //         return user.id!==id 
    //     })
    //     return update

    // }
    // const students = [ 
    //   { id: 1, name: 'Alice', age: 20 },   
    //    { id: 2, name: 'Bob', age: 22 },      
    //    { id: 3, name: 'Charlie', age: 21 }    
    // ];

    // console.log(deletUser(students, 1));
    



// Create an object person with a method greet(), then borrow that method into another object using call().

// const obj1 = {
//     name: "soham",
//     id: 1,
//     greet: function(){
//         console.log(`Hello i am ${this.name}`);
        
//     }
// }
// const obj2 = {
    
//     name: "soha",
//     id: 2
    


// }
// console.log(obj1.greet());

// console.log(obj1.greet.call(obj2));






// Write a program where you pass multiple arguments to a method using apply()


// let obj1 = {
//     name: "soham",
//     id: 1,
//     introduction: function(state,country){
//         console.log(`${this.id}- My name: ${this.name} state is ${state} and country is ${country}`);
        

//     }
// }

// let obj2 = {
//     name: "Rohan",
//     id: 2
// }


// obj1.introduction.apply(obj2,["West", "India"])



// create a function that uses bind () to permanently bind this to a specific object.

// let obj1 = {
//     name: "soham",
//     id: 1,
//     introduction: function(){
//         console.log(`Hello ${this.name}`);
        
//     }
// }
// let obj2 = {
//     name: "Ram",
//     age: 30
// }


// let bb = (obj1.introduction.bind(obj2));

// bb()



// sum of the numbers

// let sum = (...arr) => {
//    return arr.reduce((acc,value)=>{
//     return acc+value
//    })
// }
// console.log(sum(1,2,3,4,5,6));






//Write a program where a function defined outside an object is borrowed by multiple objects using call().




// Write a function that finds the maximum number from an array using the spread operator.

// let maxEle = (value) => {
//     let ans = Math.max(...value)
//     return ans;
// }

// console.log(maxEle([2,4,3,9,4,1]));



// Write a program that copies an object using the spread operator (deep vs shallow copy case).


// let student1 = {
//     id: 1,
//     name: "Ram",

// }
// let copys = {...student1};
// copys = "abc";
// console.log(student1);
// console.log(copys);




// write a program that combines multiple object into one using the spread operator

// let p1 = {id: 1, name: "Ram", sec: 'A'}
// let p2 = {place: "kolkata", name: "am", sec: 'B'}
// let p3 = {state: "west bengal", name: "jam", sec: 'C'}
 
// let ans = {...p1,...p2,...p3}


// console.log(ans);





// let removeDuplicates = (arr) => {
//     const ans = [...new Set(arr)]
// console.log(ans);

// }
// removeDuplicates([2,2,3,5,5,6,1,8,1])




// let fff = (nam, id, ...add) => {
//     console.log(add);
    
//     if(add.length>0){
//         console.log(`${nam} and  i am from ${add[0].state}`);
//     }else{
//         console.log(`${nam}`);
        
//     }
    
    
// }


// let address = {
//     state: "west bengal",
//     city: "kolkata"
// }
// fff("soham", 1, address)





// let a = 5;
// let b = 7;
// [a,b]=[b,a]
// console.log(a,b);



// let fff = ([n1,n2,...other]) => {
//     console.log(n1,n2);
//     let a2 = other
//     console.log(a2);
    
    
// }
// console.log(fff([1,2,4,"jdhcj"]));





// let arr = [1,[2,3],[4,[5,6]]];
// [arr,[b,c],[d,[e ,f]]]
// console.log(e);






// const person = {
//     name: "sss",
//     age: 24,
//     sec: 'A',
//     city: "Kolkata"
// }
// let {name,age} = person;
// console.log(name,age);



// const person = {
//     name: "sss",
//     age: 24,
    
// }
// // person.city="kolkata"
// let {name,age,city="kol"} = person;
// console.log(city );





const employee = 
{   name: "John Doe",   age: 28, 
      address: 
    {     street: "123 Main St", 
            city: "Los Angeles",   
              country: "USA" 
              }, 
      profession: "Engineer"
     };

let {name,age,address:{street,city,country},profession } = employee
console.log(city);
