class Person {
constructor(name,id,dept){
    this.name=name;
    this.id=id;
    this.dept=dept;
}

    getDetails(){
        return `${this.name} - ${this.id} - ${this.dept}`
    }
}

class Address extends Person {
   
    constructor(name,id,state,city){
         super(name,id)
         
        this.state=state;
        this.city=city;
    }
    personFullDetails(){
        return `name: ${this.name} state: ${this.state}`
    }
}
const person1 = new Person("Soham", 1, "ECE")

console.log(person1.getDetails());
const p2 = new Address("Raj",1,"west", "kolkata")
console.log(p2.personFullDetails);
