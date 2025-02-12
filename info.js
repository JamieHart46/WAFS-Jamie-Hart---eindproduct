

const baseURL = 'https://fdnd.directus.app/';
const endpointMe = 'items/person/205';
 
const myUrl = baseURL + endpointMe;
 
//MyURL is de baseURL met mijn persoonlijke id erachter zodat mijn gegevens opgehaald kunnen worden. 

getData(myUrl).then(data205 => {
    //console.log(data205);
 
    let custom = data205.data.custom;
    customJSON = JSON.parse(custom);
 
    let leeftijd = customJSON.leeftijd;
    let woonplaats = customJSON.woonplaats;
    let school = customJSON.school;
    let opleiding = customJSON.opleiding;
    let geboortedag = data205.data.birthdate;

    //Variabelen van de bovenstaande onderwerpen worden gelinkt aan de locaties van de de gegevens die staan op FDND.
 
 
    let tableBody = document.querySelector(".apiTable tbody");
 
    // Maak dynamisch rijen voor de tabel
    let tableContent = `
        <tr><td><strong>Leeftijd</strong></td><td>${leeftijd}</td></tr>
        <tr><td><strong>Woonplaats</strong></td><td>${woonplaats}</td></tr>
        <tr><td><strong>School</strong></td><td>${school}</td></tr>
        <tr><td><strong>Studie</strong></td><td>${opleiding}</td></tr>
        <tr><td><strong>Geboortedag</strong></td><td>${geboortedag}</td></tr>
    </tr>
    `;
 
    // Voeg de rijen toe aan de tabel
    tableBody.innerHTML = tableContent;
 
});
 
 
 
async /*9*/ function getData(URL) {
    return ( //8
        fetch(URL) //1
        .then ( //2
            response /*3*/ => response.json() //4
        )
        .then ( //5
            jsonData /*6*/ => {return jsonData} //7
        )
    );
}