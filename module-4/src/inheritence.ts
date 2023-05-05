// class Parent {
//     name: string;
//     age: number;
//     address: string;

//     constructor(name: string, age: number, address: string) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }

//     makeSleep(hour: number): string {
//         return `This ${this.name} will sleep for ${hour}`
//     }
// }

// class Student extends Parent {

//     constructor(name: string, age: number, address: string) {
//         super(name, age, address)
//     }

//     makeSleep(hour: number): string {
//         return `This ${this.name} will sleep for ${hour}`
//     }
// }

// class Teacher extends Parent {
//     designation: string

//     constructor(name: string, age: number, address: string, designation: string) {
//         super(name, age, address)
//         this.designation = designation;
//     }

//     takeClass(numberClass: number): string {
//         return `This ${this.name} will take ${numberClass} class`
//     }
// }

// const teacher1 = new Teacher('Mr.Techear1', 54, "Comilla", "Leatucre")
// const takeAClass = teacher1.takeClass(10)
// const makeASleep = teacher1.makeSleep(5)
// console.log(takeAClass)
// console.log(makeASleep)