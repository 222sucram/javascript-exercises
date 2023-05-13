const findTheOldest = function(obj) {
    //Get this year if person still alive
    const thisYear = new Date
    const living = obj.forEach((person) => !person.yearOfDeath ? person.yearOfDeath = thisYear.getFullYear() : null)

    //Loop though input array and select the difference between dates, reduce arr to largest num
    const getOlder = obj.reduce((acc, curr) => {return curr.yearOfDeath - curr.yearOfBirth > acc.yearOfDeath - acc.yearOfBirth ? curr : acc});

    return getOlder

};

// Do not edit below this line
module.exports = findTheOldest;
