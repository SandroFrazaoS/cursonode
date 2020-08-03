const http = require("http")  // modulo nativo do node - sao 47 modulos
const host = "127.0.0.1"
const port = 3000

// obs vou criar um servidor, 
// ele recebe solicitaçoes request = req
// e devolve uma respostar = response = res

const server = http.createServer((req, res)=>{

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('ola mundo \n meu primeiro script'); // para o processamento e exibe na tela

});

// preciso ligar o servidor agora - start
// execute node server
// depois http://localhost:3000/
server.listen(port, host, ()=>{

    console.log(`Server running at http://${host}:${port}`)

});

