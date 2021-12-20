const Employee = require("../library/Employee");

describe('Employee', () => {


    describe('instantiation', () => {
        it('should pass and instantiate object correctly ', () => {
            //Act/Arrange
            let testEmployee = new Employee("Jason", 1, "JasonDay@Gmail.com");
            //Assert
            expect(testEmployee.name).toBe("Jason")
            expect(testEmployee.id).toEqual(1)
            expect(testEmployee.email).toBe("JasonDay@Gmail.com")
        })
    });
    describe('getEmail', () => {

        it('should', () => {
            //Arrange
            let testEmployee = new Employee("Jason", 1, "JasonDay@Gmail.com");
            //Act
            let email = testEmployee.getEmail();
            //Assert
            expect(email).toBe("JasonDay@Gmail.com");
        })
    });
    // describe('getID', () => {

    // });
    // describe('getName', () => {

    // });
    // describe('getRole', () => {

    // });
});