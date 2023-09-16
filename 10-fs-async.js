const {readFile, writeFile, appendFile, readFileSync} = require('fs')

//nesting readfile()

readFile('./content/first.txt','utf8', (err, data)=>{
    if (err){
        console.log(err)
        return
    }
    const result1 = data
    
    readFile('./content/second.txt', 'utf8', (err, data)=>{
        if (err){
            console.log(err)
            return
        }
        const result2 = data

        writeFile('./content/result-async.txt', `the result:
        ${result1},
        ${result2}`, (err)=>{
            if (err) console.log(err);
            console.log('created file')
    
        })
    })

   
})