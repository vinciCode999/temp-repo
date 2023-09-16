//obj{}
const names = require('./3-names-module')
//fx()
const greet = require('./2-utils')
const altFlavour = require('./5-alternative-flavour')

//will display result even not the fx() and vars in dir './6-mind-grenade' is !exported 
require('./6-mind-grenade')

console.log(altFlavour.singleFruit['fruit name'])
console.log(altFlavour.items[0])



//console.log(names)
//greet(names.Nathan)