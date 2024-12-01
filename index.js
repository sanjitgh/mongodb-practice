const express = require('express');
const cors = require('cors');
const port = 5000;

const app = express();
// middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to my server')
})

app.get('/users', (req, res) => {
    res.send([])
})

app.post('/users', (req, res) => {
    const user = req.body
})

app.delete('/users/:id', (req, res) => {

})



app.listen(port, () => {
    console.log('Application is runing on port:', port);
})