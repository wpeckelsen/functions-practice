/* Opdracht 0: voorbeeld */
// Schrijf een functie die de string "Goedemorgen" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Goedemorgen"

function morningGreeter() {
  return "Goedemorgen";
}

const greeting = morningGreeter();

console.log(greeting);

/* Opdracht 1 */
// Schrijf een functie genaamd getSchool, die de string "Novi Hogeschool" teruggeeft
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Novi Hogeschool"

function getSchool() {
  return "novi hogeschool";
}

console.log(getSchool());

/* Opdracht 2 */
// Schrijf een functie genaamd compliment, die jou een complimentje geeft!
// ---- Verwachte uitkomst bij het aanroepen van de functie: "Lekker bezig met die functies, Jan!"

function giveCompliment () {
  return "good work on those functions!";
}

const complimentGiven = giveCompliment();

console.log( complimentGiven);

/* Opdracht 3 */
// Schrijf een functie genaamd getGrades, die een array met de cijfers 8, 8.5, 6 en 7 teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: [8, 8.5, 6, 7]

function getGrades() {
  const grades = [8, 8.5, 6, 7];
  return grades;
}
console.log(getGrades());

const grades = getGrades();
console.log(grades);

/* Opdracht 4 */
// Schrijf een functie genaamd getDetails, die een object met daarin jouw eigen naam en achternaam teruggeeft.
// ---- Verwachte uitkomst bij het aanroepen van de functie: { firstName: 'Jan', lastName: 'Janssen' }

function getDetails () {
  const firstname = "wessel";
  const lastname = "peckelsen";
  return [firstname, lastname];
}

console.log(getDetails())

const myNameIs = getDetails();
console.log(myNameIs);


////////////
function getDetails2() {
  return { firstName: 'Jan', lastName: 'Janssen' };
}

const details = getDetails2();
console.log(details);
console.log(getDetails2());