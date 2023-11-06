const CryptoModel = require('../models/CryptoModel');

const getCryptoById = async (req, res) => {
  const crypto = await CryptoModel.findById(req.params.id);
  if (!crypto) {
    return res.status(404).send({ message: 'Cryptocurrency not found' });
  }
  res.send(crypto);
};

const createCrypto = async (req, res) => {
  const newCrypto = new CryptoModel(req.body);
  const savedCrypto = await newCrypto.save();
  res.status(201).send(savedCrypto);
};

const updateCrypto = async (req, res) => {
  const updatedCrypto = await CryptoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedCrypto) {
    return res.status(404).send({ message: 'Cryptocurrency not found' });
  }
  res.send(updatedCrypto);
};

const deleteCrypto = async (req, res) => {
  const deletedCrypto = await CryptoModel.findByIdAndDelete(req.params.id);
  if (!deletedCrypto) {
    return res.status(404).send({ message: 'Cryptocurrency not found' });
  }
  res.send({ message: 'Cryptocurrency deleted successfully' });
};

module.exports = {
  getCryptoById,
  createCrypto,
  updateCrypto,
  deleteCrypto
};
