//for async methods no callback fx() used
const {readFileSync, writeFileSync} = require('fs')

//reading txt files
const firstTxt = readFileSync('./content/first.txt', 'utf8')
const secondTxt = readFileSync('./content/second.txt', 'utf8')

//writing txt files
const thirdTxt = writeFileSync('./content/third.txt', 'hey i just created my third txt file.')
const fourthAsci = writeFileSync('./content/fourth.asci', "i'm an ascii file")

//{flag: 'a'} for appending
const resultSync = writeFileSync('./content/result-sync.txt', `Result: ${firstTxt}, 
${secondTxt}`, {flag: 'a'})
const firstHtml = writeFileSync('./content/home.html', '<p>this is a paragraph</p>')
