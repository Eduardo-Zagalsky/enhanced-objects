// function createInstructor(firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName: lastName
//     }
// }
const createInstructor = (firstName, lastName) => ({ firstName, lastName });

// var favoriteNumber = 42;
// var instructor = {
//     firstName: "Colt"
// }
// instructor[favoriteNumber] = "That is my favorite!"
let favoriteNumber = 42;
const player = {
    firstName: "Jackie",
    [favoriteNumber]: "That is my favorite!"
};

// var instructor = {
//     firstName: "Colt",
//     sayHi: function () {
//         return "Hi!";
//     },
//     sayBye: function () {
//         return this.firstName + " says bye!";
//     }
// }
const instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}