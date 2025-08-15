const express = require('express');


const dotenv = require('dotenv');

dotenv.config();
require('./db/connect');
const authRoutes = require('./routes/authRoutes');
const app = express();

app.use(express.json());
app.use('/', authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));