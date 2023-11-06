// const Users = require('../models/Users');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const asyncHandler = require('express-async-handler'); 

// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, {
//         expiresIn: '100d' // expiry set to 100 day
//     });
// };

// const getUsers = asyncHandler(async (req, res) => {
//     const users = await Users.find();
//     res.json(users);
// });

// const getUserWithToken = asyncHandler(async (req, res) => {


//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
//     try {
//       const token = req.headers.authorization.split(' ')[1];
      
//     } catch (error) {
//       res.status(401).json({ error: "Not authorized, token failed" });
//     }
//   } else {
//     res.status(401).json({ error: "Not authorized, no token" });
//   }




//     if (!token) {
//         res.status(403).json({ error: "Please include a token" });
//         return;
//     }
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await Users.findById(decoded.id);
//     res.json(user);
// });

// const addUser = asyncHandler(async (req, res) => {
//     const { userName, password } = req.body;

//     const existingUser = await Users.findOne({ userName });
//     if (existingUser) {
//         res.status(400).json({ error: 'User already exists' });
//         return;
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = await Users.create({ ...req.body, password: hashedPassword });
//     res.status(201).json({
//         user: newUser,
//         token: generateToken(newUser._id)
//     });
// });

// const loginUser = asyncHandler(async (req, res) => {
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
  

// const editUser = asyncHandler(async (req, res) => {
//     const updates = req.body;
//     const updatedUser = await Users.findByIdAndUpdate(req.params.id, updates, { new: true });
//     res.json(updatedUser);
// });

// const deleteUser = asyncHandler(async (req, res) => {
//     await Users.findByIdAndDelete(req.params.id);
//     res.status(204).send(); // 204 No Content
// });

// module.exports = {
//     getUsers,
//     addUser,
//     loginUser,
//     editUser,
//     deleteUser,
//     getUserWithToken
// };
