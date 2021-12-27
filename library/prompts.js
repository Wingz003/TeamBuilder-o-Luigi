

const managerQuestions = [
    {
        type: 'input',
        message: 'Enter the team manager\'s name.',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter the team manager\'s employee ID.',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Enter the email address of Manager.',
        name: 'email',
        
    },
    {
        type: 'input',
        message: 'Enter Manager\'s office number.',
        name: 'officeNumber',
        
    },
   
];

const menuOptions = [
    {
        type: 'list',
        message: 'Choose an option to proceed',
        name: 'menuChoice',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish']
    }

];

const engineerQuestions = [
    {
        type: 'input',
        message: 'Enter the team engineer\'s name.',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter the team engineer\'s employee ID.',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Enter the email address of engineer.',
        name: 'email',
        
    },
    {
        type: 'input',
        message: 'Enter engineer\'s github username.',
        name: 'username',
        
    },
];

const internQuestions = [
    {
        type: 'input',
        message: 'Enter the intern\'s name.',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Enter the intern\'s employee ID.',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Enter the email address of the intern.',
        name: 'email',
        
    },
    {
        type: 'input',
        message: 'Enter intern\'s school.',
        name: 'school',
        
    },
];


exports.managerQuestions = managerQuestions;
exports.internQuestions = internQuestions;
exports.engineerQuestions = engineerQuestions;
exports.menuOptions = menuOptions;