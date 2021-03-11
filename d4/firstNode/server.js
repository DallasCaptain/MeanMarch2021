const http = require('http')
const fs = require('fs')

const server = http.createServer(function(req, res){
    console.log('new request')


    if(req.url === '/'){
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write('Hello Class')
        res.end()
    }else if(req.url === '/home'){
        fs.readFile('index.html','utf8',function(err, content){
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write(content)
            res.end()
        })

    }
    else{
        res.writeHead(404)
        res.end('Not ready for production yet')
    }
    
    console.log('response sent')
})

server.listen(8000)

console.log('running on port 8000')