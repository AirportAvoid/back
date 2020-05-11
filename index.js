const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const routers = require('./src/routes/prevision.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(routers);

const port = process.env.PORT || 9944;

app.listen(port, ()=> {
  console.log('server listening');
});