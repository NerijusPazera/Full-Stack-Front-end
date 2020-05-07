function fullNameGenerator(firstName, lastName) {
  let name = firstName;
  let surname = lastName;

  function getFullName() {
    return name + ' ' + surname;
  }

  function changeFirstName(newName) {
    name = newName;
  }

  return {getFullName, changeFirstName};
}

const user1 = fullNameGenerator('Nerijus', 'Pazera');

console.log(user1.getFullName());
user1.changeFirstName('Nerka');
console.log(user1.getFullName());
