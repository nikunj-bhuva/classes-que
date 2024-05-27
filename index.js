// ES6 oop concept //

// basic class to create object //

// class Human {
//     printHello() {
//         return "hello human";
//     }
//     printMyName() {
//         return "hello my name is nikunj";
//     }
// }

// // to create object using new keyword to instance of Human class //

// let HumanObj = new Human();
// console.log(HumanObj.printHello());//call printHello method
// console.log(HumanObj.printMyName());//calll printMyName method

//multiple instance of class using new keyword //

// class Student {
//     firstStudent(name, age, qualification, location) {
//         return `first student name is: ${name} \nage is: ${age} \nqualification is: ${qualification} \nlocation is: ${location}`;
//     }
//     secondStudent(name, age, qualification, location) {
//         return `second student name is: ${name} \nage is: ${age} \nqualification is: ${qualification} \nlocation is: ${location}`;
//     }
// }
// let studentObj = new Student;
// console.log(studentObj.firstStudent('nikunj', 21, 'bca', 'ahmedabad'));
// let studentObj2 = new Student;
// console.log(studentObj2.secondStudent('karan', 22, 'bba', 'jamnagar'));

//constructor understand how works it in class //

// class Person {
//     constructor(name, age, location) {
//         console.log("inside constructor");
//         this.Name = name;//nikunj
//         this.Age = age;//21
//         this.Location = location;//ahmedabad
//     }
//     printMyName() {
//         return `name is: ${this.Name} age is: ${this.Age} location is: ${this.Location}`;
//     }
// }
// let personObj = new Person('nikunj', 21, 'ahmedabad');
// let personObj1 = new Person('ashish', 23, 'rajkot');
// let personObj2 = new Person('kunal', 25, 'vadodra');
// console.log(personObj.printMyName());
// console.log(personObj1.printMyName());
// console.log(personObj2.printMyName());

// function User(username, signnedIn, loginCount) {
//     this.username = username;
//     this.signnedIn = signnedIn;
//     this.loginCount = loginCount;
//     return this;
// }
// let userName = User("nikunj", true, 3);
// let userTwo = User("king", false, 2);
// console.log(userName);
// console.log(userTwo.username);//not using new keyword and override the code

// que 1 //

// class Person {
//     constructor(name, age) {
//         this.Name = name;
//         this.Age = age;
//     }
//     greet() {
//         return `Hello, my name is ${this.Name} and I am ${this.Age} years old.`;
//     }
// }
// let personObj = new Person('john', 30);
// console.log(personObj.greet());

// que 2 //

// class Product {
//     constructor(product, price) {
//         this.Product = product;
//         this.Price = price;
//     }
//     displayInfo() {
//         return `Product:${this.Product} Price:${this.Price}`;
//     }
// }
// let productObj = new Product(proName, proPrice);
// console.log(productObj.displayInfo());

// que 3 //

// let studentArr = [];
// class Student {
//     constructor(name, grade) {
//         this.nameObj = name;
//         this.gradeObj = grade;
//     }
//     getDetails() {
//         return `Student Name:${this.nameObj} \nGrade:${this.gradeObj}`;
//     }
// }

// let studentObj = new Student("Alice", 90);
// let studentObj2 = new Student("Nikunj", 95);
// let studentObj3 = new Student("Chinku", 85);
// studentArr.push(studentObj);
// studentArr.push(studentObj2);
// studentArr.push(studentObj3);
// for (let i = 0; i < studentArr.length; i++) {
//     console.log(studentArr[i].getDetails());
// }

// que 4 //

// simple calculation method //

// class Recatangle {
//     constructor(width, height) {
//         this.totalArea = width * height;
//     }
//     calculateArea() {
//         return `area of rectangle is: ${this.totalArea}`;
//     }
// }
// let rectangleObj = new Recatangle(50, 100);
// console.log(rectangleObj.calculateArea());

// que 5 //

// class Book {
//     constructor(title, author, pages = 100) {
//         this.titleObj = title;
//         this.authorObj = author;
//         this.pagesObj = pages;
//     }
//     getSummary() {
//         return `Title:${this.titleObj}\nAuthor:${this.authorObj}\nPages:${this.pagesObj}`;
//     }
// }
// let bookObj = new Book("The Grate Gets by ", "F. Scott Fitzgerald");
// console.log(bookObj.getSummary());

// inheritance //

// class Car {
//     constructor(name, color) {
//         console.log("from parent class");
//         this.name = name;
//         this.color = color;
//     }
//     start() {
//         console.log("car is started");
//     }
//     setColor() {
//         console.log("the color of car is", this.color);
//     }
// }
// // let toyota=new Car("toyota","black")
// // toyota.start();
// // toyota.setColor()

// class Supra extends Car {
//     constructor(name, color) {
//         super(name, color);
//         console.log("from  child class");
//         this.color = color
//     }
//     setColor() {
//         super.start();
//         console.log("the color of supra car is", this.color);
//     }
// }
// let supraCar = new Supra("supra", "blue");
// console.log("supraCar", supraCar);
// supraCar.setColor()

