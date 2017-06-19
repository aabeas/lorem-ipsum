const express = require('express');
const app = express();
var loremIpsum = require('lorem-ipsum')
  , output     = loremIpsum({
          count: 3,
          units: 'paragraphs',
          format: 'html',
          suffix: '<br/>'
  });

app.use( express.static('public'))

app.get('/', function(req, res) {
  console.log('out dat lorem')
  res.send('Hello World');
})

app.get('/lorem', function(req, res) {
  console.log('up in dat lorem')
  res.send(output);
})

app.listen(3000, function() {
  console.log('Successfully started express application!')
});
