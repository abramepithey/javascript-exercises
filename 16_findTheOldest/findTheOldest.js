const calculateAge = function(person) {
    return (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if (calculateAge(person) > calculateAge(oldest))
            return person;
        else
            return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
