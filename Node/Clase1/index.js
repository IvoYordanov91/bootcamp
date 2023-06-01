const fs = require("fs");
//HTTP: Modulo que permite intercambio de información del cliente al servidor
const http = require("http");
const PORT = 3000;
//requestHandler: escucha las peticiones que haga el cliente sobre el puerto 3000
//reacciona una vez haya recibido esa petición.
//req: request, petición realizada por el usuario
//res: response, respuesta dada por el servidor al usuario que hizo la petición.
const requestHandler = (req, res) => {
  console.log(req.url);
  fs.readFile("nombres.json", (err, data) => {
  //Indicamos el tipo de respuesta que vamos a devolver. 
  res.setHeader("Content-type", "text/json");
  //indicamos el código de respuesta
  res.writeHead(err ? 500 : 200);
  //finaliza la petición con la respuesta devuelta por el readFile
  res.end(data);
  })

};
const server = http.createServer(requestHandler);
server.listen(PORT, () => {
  console.log(`La URL de conexión es http://localhost:${PORT}`);
});
