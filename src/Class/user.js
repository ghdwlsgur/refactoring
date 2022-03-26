'use strict';

class User {
  constructor(firstname, lastname, age) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._age = age;
  }

  get age() {
    this._age = this._age + 1;
    return this._age;
  }

  set age(arg) {
    if (arg < 0) throw Error('age can not be negative');
    this._age = arg;
  }
}

const user1 = new User('Hong', 'Jinhyeok', 26);
console.log(user1.age);
console.log(user1.age);
console.log(user1.age);
console.log(user1.age);
console.log(user1.age);
user1.age = 18;
console.log(user1.age);

class player {
  constructor(lastname, middlename, firstname) {
    this._lastname = lastname;
    this._middlename = middlename;
    this._firstname = firstname;
  }

  get fullname() {
    return `${this._lastname} ${this._middlename} ${this._firstname}`;
  }

  set fullname(arg) {
    [this._lastname, this._middlename, this._firstname] = arg.split(' ');
  }
}

const player1 = new player('Monkey', 'D', 'Loopy');
console.log(player1.fullname);

player1.fullname = 'Monkey D Dragon';
console.log(player1.fullname);

const split = 'Monkey D Dragon';
console.log(split.split(' '));
let a = '';
let b = '';
let c = '';
[a, b, c] = split.split(' ');
console.log([a, b, c]);
