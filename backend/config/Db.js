const mongoose = require('mongoose');

let connectionString = process.env.MONGO_URL

mongoose.connect(connectionString, {
    
  })
    .then(() => console.log('connected to DATABASE'))
    .catch(err => console.error('Could not connect to MongoDB', err));