var http = require('http');
http.createServer(function (req, res) {
    res.write('Marcio na WEB'); 
    res.end(); 
}).listen(8080); 
console.log("Abre o endereço no navegador http://localhost:8080")