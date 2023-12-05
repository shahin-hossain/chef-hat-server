const express = require('express');
const cors = require('cors');

const chefs = require('./data/chefData.json')

const app = express();
const port = 5000;
app.use(cors());


//server running
app.get('/', (req, res) => {
    res.send('chef-hut server is running')
})
//chef data
app.get('/chefs', (req, res) => {
    res.send(chefs);
})



//port setup
app.listen(port, () => {
    console.log(`chef-hut server port is ${port}`)
})

