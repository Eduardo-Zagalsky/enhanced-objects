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
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
};