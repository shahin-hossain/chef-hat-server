const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.get('/', (req, res) => {
    res.send('chef-hut server is running')
})

app.listen(port, () => {
    console.log(`chef-hut server port is ${port}`)
})

