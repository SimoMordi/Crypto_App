const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Cryptocurrency name is required'],
  },
  symbol: {
    type: String,
    required: [true, 'Cryptocurrency symbol is required'],
   
  },
  price: {
    type: mongoose.Schema.Types.Decimal128,
    required: [true, 'Cryptocurrency price is required'],
    min: [0, 'Cryptocurrency price must be a positive number'],
  },
  amount: {
    type: Number,

  }
  // orderType: {
  //   type: String,
  //   enum: ['buy', 'sell'],
  //   required: true
  // }
});

// Adding an index to the symbol field for faster queries
cryptoSchema.index({ symbol: 1 });

const currencyModel = mongoose.model('Cryptocurrency', cryptoSchema);
module.exports = currencyModel;
