const express = require('express');


const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
require('./db/connect');

const app = express();

app.use(express.json());
app.use('/', authRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));