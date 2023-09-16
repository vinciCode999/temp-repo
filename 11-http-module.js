const http = require('http')
const server = http.createServer((req, res)=>{
    if (req.url === '/products'){
        const productPage = `<h1>Products/service page</h1>
        <ul>
            <li>Fruits</li>
            <li>Tractors</li>
            <li>Rockets</li>
            <li>Cars</li>
            <li>Hotels</li>
        </ul>
        `
        res.write(`${productPage}`)
        res.end()
    }

    if (req.url === '/about'){
        res.write(`
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eius quia praesentium temporibus consectetur nemo doloribus soluta eum eligendi sed impedit voluptas eveniet illum nam blanditiis quaerat minima minus aliquid perferendis cum autem,
             quidem obcaecati? Tenetur iure quisquam culpa obcaecati totam modi voluptate perferendis 
            dignissimos illum?
        </p>`)
    }
    if (req.url==='/'){
        res.write(`<h1>Welcome to home page</h1>`)
    }

    res.end(`<h1>oops!</h1>
    <p>can't find page you requested</p>
    <a href="/">back to home</a>`)
})
console.log('server running...')

server.listen(3333)