console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds (count) {
    if (count < 0){
        count = count * -1;
        console.log(count)

        for (let x = 1; x < count + 1; x++) {
            if (x % 2 == 1) {
              console.log(x);
            }
        }
    }

    else {
        for (let x = 1; x < count + 1; x++) {
            if (x % 2 == 1) {
              console.log(x);
            }
        }
    }
    
    
}

printOdds(-55);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge (age) {
    let aboveSixteen = "You Can Drive!";
    let belowSixteen = "Sorry, but you need to wait until you're 16.";

    if (age >= 16) {
       console.log(aboveSixteen)
    }

    else {
        console.log(belowSixteen)
    }
}

checkAge(16);


