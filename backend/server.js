const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('./config/Db.js');
const serverRoutes = require('./serverRoutes.js'); 
const path = require('path');
const PORT = 3000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan('dev'));
app.use(helmet());
app.use('/api', serverRoutes)
// Route handling for static files
app.use(express.static(path.join(__dirname, "../frontend/dist")));





// Catch-all route for SPA
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});





// Start the server
app.listen(PORT, () => {
    console.log(`Server LIVE on: http://localhost:${PORT}`);
});
