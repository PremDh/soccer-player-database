// Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

//const soccer_url = 
// Create HTTP server
const server = http.createServer((req, res) => {

   // Set the response HTTP header with HTTP status and Content type
   res.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body "Hello World"
   res.end('Hello World\n');
   for(i = 0; i < 10; i++){
      res.end('' + i);
   }
});


const request = require('request');

const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v2/fixtures/team/33/next/10',
  qs: {timezone: 'Europe/London'},
  headers: {
    'x-rapidapi-key': 'ba689923a0msh18359f62f7ea367p19055djsn0391825aa3a3',
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);

})