const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// #2
const threeLanguages = users.filter(function(user) {
    return user.languages.length > 2;
});
console.log(threeLanguages);


//#3
const emailAddress = users.map(function(user){
    return user.email
});
console.log(emailAddress);



//#4
const sum = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
console.log(sum);

let average = sum / users.length;
console.log(average);


//#5

const longestEmail = users.reduce(function (currentLongestEmail, user){
    if(user.email.length > currentLongestEmail.email.length){
        return user
    } else{
        return currentLongestEmail
    }
},users[0])
console.log(longestEmail.email);


//#6

const userNames = users.reduce(function (accumulator, user){
    if (accumulator === ''){
        return "Your instructors are: " + user.name
    } else {
        return accumulator + ', ' + user.name;
    }

}, '')

console.log(userNames + ".");


//#Bonus


let concatLanguages = users.reduce(function (accumulator, user){
    return accumulator.concat(user.languages);
}, []);

console.log(concatLanguages);

let uniqueLanguages = concatLanguages.reduce(function(accumulator, currentValue){
    if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
    }
        return accumulator;

}, [])

console.log(uniqueLanguages);