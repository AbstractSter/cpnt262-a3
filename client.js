// Create an array
const userNames = ["Sterling", "Conrad", "Nancy", "Jared", "Eva"];

// Create objects within the arrays
const users = [
  {
    firstName: "Sterling",
    lastName: "Smith",
    age: 31,
    hairStyle: "short",
    email: "sterling@gmail.com",
  },
  {
    firstName: "Conrad",
    lastName: "Smith",
    age: 33,
    hairStyle: "bald",
    email: "conrad@gmail.com",
  },
  {
    firstName: "Nancy",
    lastName: "Smith",
    age: 66,
    hairStyle: "long",
    email: "nancy@gmail.com",
  },
  {
    firstName: "Jared",
    lastName: "Smith",
    age: 26,
    hairStyle: "short",
    email: "jared@gmail.com",
  },
  {
    firstName: "Eva",
    lastName: "Smith",
    age: 22,
    hairStyle: "long",
    email: "conrad@gmail.com",
  },
];

// Extract specific info
const ageOutput = document.getElementById("output");
ageOutput.innerHTML = users[0].firstName + " is " + users[0].age + " years old.";

// Add to an array
userNames.push("Greg");
document.getElementById("output1").innerHTML = userNames;
console.log(userNames);

// Remove from an array
userNames.pop();
document.getElementById("output2").innerHTML = userNames;
console.log(userNames);

// Slice
userNames.slice(2);
document.getElementById("output3").innerHTML = userNames;
console.log(userNames.slice(2));

// Find
const findUser = function(user){
  return user == 'Sterling';
};

document.getElementById("output4").innerHTML = userNames.find(findUser);

// Create and log an array of values
const sterling  = {
  firstName: "Sterling",
  lastName: "Smith",
  age: 31,
  hairStyle: "short",
  email: "sterling@gmail.com",
};

console.log(Object.values(sterling));

document.getElementById("output5").innerHTML = Object.values(sterling);

// Create an array of all the keys of your object
const conrad = {
  firstName: "Conrad",
  lastName: "Smith",
  age: 33,
  hairStyle: "bald",
  email: "conrad@gmail.com",
};

console.log(Object.keys(conrad));

document.getElementById("output6").innerHTML = Object.keys(conrad);

// Create a nested array from your object
const nancy =  {
  firstName: "Nancy",
  lastName: "Smith",
  age: 66,
  hairStyle: "long",
  email: "nancy@gmail.com",
};

for (const [key, value] of Object.entries(nancy)) {
  console.log(`${key}: ${value}`);
};

document.getElementById("output7").innerHTML = Object.entries(nancy);









