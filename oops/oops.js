// class Person {
// constructor(name,id,dept){
//     this.name=name;
//     this.id=id;
//     this.dept=dept;
// }

//     getDetails(){
//         return `${this.name} - ${this.id} - ${this.dept}`
//     }
// }

// class Address extends Person {
   
//     constructor(name,id,state,city){
//          super(name,id)
         
//         this.state=state;
//         this.city=city;
//     }
//     personFullDetails(){
//         return `name: ${this.name} state: ${this.state}`
//     }
// }
// const person1 = new Person("Soham", 1, "ECE")

// console.log(person1.getDetails());
// const p2 = new Address("Raj",1,"west", "kolkata")
// console.log(p2.personFullDetails());





//one more example for understanding

// class A{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;

//     }
//     getdetails(){
//         return `name: ${this.name} and gmail: ${this.email}`
//     }
// }

// class B extends  A{
//     constructor(name,email,city, country){
//         super(name,email)
// this.city= city;
// this.country=country;
//     }
//     alldetails(){
//         return `name is ${this.name} and city is ${this.city}`
//     }
// }

// class C extends B{
//     constructor(name, email, city, country, course){
//         super(name, email,city,country)
//         this.course= course;
//     }
//     showDetails(){
//         return `name is ${this.name} city is ${this.city} and course is ${this.course}`
//     }
// }
// let p1 = new B("soham", "sss@.com", "kolkata", "india")
// console.log(p1.alldetails());
// let p2 = new C("Rohan", "www@.com", "Mumbai", "London", "javascript")
// console.log(p2.showDetails());

