// VARIABLES

let name = "Rob";
let age = 33;
let birthday = "June 23";
let detroitGC = true;
let lifeEvents = ["I went to MSU", "I have a baby boy named Elliott", "My most recent vacation was in key West", "I like to cook and read"];

// IF ELSE

if (detroitGC === true) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit Michigan. I am currently ${age} and my birthday is ${birthday}.`);
}
else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids. I am currently ${age} and my birthday is ${birthday}.`);
}

// LIFE EVENTS

for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}


// RANDOM NUMBER LOOP

var counter = 0;


while (true) {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber !== 5) {
        counter++;
        console.log(`${randomNumber} !==5 `);
    }
    else {
        counter++
        console.log(`5 === 5. It took ${counter}
    iterations to randomly generate the number 5.`); { break };
    };
}

