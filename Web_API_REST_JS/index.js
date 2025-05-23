const express = require('express');
const bodyParser = require('body-parser');
const linkedListRoutes = require('./routes/linkedListRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/linked-list', linkedListRoutes);

app.listen(port, () => {
    console.log(Server running on port \)
});
