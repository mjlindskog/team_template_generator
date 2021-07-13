// basic page tmeplate with container ready for generated cards to be inserted
const pageTemplate = function(teamCards) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"
    >
    <link rel="stylesheet" href="./styles.css">
    <title>My Team</title>
</head>
<body>
    <div class="jumbotron bg-danger text-center text-white p-5 mb-4">
        <h1>My Team</h1>
    </div>
    <div class="container d-flex justify-content-center">
        ${teamCards}
    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
    integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
    integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
    crossorigin="anonymous"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
</html>
    `
};

// card created if the manager choice is made
const managerCard = function(manager) {
    return `
    <div class="card col-3 mt-3 mx-2">
        <div class="card-header bg-primary text-white">
            <h1>${manager.name}</h1>
            <h2><i class="fas fa-mug-hot"></i> Manager</h2>
        </div>
        <div class="card-body py-4 px-3">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email}" target="_blank">${manager.email}</a></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
    `
};

// card created if the engineer choice is made
const engineerCard = function(engineer) {
    return `
    <div class="card col-3 mt-3 mx-2">
        <div class="card-header bg-primary text-white">
            <h1>${engineer.name}</h1>
            <h2><i class="fas fa-glasses"></i> Engineer</h2>
        </div>
        <div class="card-body py-4 px-3">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email}" target="_blank">${engineer.email}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
            </ul>
        </div>
    </div>
    `
};

// card created if the intern choice is made
const internCard = function(intern) {
    return `
    <div class="card col-3 mt-3 mx-2">
        <div class="card-header bg-primary text-white">
            <h1>${intern.name}</h1>
            <h2><i class="fas fa-user-graduate"></i> Intern</h2>
        </div>
        <div class="card-body py-4 px-3">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.email}" target="_blank">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
    `
};

generatePage = (teamArray) => {
    // blank array for all different cards to be joined into
    cards = [];
    for(let i=0; i < teamArray.length; i++) {
        
        const teamPosition =teamArray[i].getRole();

        if(teamPosition === 'Manager') {
            //contents in the manager card will be matched with the user inputs and put in the cards array
            cards.push(managerCard(teamArray[i]));
        }

        if(teamPosition === 'Engineer') {
            //contents in the engineer card will be matched with the user inputs and put in the cards array
            cards.push(engineerCard(teamArray[i]));
        }

        if(teamPosition === 'Intern') {
            //contents in the engineer card will be matched with the user inputs and put in the cards array
            cards.push(internCard(teamArray[i]));
        }
    };

    // all cards created will be able to be inserted into the template
    const teamCards = cards.join('')

    const createPage = pageTemplate(teamCards);



    return createPage;
};

module.exports = generatePage;