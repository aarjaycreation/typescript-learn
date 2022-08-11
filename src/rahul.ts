// basic type 
let FirstName : string  = 'rahul'; // string
let age : number = 40; // number 
let ismarry : boolean = false; // boolean

let anytype : any = 30;
anytype = 'sometext';
anytype = true;

// diffrent way to declair 
let LastName : string;
LastName = 'jangir';

let ids : number[] = [1,2,3,4,5]; // aaray 
// ids.push('str') // give error
ids.push(3) 


let col : any[] = [1,true,'hello there']; // any aaray
col.push('str');

// tuple 
let person : [number,string,boolean] = [1,'str',true] // diff diff data in aaray
// tuple aaray 
let emp : [number,string][]
emp = [
    [1,'rahul'],
    [2,'satyam']
];

// union 
let email : string | number;
email = 1998;
email = 'aarjay@';

// enum 
enum dircation{
    up = 'up side',
    dowm = 3,
    left = 55,
    right 
}
console.log(dircation.up) // 0
console.log(dircation.dowm) // 3

// objects 

// best way 
type usertype = {
    id: number, // type object
    name:string // type object
    isyes: boolean
}

let user:usertype = {
        id: 1,
        name: 'rahul',
        isyes: true
    }

// same but trrikky
    let user1:{
        id: number, // type object
        name:string // type object
        isyes: boolean
        } = {
            id: 1,
            name: 'rahul',
            isyes: true
        }



// type assertion 
let cid: any = 1;
// let customerid = <number>cid; // same but im not use this 
let customerid = cid as number; // best way

// function 
function addnum(x:number, y:number): number{
    return x + y;
}
console.log(addnum(2,3)) // 5

// void 
function log(massage: number | string):void{
    console.log(massage)
}
console.log(log('hello log '))

// insteface 
interface peopletype {
   readonly id : number,
    name: string,
    city: string,
    ispune: boolean,
    age?: number // optional

}


// object for inter face 
let people:peopletype ={
    id : 1,
    name : 'rahul',
    city: 'sikar',
    ispune: true
}

// people.id = 5; // readonly prop than error 

interface mathfunc{
    (x:number, y:number):number;
}
// arrow function 
let  addnumber:mathfunc = (x:number, y:number):number => x + y 


// classes 
interface classpersontype {
     id : number
     name: string
     registor(): string
 }

class Person implements classpersontype {
    id :number
    name : string

    constructor(id : number, name:string){
        // console.log('hello bhai')
        this.id = id
        this.name = name
    }
    registor() {
        return `${this.name} is regester sucess `;
        
    }
}
// sub classes 
class employee extends Person {
positon : string


    constructor(id: number, name: string,positon: string){
        super(id , name)
        this.positon = positon

    }
}
// class first 
const obj1 = new Person(1,'rahul');
const obj2 = new Person(2,'satyam');
// calss second
const obj3 = new employee(1,'rahul','devloper');
console.log(obj1) //Person { id: 1, name: 'rahul' }
console.log(obj3.registor()) //rahul is regester sucess
console.log(obj3.positon) //devloper
console.log(obj3) //employee { id: 1, name: 'rahul', positon: 'devloper' }

