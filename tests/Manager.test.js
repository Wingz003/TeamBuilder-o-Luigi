const Manager = require("../library/Manager");

describe('Manager Tests', () => {
    it('should give roleSpecificInfo', () => {
        //Arrange
        let manager = new Manager("Name", 4, "Manager@abc.com", "myOfficeNumber");
        //Act
        let info = manager.getRoleSpecificInfo();
        //Assert
        expect(info).toBe("Office Number: myOfficeNumber");
    })
    it('should get Card', () => {
        //Arrange
        let manager = new Manager("Name", 4, "Manager@abc.com", "myOfficeNumber");
        //Act
        let card = manager.getCard();
        //Assert
        expect(card).toContain("Office Number: myOfficeNumber");
        expect(card).toContain("ID: 4");
        expect(card).toContain("Email: Manager@abc.com");
    })
});