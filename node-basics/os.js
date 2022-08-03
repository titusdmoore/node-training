const os = require('os');

// current user
const user = os.userInfo();

console.log(user)

// method returns system uptime
console.log(`System uptime is ${os.uptime} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOS);