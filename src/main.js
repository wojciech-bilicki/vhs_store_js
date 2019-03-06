// Variables

const myName = "Wojciech";

// let myAge = 28;
// console.log(myAge);

// myAge = 29;
// console.log(myAge);

// Variable types

const title = "Back to the future";
const numberOfCopiesInStore = 2;
const priceForOneVHS = 45.99;
const wasShownInCinemas = true;

// array
                //0                 //1                 //2
const actors = ["Micheal J. Fox", "Christopher Lloyd", "Lea Thompson", "Crispin Glover"]

// object

const review = {
  description: "It was great!",
  rating: 10
}

const boxOfficePerCountry = [
  {
    countryName: "USA",
    amount: 10000000
  }, 
  { 
    countryName: "Canada",
    amount: 9879878979
  }
]

const boxOfficeInCanada = boxOfficePerCountry[1].amount;
// console.log("Box Office In Canada",boxOfficeInCanada);

// Operators

const totalBoxOffice = boxOfficePerCountry[0].amount + boxOfficePerCountry[1].amount;
console.log(totalBoxOffice);
const boxOfficeDiff = boxOfficePerCountry[0].amount - boxOfficePerCountry[1].amount;
console.log(boxOfficeDiff);

const copiesToOrderFromDistributor = numberOfCopiesInStore * 2;
const halfOfReviewRating = review.rating / 2;

const isRatingEqualToTen = review.rating === "10";
const isRatingEqaulToTenAgain = review.rating == "10";
console.log(isRatingEqualToTen);
console.log(isRatingEqaulToTenAgain);

const isRatingLowerThanFive = review.rating <= 5;
console.log(review.rating >= 10);

const JsPleaseStahp = review + actors;

let IDontKnowWhatThisIs;
console.log(IDontKnowWhatThisIs);
const thisIsNull = document.querySelector('#AJSHJKDGHAJKHSGDKJS');
console.log(1/0); //Infinity
console.log(0/0); //NaN


