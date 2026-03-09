require('dotenv').config();
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const projectRoutes = require('./src/routes/projectRoutes');

const app = express();
app.use(express.json());
app.use(morgan('combined'));

// Registering Routes
app.use('/projects', projectRoutes);

app.get('/', (req, res) => res.send(' Modular API is Running!'));

app.listen(3000, () => console.log('🚀 Server on http://localhost:3000'));