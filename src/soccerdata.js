// Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;
const haha = 'lol';
const player = "Reggie Jackson";

//const soccer_url = 
// Create HTTP server
const server = http.createServer((req, res) => {

   // Set the response HTTP header with HTTP status and Content type
   res.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body "Hello World"
   res.end(haha);
   for(i = 0; i < 10; i++){
      res.end('' + i);
   }
});

//first test player
/*
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
/**  */
//second player returned 
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
  params: {league: '39', season: '2020'},
  headers: {
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    'X-RapidAPI-Key': 'edaf27d11fmshb0d383797460812p14a705jsn6dc1c018f5b0'
  }
};


axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

const express = require("express");
const app = express();
  
app.get("/", (req, res) => {
  res.send("Hello there!");
  res.send("HIII")
  res.send(options);
});
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));


const request = require('request');



request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);

})