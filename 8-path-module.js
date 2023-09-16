const path = require('path')

//shows a path separater '/'
console.log(path.sep)

//join paths
const filepath = path.join('/content','subfolder/','test.txt')
console.log(filepath)


//basename
const base = path.basename(filepath)
console.log(base)

//absolute path
const absolute = path.resolve(filepath)
console.log(absolute)
//best absolute path
const absolute1 = path.resolve(__dirname,'content', 'subfolder', 'test.txt')
console.log(absolute1)
