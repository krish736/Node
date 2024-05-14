const names = require('./name');
const SayHi = require('./utils')

SayHi('susan')
SayHi(names.Peter)
SayHi(names.John)

const data = require('./alternate')
console.log(data);

require('./fnInvoke')
