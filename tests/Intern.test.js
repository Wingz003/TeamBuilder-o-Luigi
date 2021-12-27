const Intern = require("../library/Intern");

describe('Intern Tests', () => {
    it('should give roleSpecificInfo', () => {
        //Arrange
        let intern = new Intern("Name", 3, "Intern@abc.com", "mySchool");
        //Act
        let info = intern.getRoleSpecificInfo();
        //Assert
        expect(info).toBe("School: mySchool");
    })
    it('should get Card', () => {
        //Arrange
        let intern = new Intern("Name", 3, "Intern@abc.com", "mySchool");
        //Act
        let card = intern.getCard();
        //Assert
        expect(card).toContain("School: mySchool");
        expect(card).toContain("ID: 3");
        expect(card).toContain("Email: Intern@abc.com");
    })
});