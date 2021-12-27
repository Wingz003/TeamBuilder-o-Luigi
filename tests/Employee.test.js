const Employee = require("../library/Employee");

describe('Employee', () => {


    describe('instantiation', () => {
        it('should pass and instantiate object correctly ', () => {
            // Arrange/Act
            let testEmployee = new Employee("Jason", 1, "JasonDay@Gmail.com");
            //Assert
            expect(testEmployee.name).toBe("Jason")
            expect(testEmployee.id).toEqual(1)
            expect(testEmployee.email).toBe("JasonDay@Gmail.com")
        })
    });
    describe('getEmail', () => {

        it('should get Email', () => {
            //Arrange
            let testEmployee = new Employee("Jason", 1, "JasonDay@Gmail.com");
            //Act
            let email = testEmployee.getEmail();
            //Assert
            expect(email).toBe("JasonDay@Gmail.com");
        })
    });
    
    
    describe('getId', () => {
        it('should get Id', () => {
            //Arrange
            let testEmployee = new Employee("Jason", 1, "JasonDay@Gmail.com");
            //Act
            let Id = testEmployee.getId();
            //Assert
            expect(Id).toBe(1);
        })

    });
    describe('getName', () => {
        it('should get Name', () => {
            //Arrange
            let testEmployee = new Employee("Jason", 1, "JasonDay@Gmail.com");
            //Act
            let Name = testEmployee.getName();
            //Assert
            expect(Name).toBe("Jason");
        })
    });
    describe('getRole', () => {
        it('should print Employee', () => {
            let testEmployee = new Employee("Jason", 1, "JasonDay@Gmail.com");
            //Act
            let role = testEmployee.getRole();
            //Assert
            expect(role).toBe("Employee");
        })
    });
});