const Employee = require('../library/Employee');
const fileGenerator = require('../library/fileGenerator');

describe('File generator tests', () => {

    describe('Generate Cards tests', () => {
        it('should insert a new container every three cards', () => {
            //Arrange
            let employee = new Employee('Luis', 5, 'Wingz@gmail.com');
            let employees = [];
            employees.push(employee);
            employees.push(employee);
            employees.push(employee);
            employees.push(employee);
            employees.push(employee);
            //Act
            let result = fileGenerator.generateCards(employees)
            //Assert
            expect(result).toContain('<div class="row justify-content-center">')
        });
    })
})