// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,  required: true,
//   },
//   userName: {
//     type: String,  required: true, unique: true,
//   },
//   password: {
//     type: String,  required: true,
//   },
//   favorite: [{
//     type: mongoose.Schema.Types.ObjectId, ref: 'CryptoModel', 
//   }]
// }, {
//   timestamps: true,
//   toJSON: {
//     transform: (doc, ret) => {
//       delete ret.password;
//     }
//   }
// });

// // Pre-save hook to hash password
// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();

//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     next(error);
//   }
// });


// const Users = mongoose.model('User', userSchema);
// module.exports = Users