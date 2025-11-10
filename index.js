// let age =28;
// let result = (age>=18) ? (age>=20) ? "voter" : "not voter" : "child";
// console.log(result)

// let marks =344;

//     let grade= (marks>100)? "invalid marks" :  (marks>=90) ? "A" : (marks>=80) ? "B" : (marks>=90) ? "C"  : "D";
//     console.log(grade);

// let day =4;
// let ans= (day==1)? "first day" : (day==2) ? "second day" : (day==3)? "mid day" : "weekend";
// console.log(ans)

// let role = "developer";

// if(role==="student"){

//     console.log("student")

// } else if(role==="developer"){
//         console.log("developer")
//     }
//  else if(role==="skipper"){
//         console.log("skipper")
//     }
// else{
//     console.log("not eligible");
// }

// let day = "monday";

// switch(day){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wed");
//         break;
//     default:
//         console.log("not present");

// }

// let num1=1;
// let num2=2;
// let operator1="+";
// if(operator1==="+"){
//     console.log(num1+num2);

// }else if(operator1==="-"){
// console.log(num1-num2);
// }
// else if(operator1==="*"){
// console.log(num1*num2);
// }
// else if(operator1==="/"){
// console.log(num1/num2);
// }

// let num1=300;
// let num2=10;
// let num3=60;
// if(num1>num2){
//     if(num1>num3){
//         console.log(num1);

//     }

// }else if(num1<num2){
//    if(num2>num3){
//     console.log(num2);

//    }
//    else if(num3>num1){
//     if(num3>num2){
//         console.log(num3);

//     }
//    }
// }

// let n=10;

// for(let i=0;i<=n;i++){
//     // console.log(`position ${i}, value=${i+1}`);
//     console.log("position=", i,  "value=", i+1);

// }

// let n =50;
// for(let i=2;i<=50; i++){
//     if(i%2===0){
//         console.log(i);

//     }
// }

// let n=100;
// for(let i=2; i<=100; i++){
//     if(i%2==0 && i%5===0){
// console.log(i);

//     }
// }

// let ans ='';
// let str="hello";
// let n = (str.length)-1;
// for(let i=n;i>=0;i--){
//      ans =ans+ str[i];

// }
// console.log(ans);

// let a ="hello";
// let rev=" ";
//  for(let i  in a){
//     rev=a[i]+rev;

//  }
//  console.log(rev);

// let upper=0;

// let lower=0;
// let a = "Hello World";
// for(let i of a){
//     if(i>="A" && i<="Z"){
//         upper++
//     }
//     else if(i>="a" && i<="z"){
//         lower++;
//     }
// }
// console.log("upper is", upper);
// console.log("lower is", lower);

// console.log("hello")

// let a = document.getElementById ("before");
// let aa = document.getElementById ("after");








// function hello(msg) {
//   console.log("welcome");

//   function h() {
//     console.log("Hey" + msg);
//     function hii() {
//       console.log("Good Morning");
//       function bye(){
//         console.log("bye");
//       }
//       return bye();
//     }
//     return hii()
//   }
//   return h()
// }

// hello("soham")






//  let fact = (num)=>{
//     let ans=1;
//     for(let i=1; i<=num; i++){
//         ans=ans*i;
//     }
// console.log(ans);

// }
// fact(6)






// let n = 123;
// let rev =0;
// let temp =Math.abs(n);
// while(temp>0){
//     rev = (rev*10) + (Math.floor(temp%10))
//     temp = Math.floor(temp/10);
// }
// if(rev===n){
//     console.log("palindrome");
    
// }else{
//     console.log("not");
    
// }








 // closure function

// function parent(){
//     let count =10;
//     function increment(){
//         count++;
//         console.log(count);
//     }
//     function decrement(){
//         count--;
//         console.log(count);
//     }
//     function current(){
     
//         console.log(count);
//     }
//    return {
//         current,
//         increment,
//         decrement
        
//     };
// }

// const closurefun = parent();
// closurefun.current();
// closurefun.increment();
// closurefun.decrement();
// closurefun.current();
// closurefun.decrement();
// closurefun.current();








// function main(x=7){
//     return function(y){
//         return x+y;
//     }
// }
// const add = main();
// console.log(add(8));






