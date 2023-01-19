

const collegeFriends = [
    'Sani',
    'Abhi',
    'Zoya',
    'Gopi'
];

const famFriends = [
    'Mehak',
    "Arafath",
    'Sharafath',
    'Kismath'
];


//Using .concat method

const friends = collegeFriends.concat(famFriends);
console.log(friends);

// Using ...spread method

const friendsList = [...collegeFriends,...famFriends];
console.log(friendsList);

// Gneric method

const combineFriends = [];

for( let i=0 ; i<collegeFriends.length ; i++){
    const friend = collegeFriends[i]
    combineFriends.push(friend);
}

for( let i=0 ; i<famFriends.length ; i++){
    combineFriends.push(famFriends[i]);
}

console.log(combineFriends);