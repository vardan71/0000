const port = 3001
const express = require('express')
const cors = require('cors')
const db = require('./db.js')
const Numbers = require('./models/Numbers.js')

const app = express()
app.use(cors({ origin: 'http://localhost:3000' }));

db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(error => console.error(error));

app.get('/', async (req, res) => {
    try {
        const user = await Numbers.findAll()
        res.end(JSON.stringify(user, null, 3));
    }
    catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
})

app.post('/add', async (req, res) => {
    const data = {
        nums: req.query.random
    }

    let { id, nums } = data

    Numbers.create({
        id,
        nums
    })

})

app.delete('/delete', (req, res) => {
    // const data = {
    //     nums: req.query.random
    // }

    // let { id, nums } = data
    
    db.query('TRUNCATE numbers RESTART IDENTITY')
    console.log(req.query)
})

app.listen(port, () => {
    console.log('Server is running ');
})