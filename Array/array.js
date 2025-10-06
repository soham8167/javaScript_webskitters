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