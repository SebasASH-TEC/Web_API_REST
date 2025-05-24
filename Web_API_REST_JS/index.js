const express = require('express');
// Removed body-parser as it is no longer necessary
const linkedListRoutes = require('./routes/linkedListRoutes');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/linked-list', linkedListRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}.`)
});
