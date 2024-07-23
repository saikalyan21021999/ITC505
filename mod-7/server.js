const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// HTML content for the event delegation part
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>To-Do List</title>
  <style>
    .task {
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>To-Do List</h1>
  <ul id="taskList">
    <li class="task">Task 1</li>
    <li class="task">Task 2</li>
    <li class="task">Task 3</li>
  </ul>
  <script>
    document.getElementById('taskList').addEventListener('click', function(event) {
      if (event.target && event.target.matches('li.task')) {
        event.target.style.color = 'blue';
      }
    });
  </script>
</body>
</html>
`;

// JSON data
const movieData = {
  title: 'Inception',
  director: 'Christopher Nolan',
  year: 2010,
  genre: 'Sci-Fi',
  actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page']
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  
  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
  } else if (parsedUrl.pathname === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Home Page');
  } else if (parsedUrl.pathname === '/json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(movieData));
  } else if (parsedUrl.pathname === '/setcookie') {
    res.writeHead(200, {
      'Set-Cookie': ['name=John; HttpOnly', 'email=john@example.com; HttpOnly'],
      'Content-Type': 'text/plain'
    });
    res.end('Cookies have been set');
  } else if (parsedUrl.pathname === '/getcookie') {
    const cookies = req.headers.cookie;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Cookies: ${cookies}`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found');
  }
});

let port = process.env.PORT || 80;
server.listen(port, () => {
  console.log('Server running at http://localhost:8080/');
});

// Additional HTTP status codes research
const statusCodes = [
  { code: 102, name: 'Processing', purpose: 'Indicates that the server has received and is processing the request, but no response is available yet.' },
  { code: 207, name: 'Multi-Status', purpose: 'Conveys information about multiple resources, typically used in WebDAV.' },
  { code: 418, name: 'I\'m a teapot', purpose: 'An April Fools\' joke from the IETF, indicating the server refuses to brew coffee because it is a teapot.' },
  { code: 422, name: 'Unprocessable Entity', purpose: 'The request was well-formed but was unable to be followed due to semantic errors.' },
  { code: 451, name: 'Unavailable For Legal Reasons', purpose: 'The server is denying access to the resource as a consequence of a legal demand.' }
];

console.log('Additional HTTP status codes research:', statusCodes);
