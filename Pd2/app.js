// Zadanie 1

// const utils = require("./utils")

// const someArray = ['ala', 3, 'ma', 'kota', 2, 'ala', 5, 3];

// const funcResult = utils.uniq(someArray);

// console.log(funcResult);

// Zadanie 2 

// const utils = require("./utils")

// const tabA = ['ala', 'ma', 'kota'];
// const tabB = ['ala', 'ma', 'psa'];

// console.log(utils.diff(tabA, tabB));
// console.log(utils.diff(tabB, tabA));

// Zadanie 3 

// const _ = require('lodash');

// const someArray = ['ala', 3, 'ma', 'kota', 2, 'ala', 5, 3];

// const funcResult = _.uniq(someArray);

// console.log(someArray);
// console.log(funcResult);

// const tabA = ['ala', 'ma', 'kota'];
// const tabB = ['ala', 'ma', 'psa'];

// console.log(_.difference(tabA, tabB));
// console.log(_.difference(tabB, tabA));

// Zadanie 4

// const numbArray = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8,];

// const _ = require('lodash');

// let max = _.max(numbArray);
// let min = _.min(numbArray);

// console.log(max);
// console.log(min);


// Zadanie 5 

// Done 

// Zadanie 6 

// const math = require('./math');
// const yargs = require('yargs');

// const args = yargs.argv;

// const a = args.a;
// const b = args.b;
// const operator = args.operator;

// let result;

// switch (operator) {
//     case '+':
//         result = math.add(a, b);
//         break;
//     case '-':
//         result = math.sub(a, b);
//         break;
        
//     case '*':
//         result = math.mul(a, b);
//         break;
            
//     case '/':
//         result = math.div(a, b);
//         break;
// }

// console.log("Wynik to:", result);


// Zadanie 7 

// const fs = require('fs');

// const user = {
//     name: 'Jan',;
//     lastName: 'Nowak';
// };

// fs.writeFileSync('user.json', (JSON.stringify(user)));


// Zadanie 8 
// const fs = require('fs');
// const yargs = require('yargs');
// const args = yargs.argv;

// const user = {
//     name: args.name,
//     lastName: args.lastName,
// }

// fs.writeFileSync('users.json', (JSON.stringify(user)));

// Zadanie 9  

const fs = require('fs');
const yargs = require('yargs');
const args = yargs.argv;

const newName= args.name
const newlastName = args.lastName

let user = {
    name: 'Jan',
    lastName: 'Nowak',
}
 console.log(user.name)

user.name = newName
user.lastName = newlastName

fs.writeFileSync('users1.json', (JSON.stringify(user)));