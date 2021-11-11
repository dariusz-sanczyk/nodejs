const name = process.argv[2]

let message

if (name) {
    message = "hello " + name
} else {
    message = "hello world"
}

console.log(message)
