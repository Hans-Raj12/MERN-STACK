const express = require('express');
const app = express();
require('./conn/conn');
const authRoutes = require('./routes/auth');
const listRoutes = require('./routes/list');



app.get((req, res) => {
    res.send('hello')
});
app.use(express.json());
app.use('/api/v1', authRoutes);
app.use('/api/v2', listRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});
