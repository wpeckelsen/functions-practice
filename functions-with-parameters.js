/* Opdracht 0: voorbeeld */
// Schrijf een functie genaamd add, die twee getallen verwacht, die bij elkaar optelt en teruggeeft
// ---- Verwachte uitkomsten:
// add(1, 4) geeft 5
// add(2, 5) geeft 7

function add(a, b) {
  return a + b;
}

const result = add(1, 4);
console.log(result);

/* Opdracht 1 */
// Schrijf een functie genaamd greeter, die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// greeter("Jan") geeft "Hoi Jan!"
// greeter("Kees") geeft "Hoi Kees!"

function greeter (name) {
  return "hoi " + name + "!";
}

const nameGreeter = greeter('Gaaaans');
console.log(nameGreeter);

/* Opdracht 2 */
// Schrijf een functie genaamd minutesToSeconds, die een hoeveelheid minuten verwacht (als een getal) en teruggeeft hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// minutesToSeconds(1) geeft 60
// minutesToSeconds(3) geeft 180
// minutesToSeconds(23) geeft 1380

function minutesToSeconds (mins) {
  return mins * 60;

}

const calc = minutesToSeconds(3);

console.log(calc);


/* Opdracht 3 */
// Schrijf een functie genaamd merge, die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Let op: je mag hier geen String methoden voor gebruiken zoals concat().
// ---- Verwachte uitkomsten:
// merge("abra", "cadabra") geeft "abracadabra"
// merge("zoet", "sappig") geeft "zoetsappig"

function merge (partOne, partTwo) {
  return partOne + partTwo

}

const mergedWords = merge ('abra', 'cadabra');
const mergedWords2 = merge('zoet', 'sappig');

console.log(mergedWords);
console.log(mergedWords2);




/* Opdracht  4 */
// Schrijf een functie genaamd calculateDogYears die de hondenleeftijd verwacht en dit omrekent naar
// mensenjaren (1 tot 7). Op basis daarvan wordt een zinnetje teruggegeven.
// ---- Verwachte uitkomsten:
// calculateDogYears(6) geeft "Jouw hond is 42 jaar oud in mensenjaren."
// calculateDogYears(2) geeft "Jouw hond is 14 jaar oud in mensenjaren."

function calculateDogYears(dogYears){
  return dogYears * 7;
}

function calculateDogYearsB (dogYearsB){
  const humanInDogsB = dogYearsB * 7;
  return "Jouw hond is " + humanInDogsB + " jaar oud in mensenjaren!";
}



const calc1 = calculateDogYears(6)
const calc2 = "Jouw hond is " + calculateDogYears(2) + " jaar oud in mensenjaren!";
const calc3 = calculateDogYearsB(5);


console.log( "Jouw hond is " + calc1  + " jaar oud in mensenjaren!");
console.log(calc2);
console.log(calc3);




/* Opdracht 5 */
// Schrijf een functie genaamd wrapper, die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// wrapper("bril", "*") geeft "*bril*"
// wrapper("beep", "_") geeft "_beep_"
// wrapper("kaas", "Q") geeft "QkaasQ"

function wrapper(wordOne, wordTwo) {
  const wrapped = wordOne + wordTwo + wordOne;
  return wrapped;
}

console.log(wrapper('*','bril' ));


const wrapped = wrapper('_', 'beep');
console.log(wrapped);



/* Bonus opdracht  */
// Schrijf een functie genaamd createDetailString, die een object met de properties firstName, lastName en profession verwacht en een zin teruggeeft
// ---- Verwachte uitkomsten:
// createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'}) geeft "Het beroep vam Jan Jansen is docent."
// createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}) geeft "Het beroep vam Kees Klaasen is brandweerman."

function createDetailString (firstName, lastName, profession) {
  return "het beroep van " + firstName + lastName + " is " + profession
};


const infoCreated = createDetailString('Jan ', 'Jansen', 'Docent');

console.log(infoCreated);