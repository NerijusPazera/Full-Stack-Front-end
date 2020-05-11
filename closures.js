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
