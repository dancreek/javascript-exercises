const findTheOldest = function(people) {
    let oldestPerson = null;
    people.reduce((oldestAge, person) => {
        let age = ('yearOfDeath' in person) ? person.yearOfDeath - person.yearOfBirth : 2021 - person.yearOfBirth;
        if(age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }
        return oldestAge;
    }, 0);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
