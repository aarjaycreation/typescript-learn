"use strict";
let FirstName = 'rahul';
let age = 40;
let ismarry = false;
let anytype = 30;
anytype = 'sometext';
anytype = true;
let LastName;
LastName = 'jangir';
let ids = [1, 2, 3, 4, 5];
ids.push(3);
let col = [1, true, 'hello there'];
col.push('str');
let person = [1, 'str', true];
let emp;
emp = [
    [1, 'rahul'],
    [2, 'satyam']
];
let email;
email = 1998;
email = 'aarjay@';
var dircation;
(function (dircation) {
    dircation["up"] = "up side";
    dircation[dircation["dowm"] = 3] = "dowm";
    dircation[dircation["left"] = 55] = "left";
    dircation[dircation["right"] = 56] = "right";
})(dircation || (dircation = {}));
console.log(dircation.up);
console.log(dircation.dowm);
let user = {
    id: 1,
    name: 'rahul',
    isyes: true
};
let user1 = {
    id: 1,
    name: 'rahul',
    isyes: true
};
let cid = 1;
let customerid = cid;
function addnum(x, y) {
    return x + y;
}
console.log(addnum(2, 3));
function log(massage) {
    console.log(massage);
}
console.log(log('hello log '));
let people = {
    id: 1,
    name: 'rahul',
    city: 'sikar',
    ispune: true
};
let addnumber = (x, y) => x + y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    registor() {
        return `${this.name} is regester sucess `;
    }
}
class employee extends Person {
    constructor(id, name, positon) {
        super(id, name);
        this.positon = positon;
    }
}
const obj1 = new Person(1, 'rahul');
const obj2 = new Person(2, 'satyam');
const obj3 = new employee(1, 'rahul', 'devloper');
console.log(obj1);
console.log(obj3.registor());
console.log(obj3.positon);
console.log(obj3);
