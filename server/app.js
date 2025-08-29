const express = require('express');


const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const mediaRoutes = require('./routes/mediaRoutes');

dotenv.config();
require('./db/connect');

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/media', mediaRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));