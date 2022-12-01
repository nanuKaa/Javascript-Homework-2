//1.
let array = [
  { name: "Temo", age: 25 },
  { name: "Lasha", age: 21 },
  { name: "Ana", age: 28 },
];
function minAge(array){
  let age = array[0].age;
  let name;
  for (let fildName of array) {
    if(fildName.age < age){
      age = fildName.age;
      name = fildName.name;
    }
  }
  return name;
}
console.log(minAge(array)); // Lasha



///2.
const user = {
  firstName: "Nanuka",
  lastName: "Roinishvili",
  age: "24",
};
  let user2 = user
  function changeObject(user){
  const user= Object.assign(user2);
    
}
console.log(user2); //{ firstName: 'Nanuka', lastName: 'Roinishvili', age: '24' }

///3

function randomNumber() {
  return parseInt(Math.random() * 6) + 1;
}

function dice() {
  do {
    let playerA = randomNumber();
    let playerB = randomNumber();

    if (playerA === 3) {
      return "Player A is the winner";
    }
    if (playerB === 3) {
      return "Player B is the winner";
    }
    if (playerA === 3 && playerB === 3) {
      return "draw";
    }
  } while (true);
}
console.log(dice());

