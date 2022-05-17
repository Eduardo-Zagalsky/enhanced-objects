describe("Same keys and Values", function () {
    it("should accept a first and last name and return an object with that info", function () {
        expect(createInstructor("Eduardo", "Zagalsky")).toEqual({ firstName: "Eduardo", lastName: "Zagalsky" });
    });
});