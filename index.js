// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, name ){
    return array.filter((item) => item.toLowerCase() === name.toLowerCase());
};
findMatching(drivers,"Bobby")
findMatching(drivers,"Sammy")
findMatching(drivers,"Sally")
findMatching(drivers,"Annette")
findMatching(drivers,"Sarah")


// Check if the driver's name starts with the provided letters
function fuzzyMatch(collection, name){
   return collection.filter((item) => item.toLowerCase().startsWith(name.toLowerCase()));
}

//accesses the data structure to check if name matches
function matchName(collection, name){
    return collection.filter((item) => item.name === name);
}


