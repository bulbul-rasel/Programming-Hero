const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

const users = [
    { id: 1, name: "sabana", email: "sabana@gmail.com", phone: "01234567890" },
    { id: 2, name: "sabnoor", email: "sabnoor@gmail.com", phone: "01234567890" },
    { id: 3, name: "sunidhi", email: "sunidhi@gmail.com", phone: "01234567890" },
    { id: 4, name: "raj", email: "raj@gmail.com", phone: "01234567890" },
    { id: 5, name: "alom", email: "alom@gmail.com", phone: "01234567890" },
    { id: 6, name: "mou", email: "mou@gmail.com", phone: "01234567890" },
    { id: 7, name: "sani", email: "sami@gmail.com", phone: "01234567890" }
]

app.get('/users', (req, res) => {
    // filtered by seatch query parameter 
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    } else {

        res.send(users)
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.get('/', (req, res) => {
    res.send('Look Mama! I can code Node Now..!!!')
});

app.listen(port, () => {
    console.log('Listening to port', port);
});