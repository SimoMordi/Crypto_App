const express = require('express');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
require('./config/Db.js');
const path = require('path');
const CryptoModel = require('./models/CryptoModel.js');
const currencyModel = require('./models/currencyModel.js');

const PORT = 3000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan('dev'));
app.use(helmet());

// Route handling for static files
app.use(express.static(path.join(__dirname, "../frontend/dist")));





// Catch-all route for SPA


app.get('/coins', async (req, res) => {
    let response = await CryptoModel.find()
    res.send(response)
})


app.post('/coins', async (req, res) => {
    //make coin in the database send back to frontend
    let response = await  currencyModel.create(req.body)   
    res.send(response)
})

app.delete('/coins/:id', async (req, res) => {
  
    let deleted = await  currencyModel.findByIdAndDelete(req.params.id);  
    // if (!deletedCrypto) {
    //     return res.status(404).send({ message: 'Cryptocurrency not found' });
    //   }
      res.send({ message: 'Cryptocurrency deleted successfully' });
    })

app.put('/coins/:id' , async (req, res) => {
       let updated = await currencyModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCrypto) {
          return res.status(404).send({ message: 'Cryptocurrency not found' });
        }
        res.send(updated);
      })
      
   
// const generateToken = (id) => {
//         return jwt.sign({ id }, process.env.JWT_SECRET, {
//             expiresIn: '100d' // expiry set to 100 day
//         });
//     };

// app.get('/all',  async (req, res) => {
//     const users = await Users.find();
//     res.send(users);
// });


// app.post('/login', async (req, res) => {
//     const { userName, password } = req.body;
//       // Find the user by username
//     const user = await Users.findOne({ userName });
//     if (user && await bcrypt.compare(password, user.password)) {
//       // If user is found and password is correct
//       // Create a token
//       const token = generateToken(user._id);
//         // Send the token and user info back to the client
//       res.json({
//         user: {
//           id: user._id,
//           userName: user.userName,
//           // include other user fields you want to send back, but not the password
//         },
//         token
//       });
//     } else {
//       // If authentication fails, send an appropriate response
//       res.status(401).json({ error: "Authentication failed" });
//     }
//   });

// app.post('/register', async (req, res) => {
//     const { userName, password } = req.body;

//     const existingUser = await Users.findOne({ userName });
//     if (existingUser) {
//         res.status(400).send({ error: 'User already exists' });
//         return;
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = await Users.create({ ...req.body, password: hashedPassword });
//     res.status(201).send({
//         user: newUser,
//         token: generateToken(newUser._id)
//     });
//     });

//     app.delete('/:id', async (req, res) => {
//    let deleted =  await Users.findByIdAndDelete(req.params.id);
//     res.status(204).send(); 
//     });
       
//     const getUserWithToken = async (req, res) => {
    
//        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//         try {
//           const token = req.headers.authorization.split(' ')[1];
          
//         } catch (error) {
//           res.status(401).json({ error: "Not authorized, token failed" });
//         }
//       } else {
//         res.status(401).json({ error: "Not authorized, no token" });
//       }
    
//         if (!token) {
//             res.status(403).json({ error: "Please include a token" });
//             return;
//         }
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         const user = await Users.findById(decoded.id);
//         res.send(user);
//     };
    
      

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server LIVE on: http://localhost:${PORT}`);
});
