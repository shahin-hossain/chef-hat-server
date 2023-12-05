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

//chef data id wise
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const chef = chefs.find(chef => chef.id === parseInt(id));
    res.send(chef);
})

//port setup
app.listen(port, () => {
    console.log(`chef-hut server port is ${port}`)
})

