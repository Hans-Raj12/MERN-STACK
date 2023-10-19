const express = require('express');
const app = express();
const cors = require('cors');
require('./conn/conn');
const authRoutes = require('./routes/auth');
const listRoutes = require('./routes/list');

app.use(express.json());
app.use(cors());

app.use('/api/v1', authRoutes);
app.use('/api/v2', listRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});
