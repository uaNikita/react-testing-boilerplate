const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send(
    `<!doctype html>
       <html>
         <head>
           <link rel="stylesheet" href="/vendors~main.css">
         </head>
         <div id="root" class="container"></div>
         <script src="/vendors.js"></script>
         <script src="/main.js"></script>
      </html>`
  );
});

server.listen(5050);
