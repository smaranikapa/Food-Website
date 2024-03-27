//map

var myArray = [1, 2, 3, 4, 5];
var multipliedArray = myArray.map(function(element) {
    return element * 2;
});
console.log(multipliedArray);

// filter

var myArray = [1, 2, 3, 4, 5];
var evenNumbers = myArray.filter(function(element) {
    return element % 2 === 0;
});
console.log(evenNumbers);

//reduce

var myArray = [1, 2, 3, 4, 5];
var sum = myArray.reduce(function(acc, cur) {
    return acc + cur;
}, 0);
console.log(sum);

// every

const surveyors = [
    { name: "Steve", answer: "Yes"},
    { name: "Jessica", answer: "Yes"},
    { name: "Peter", answer: "Yes"},
    { name: "Elaine", answer: "No"}
  ];
  
  
  let boolVal=surveyors.every(surveyor=>surveyor.answer==="Yes")
  console.log(boolVal)
  

  //regx

  // program to validate the email address

function validateEmail(email) {

    // regex pattern for email
    const re = /\S+@\S+\.\S+/g;

    let result = re.test(email);
    if (result) {
        console.log('The email is valid.');
    }
    else {
        let newEmail = prompt('Enter a valid email:');
        validateEmail(newEmail);
    }
}
let email = prompt('Enter an email: ');
validateEmail(email);



class Person {
    constructor(nickname, favUtensil) {
      this.nickname = nickname
      this.favUtensil = favUtensil
    }
  
    eatsCereal() {
      return `${this.nickname} eats cereal with ${this.favUtensil}`
    }
    
    operate() {
      return 'umm, I am not a doctor. I don\'t do this.'
    }
  }
  
  class Doctor extends Person {

    static all = [];

    #degree;
  
    constructor(nickname, favUtensil, name, color, specialty) {
      super(nickname, favUtensil)
      this.name = name
      this.scrubs = color
      this.#degree = 'MD'
      this.specialty = specialty
      Doctor.all.push(this)
    }
  
    
  medicalLicense(){
      return `${this.name}, ${this.#degree}`
    }
    
  
    static findDocBySpecialty(specialty) {
      const foundDoc = Doctor.all.find((doctor) => doctor.specialty === specialty)
      return foundDoc ? foundDoc.name : null
    }
  
    static operate(specialty) {
      if (
        this.findDocBySpecialty(specialty) &&
        specialty === 'orthopedicSurgeon'
      ) {
        return `${this.findDocBySpecialty(specialty)}, ${specialty}, is drilling into bones`
      } else if (
        this.findDocBySpecialty(specialty) &&
        specialty === 'neoNatalSurgeon'
      ) {
        return `${this.findDocBySpecialty(specialty)}, ${specialty}, is operating on a tiny heart`
      } else return 'Nope, not operating.'
    }
  
  }
  
  const drMontgomery = new Doctor('addie', 'chopsticks', 'Addison Montgomery', 'pink', 'neoNatalSurgeon')
  const Shelby = new Person('Shel', 'teaspoon')
  
  console.log(drMontgomery.medicalLicense()) 
  
  console.log(Shelby.eatsCereal()) 
  console.log(drMontgomery.eatsCereal()) 
  
  console.log(Shelby.operate())
  console.log(Doctor.operate('neoNatalSurgeon'))
