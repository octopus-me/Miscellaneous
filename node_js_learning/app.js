const readline = require('readline');


/* LECTURE 4: CODE EXAMPLE
// READING INPUT & WRITING OUTPUT
******************************************
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Please enter your name: ", (name) => {
    console.log("You entered: " + name)
    r1.close();
})

r1.on('close', () =>{
    console.log("Interface closed");
    process.exit(0)
})
*/