describe("Same keys and Values", function () {
    it("should accept a first and last name and return an object with that info", function () {
        expect(createInstructor("Eduardo", "Zagalsky")).toEqual({ firstName: "Eduardo", lastName: "Zagalsky" });
    });
});
describe("Property Name", function () {
    it("should initialize and declare the value simultaniously", function () {
        expect(player).toEqual({ firstName: "Jackie", 42: "That is my favorite!" })
    });
});
describe("Object Methods", function () {
    it("should say hi and bye to the instructor", function () {
        expect(instructor.sayHi()).toEqual("Hi!");
        expect(instructor.sayBye()).toEqual("Colt says bye!")
    });
});
describe("createAnimal", () => {
    it("should create a new animal and its sound", () => {
        let d = createAnimal("dog", "bark", "Woof Woof")
        expect(d.bark()).toEqual("Woof Woof");
    });
});