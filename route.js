const fs = require('fs')

function requestHandler(req, res){
    const url = req.url
    const method = req.method
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html><head><title>Send Message</title></head>')
        res.write('<body><form action ="/message" method ="POST"><input type ="text" name ="data"><button type ="submit" ></button></form></body>')
        res.write('</html>')
        return res.end()
    }
    
    if(url === '/message' && method === "POST"){
        const body = []
        req.on('data', (chunk)=>{
            body.push(chunk)
        });
    
        req.on('end', () =>{
            const parsBody = Buffer.concat(body).toString()
             const message = parsBody.split('=')[1]
             console.log(message)
             fs.writeFileSync('message.txt', message)
    
    
        })
        fs.writeFileSync('message.text', 'Dummy')
        res.statusCode =302
        res.setHeader('Location', '/')
        return res.end()
    
    }
    
        res.setHeader('Content-Type', 'text/html')
        res.write('<html><head><title>My Node App</title></head>')
        res.write('<body>This is a nodejs app</body>')
        res.write('</html>')
        res.end()
}

module.exports = requestHandler
