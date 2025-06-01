const findTheOldest = function(people) {
    let oldestPerson;
    let oldestAge = 0;
    people.forEach(person => {
        let birthDate = new Date(person.yearOfBirth + "-1-1");
        let fullAge;
        if (Object.hasOwn(person, "yearOfDeath")) {
            fullAge = new Date(person.yearOfDeath + "-1-1") - birthDate;
        } else {
            fullAge = new Date(Date.now()) - birthDate;
        }

        if (oldestPerson === undefined || fullAge > oldestAge) {
            oldestPerson = person;
            oldestAge = fullAge;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
