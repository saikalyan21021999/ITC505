const express = require('express')
const logger = require('morgan')
const path = require('path')
const server = express()
server.use(express.urlencoded({'extended': true}))
server.use(logger('dev'))
// Routes
server.get('/do_a_random', (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`)
})
// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, 'public')
server.use(express.static(publicServedFilesPath))
// The server uses port 80 by default unless you start it with the extra
// command line argument 'local' like this:
//       node server.js local
let port = process.env.PORT || 80
if (process.argv[2] === 'local') {
  port = 8080
}
server.listen(port, () => console.log('Ready on localhost!'))

server.post('/ITC505/lab-7/index.html', (req, res) => {
  const { pluralNoun, adjective, verb, number, celebrity } = req.body;

  // Validate if all fields are filled
  if (!pluralNoun || !adjective || !verb || !number || !celebrity) {
    res.send(`
      <h1>Submission Failed</h1>
      <p>Please fill out ALL fields</p>
      <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
    `);
    return;
  }

  // Construct the Mad Libs result
  const madLib = `Be careful not to spill the ${pluralNoun} while carrying them. They are very ${adjective}! Once you ${verb} the ${number} ${pluralNoun}, ${celebrity} will be impressed.`;

  // Send back the response
  res.send(`
    <h1>Mad Libs Result</h1>
    <p>${madLib}</p>
    <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
  `);
});