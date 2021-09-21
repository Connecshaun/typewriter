const sentence = "hello there from lighthouse labs";

// setTimeout(() => {
//   for (const char of sentence) {
//     process.stdout.write(char);
//   }
// }, 1000);

let delay = 0;

for (const char of sentence) {

  setTimeout(() => {

    process.stdout.write((char));

  }, delay); //puts delay in

  delay += 50 //specifies the time interval to iterate between each letter;
}


setTimeout(() => {

  process.stdout.write(('\n'));

}, delay);
