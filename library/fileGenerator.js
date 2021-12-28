const fs = require('fs');
let html = '';
function generateFile(employees) {
    generateBeginningHtml();
    generateCards(employees);
    generateEndingHtml();
    fs.writeFile('./output/index.html', html, err => {
        if(err) {
            console.error(err)
            return
        }
    })
}

function generateBeginningHtml() {
    html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Document</title>
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <div class="row justify-content-center">`;
}

function generateCards(employees) {
    for (const employee of employees) {
        html += employee.getCard();
    }
}

function generateEndingHtml() {
    html += `</div> 
    </body>

    </html>`;
}



exports.generateFile = generateFile;