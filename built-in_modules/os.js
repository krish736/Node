const os = require('os')

const user = os.userInfo()
console.log(user);

console.log(`system uptime : ${os.uptime()} seconds`);


const CurrentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(CurrentOS);