// class Car {
//     constructor(name, color) {
//         console.log("from parent class");
//         this.nameObj = name;
//         this.colorObj = color;
//     }
//     start() {
//         console.log("car started");
//     }
//     setColor() {
//         return "color is: ", this.colorObj;
//     }
// }
// class Supra extends Car {
//     constructor(name, color) {
//         super(name, color);
//         console.log("from child class");
//         this.nameObj = name;
//         this.colorObj = color;
//     }
//     setColor() {
//         super.start();
//         return "color is: ", this.colorObj;
//     }
// }
// let supraObj = new Supra("supra", "blue");
// console.log(supraObj.setColor());

// que 1 inheritance //

// class Animal {
//     constructor(species, sound) {
//         this.speciesObj = species;
//         this.soundObj = sound;
//     }
//     makeSound() {
//         console.log(`sound is: ${this.soundObj}`);
//     }
// }
// class Mammal extends Animal {
//     constructor(species, sound, hasFur) {
//         super(species, sound);
//         this.speciesObj = species;
//         this.soundObj = sound;
//         this.hasFurObj = hasFur;
//     }
//     makeSound() {
//         console.log(`Mammal sound is: ${this.soundObj}`);
//     }
// }
// class Bird extends Animal {
//     constructor(species, sound, canFly) {
//         super(species, sound);
//         this.speciesObj = species;
//         this.soundObj = sound;
//         this.canFlyObj = canFly;
//     }
//     makeSound() {
//         console.log(`Bird sound is: ${this.soundObj}`);
//     }
// }
// let mammalObj = new Mammal("Wolf", "Howling", true);
// mammalObj.makeSound();
// let birdObj = new Bird("Perrot", "Whistle", true);
// birdObj.makeSound();

// que 2 //

// class Vehicle {
//     constructor(type, color) {
//         this.typeObj = type;
//         this.colorObj = color;
//     }
//     start() {
//         console.log("vehicle started");
//     }
// }
// class Car extends Vehicle {
//     constructor(type, color, brand) {
//         super(type, color);
//         this.typeObj = type;
//         this.colorObj = color;
//         this.brandObj = brand;
//     }
//     start() {
//         console.log("car started");
//     }
// }
// class Motorcycle extends Vehicle {
//     constructor(type, color, model) {
//         super(type, color);
//         this.typeObj = type;
//         this.colorObj = color;
//         this.modelObj = model;
//     }
//     start() {
//         console.log("motorcycle started");
//     }
// }
// let carObj = new Car("Innova", "White", "Toyota");
// carObj.start();
// let motorcycleObj = new Motorcycle("R15", "Red", "2019");
// motorcycleObj.start();

// que 3 //

// class Shape {
//     constructor(name, color) {
//         this.nameObj = name;
//         this.colorObj = color;
//     }
//     draw() {
//         console.log("drawing shape");
//     }
// }
// class Circle extends Shape {
//     constructor(name, color, radius) {
//         super(name, color);
//         this.nameObj = name;
//         this.colorObj = color;
//         this.radiusObj = radius;
//     }
//     draw() {
//         console.log("drawing circle");
//     }
// }
// class Recatangle extends Shape {
//     constructor(name, color, width, height) {
//         super(name, color)
//         this.nameObj = name;
//         this.colorObj = color;
//         this.widthObj = width;
//         this.heightObj = height;
//     }
//     draw() {
//         console.log("drawing rectangle");
//     }
// }
// let circleObj = new Circle("Circle", "Blue", 3.14);
// circleObj.draw();
// let rectangleObj = new Recatangle("Rectangle", "Green", 30, 40);
// rectangleObj.draw();

// que 4 //

// class Employee {
//     constructor(name, role) {
//         this.nameObj = name;
//         this.roleObj = role;
//     }
//     work() {
//         console.log("working");
//     }
// }
// class Manager extends Employee {
//     constructor(name, role, department) {
//         super(name, role);
//         this.nameObj = name;
//         this.roleObj = role;
//         this.departmentObj = department;
//     }
//     work() {
//         console.log("managing");
//     }
// }
// class Developer extends Employee {
//     constructor(name, role, skills) {
//         super(name, role);
//         this.nameObj = name;
//         this.roleObj = role;
//         this.skillsObj = skills;
//     }
//     work() {
//         console.log("coding");
//     }
// }
// let managerObj = new Manager("Ashish", "Engineer", "Crm");
// managerObj.work();
// let developerObj = new Developer("Nikunj", "Web Development", "React Js");
// developerObj.work();

// que 5 //

// class Account {
//     constructor(accountNumber, balance) {
//         this.accountNumberObj = accountNumber;
//         this.balanceObj = balance;
//     }
//     deposit(amount) {
//         console.log(amount + this.balance);
//     }
// }

// class SavingAccount {
//     constructor(accountNumber, balance, intrestRate) {
//         super(accountNumber, balance);
//         this.accountNumberObj = accountNumber;
//         this.balanceObj = balance;
//         this.intrestRateObj = intrestRate;
//     }
//     deposit(amount) {
    
//     }
// }
// let savingAccountObj = new SavingAccount(1234, 200000, 10);
// savingAccountObj.deposit(500000);
