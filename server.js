const http = require('http')
const fs = require('fs')
const args = require('minimist')(process.argv.slice(2))
const port = args.port || process.env.port

fs.readFile('./public/index.html', 'utf8', (err, data) => {
    if(err){
        console.error(err)
        process.exit(0)
    }
})

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(data)
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
}) 