const { readFile } = require('fs');

console.log('Before first task');

readFile('./content/first.txt', 'utf-8', (err, res) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(res);
  console.log('Completed Task 1');
});

console.log('Post first task');
