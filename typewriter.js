

const animation = function() {

const sentence = "hello there from lighthouse labs";

let delay = 0;

for (const char of sentence) {
  
  setTimeout(() => {

    process.stdout.write(char)

  }, delay += 50)

}

setTimeout(() => {

  process.stdout.write(('\n'));

}, 2000);

}

animation()