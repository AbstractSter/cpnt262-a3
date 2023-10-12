// Create an array
const userNames = ["Sterling", "Conrad", "Nancy"];

// Create objects within the arrays
const users = [
  {
    firstName: "Sterling",
    lastName: "Smith",
    age: 31,
    hairStyle: "Short",
    email: "sterling@gmail.com",
  },
  {
    firstName: "Conrad",
    lastName: "Smith",
    age: 33,
    hairStyle: "Bald",
    email: "conrad@gmail.com",
  },
  {
    firstName: "Nancy",
    lastName: "Smith",
    age: 66,
    hairStyle: "Long",
    email: "nancy@gmail.com",
  }
];

// Extract specific info
// const ageOutput = document.getElementById("output");

// ageOutput.innerHTML = users[0].firstName + " is " + users[0].age + " years old.";

// Add to an array
userNames.push("Greg");

document.getElementById("output").innerHTML = userNames;









