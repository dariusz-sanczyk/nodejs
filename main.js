//  Zadanie 7

// console.log('start app') ;
// const os = require('os') ;
// const username = os.userInfo().username;
// console.log(username);
// const fs = require('fs');
// fs.writeFileSync('abc.txt', username);

// Zadanie 8
// const fs = require('fs');

// const math = require('./math');
// const a = fs.readFileSync('./a.txt','utf8');

// console.log(a)

// const b = fs.readFileSync('./b.txt','utf8');

// console.log(b)


// console.log("Dodawanie liczb" , a, "i" , b, "daje w wyniku", math.add(a, b));
// console.log("Odejmowanie liczb", a, "i" , b,"daje w wyniku", math.sub(a, b));
// console.log("Mnożenie liczb", a, "i" , b, "daje w wyniku", math.mul(a, b));
// console.log("Dzielenie liczb", a, "i" , b, "daje w wyniku", math.div(a, b));

// const resultAdd = "Dodawanie liczb " + a + " i " + b + " daje w wyniku " + math.add(a, b);
// const resultSub = "Odejmowanie liczb " + a + " i " + b + " daje w wyniku " + math.sub(a, b);
// const resultMul = "Mnożenie liczb " + a + " i " + b + " daje w wyniku " + math.mul(a, b);
// const resultDiv = "Dzielenie liczb " + a + " i " + b + " daje w wyniku " + math.div(a, b);


// fs.writeFileSync('wynik.txt', resultAdd + '\n');
// fs.appendFileSync('wynik.txt', resultSub + '\n');
// fs.appendFileSync('wynik.txt', resultMul + '\n');
// fs.appendFileSync('wynik.txt', resultDiv + '\n');


// Zadanie 9

// const name = process.argv[2]

// let message

// if (name) {
//     message = "hello " + name
// } else {
//     message = "hello world"
// }

// console.log(message)

// Zadanie 10

// const fs = require('fs');

// const math = require('./math');

// const numbA = process.argv[2]
// const numbB = process.argv[3]

// const a = Number(fs.readFileSync(numbA,'utf8'));
// const b = fs.readFileSync(numbB,'utf8');



// console.log("Dodawanie liczb" , a, "i" , b, "daje w wyniku", math.add(a, b));
// console.log("Odejmowanie liczb", a, "i" , b,"daje w wyniku", math.sub(a, b));
// console.log("Mnożenie liczb", a, "i" , b, "daje w wyniku", math.mul(a, b));
// console.log("Dzielenie liczb", a, "i" , b, "daje w wyniku", math.div(a, b));

// const resultAdd = "Dodawanie liczb " + a + " i " + b + " daje w wyniku " + math.add(a, b);
// const resultSub = "Odejmowanie liczb " + a + " i " + b + " daje w wyniku " + math.sub(a, b);
// const resultMul = "Mnożenie liczb " + a + " i " + b + " daje w wyniku " + math.mul(a, b);
// const resultDiv = "Dzielenie liczb " + a + " i " + b + " daje w wyniku " + math.div(a, b);


// fs.writeFileSync('wynik.txt', resultAdd + '\n');
// fs.appendFileSync('wynik.txt', resultSub + '\n');
// fs.appendFileSync('wynik.txt', resultMul + '\n');
// fs.appendFileSync('wynik.txt', resultDiv + '\n');

// Zadanie 12

// const fs = require('fs');

// const fdir = process.argv[2]

// if (process.argv.length < 3) {
//     console.log('zbyt mało parametrów!');
// } else if (process.argv.length > 3) {
//     console.log('zbyt dużo parametrów!');
// } else {

// let filenames = fs.readdirSync(fdir)

// console.log(filenames)

// }

