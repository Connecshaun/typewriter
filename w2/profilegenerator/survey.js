const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("What's your name? Nicknames are also acceptable:", (nickname) => {
  rl.question("What's an activity you like doing?", (funactivity) => {
    rl.question("What do you listen to while doing that?", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (meal) => {
        rl.question("What's your favourite thing to eat for that meal?", (mealitem) => {
          rl.question("Which sport is your absolute favourite?", (sport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (superpower) => {
              console.log(`Hi! my first name is ${nickname}! And in my spare time I like to ${funactivity}. While having fun with ${funactivity}, I like to play ${music}. My favorite food to eat is ${mealitem} at ${meal}. In fact, I could eat ${mealitem} even at non-meal times. I love to go out and play ${sport} or exercise my ability to ${superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});