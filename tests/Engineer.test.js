const Engineer = require("../library/Engineer");

describe('Engineer Tests', () => {
    it('should give roleSpecificInfo', () => {
        //Arrange
        let engineer = new Engineer("Name", 2, "Engineer@abc.com", "myGitHub");
        //Act
        let info = engineer.getRoleSpecificInfo();
        //Assert
        expect(info).toBe("Github: myGitHub");
    })
    it('should get Card', () => {
        //Arrange
        let engineer = new Engineer("Name", 2, "Engineer@abc.com", "myGitHub");
        //Act
        let card = engineer.getCard();
        //Assert
        expect(card).toContain("Github: myGitHub");
        expect(card).toContain("ID: 2");
        expect(card).toContain("Email: Engineer@abc.com");
    })
});