//Callback function

// function calculator(add, sub){
//     add();
//     sub();
// }
// function addition(x=4,y=2){
//     let z= x+y;
//    console.log(`Addition is ${z}`);
// }
// function subtraction(x=4, y=5){
//     let z= x-y;
//    console.log(`subtraction is ${z}`);
// }

// calculator(addition, subtraction)




// function calculator(a,b,perform){
// perform(a,b);
// }
// function add(x,y){
//     console.log(x+y);
    
// }
// function sub(x,y){
//     console.log(x-y);
    
// }
// function mul(x,y){
//     console.log(x*y);
    
// }
// function div(x,y){
//     console.log(x/y);
    
// }
// calculator(2,4,add)
// calculator(2,4,sub)
// calculator(2,4,mul)
// calculator(2,4,div)






//  String start

// const message = "hello";
// console.log(message.includes("hello"));


// let s = 'hello';

// let v='';
// let con =' ';

// for(let i =0;i<s.length;i++){
//     if(s[i]=== 'a' || s[i]=='e' || s[i]=='i' || s[i]== 'o' || s[i]=='u'){
//         v++;
//     }else{
//         con++;
//     }
// }
//  console.log(`vowel number is ${v}`);
//  console.log(`con number is ${con}`);
 




// function ss (msg){

//     let b = msg[0].toUpperCase()+msg.slice(1);

// console.log(b);

// }

// ss('hello')









// Truncate a string and after 5 digit add “...” .


// function hello(msg){
//     let s = msg.length;
//     let ans='';
//     if(s>=5){
//         for(let i = 0; i<5; i++){
//         ans=(ans+msg[i]);

//     }
//     console.log(ans + '...');
    
//     }else{
//         console.log(msg);
        
//     }

// }
// hello("javasdd");




// function hello(msg){
   
//   let ans=   msg.length>=5 ?  msg.slice(0,5) +'...'  : msg;
//    return ans;
   
// }
// console.log(hello("javafdsgsg"));




// console.log(removeDuplicates("programming")); // Output: "progaming"


// function removeDuplicates(msg){
//     let result ='';
//     for(const char of msg){
//         if(!result.includes(char)){
//             result +=char
            
            

//         }
//     }
//     console.log(result);
    
// }

// (removeDuplicates("programming"));





// console.log(repeatString("abc", 3)); // "abcabcabc"

// function hello(str){
//     let ans='';
//     for(let i=0; i<str.length; i++){
//         ans=ans+str;
//     }
//     console.log(ans);
    
// }
// hello("abc");





// Write a program to check if one string is a substring of another using includes().

// function hello(msg, submsg){
// let result=msg.split(' ');
// result = result.includes(submsg)
// console.log(submsg);
// }

// hello("Hello world", "world")










// Write a program to mask the last 4 digits of a phone number (e.g., 9876543210 —””****3210).


// function hello(n){
//    let value  = n.slice(n.length-4, n.length)
//   value= value.padStart(n.length, '*')
//    console.log(value);
   
    
// }
// hello("12812345668")










// Extract domain from email.

// function email(e){
   
// let a= e.split('@')[1].split('.')[0]

// console.log(a);


// }
// email("user@example.com")







// let para = "JavaScript is fun. JavaScript is powerful. I love JavaScript!"; console.log(countWord(para, "JavaScript")); // 3



// let para = "JavaScript is fun. JavaScript is powerful. I love JavaScript";

// function countWord(sentence,str){
//  let a = sentence.split(' ');

 
//  let count=0;

//  for (const char of a){
    
//     if(char === str){
//         count++
//     }
    
//  }
//  console.log(count);
 

// }
// countWord(para,'JavaScript');






// let slargest = (arr) => {
//     arr.sort((a,b)=>{
//     return a-b
//     })
//    console.log(arr[arr.length-2]);
   
    
// }

// slargest([2,60,30,4,5,10,24])



// const words = ["hello", "world", "soham"];

// const camelcase = words.map((ele,index)=>{
//     if(index==0){
//         return ele.toLowerCase();
//     }else{
//         return ele.charAt(0).toUpperCase() + ele.slice(1).toLowerCase()
//     }
// }).join('')
// console.log(camelcase)

