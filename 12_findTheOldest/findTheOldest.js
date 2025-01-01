const findTheOldest = function (people) {
  const oldest = people.reduce(
    (obj, person) => {
      let age = 0;
      if (!person.yearOfDeath) {
        age = new Date().getFullYear() - person.yearOfBirth;
      } else {
        age = person.yearOfDeath - person.yearOfBirth;
      }

      if (age > obj.age) {
        obj.name = person.name;
        obj.age = age;
      }
      return obj;
    },
    { name: "", age: 0 }
  );

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
