let http = require('http')
let data = require('./src/utils/data')

http.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes('/rickandmorty/character')){
        let id = req.url.toString().split('/').pop()
        id = id - 1
        let character = data[id]
        if(character){
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify(character))
        }else{
            res.writeHead(404,{'Content-Type':'text/plain'})
            res.end('Data not Found')
        }
        return;
    }
}).listen(3001,'localhost')


