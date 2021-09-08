const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world')
})


app.listen(process.env.port || 3000, () => console.log('App is running on port 3000'))
