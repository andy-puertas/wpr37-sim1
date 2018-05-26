const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive')
const port = 3005
const app = express();
const ctrl = require('../server/controller.js')
require('dotenv').config()
massive(process.env.CONNECTION_STRING).then(db => app.set('db', db))

app.use(bodyParser.json());

app.get('/api/inventory', ctrl.getInventory)
app.post('/api/product', ctrl.createProduct)



app.listen(port, () => {
    console.log("listening to port: " + port);
})


