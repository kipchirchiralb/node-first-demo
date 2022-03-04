const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method to return system uptime i seconds
console.log(`System uptime is ${os.uptime()} seconds`)


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    host: os.hostname()
}

console.log(currentOS)