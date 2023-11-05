
const CryptoModel = require('../models/CryptoModel');


const getCryptoById = async (req, res) => {
  try {
    const crypto = await CryptoModel.findById(req.params.id);
    if (!crypto) {
      return res.status(404).send({ message: 'Cryptocurrency not found' });
    }
    res.send(crypto);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createCrypto = async (req, res) => {
  try {
    const newCrypto = new CryptoModel(req.body);
    const savedCrypto = await newCrypto.save();
    res.status(201).send(savedCrypto);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateCrypto = async (req, res) => {
  try {
    const updatedCrypto = await CryptoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCrypto) {
      return res.status(404).send({ message: 'Cryptocurrency not found' });
    }
    res.send(updatedCrypto);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteCrypto = async (req, res) => {
  try {
    const deletedCrypto = await CryptoModel.findByIdAndDelete(req.params.id);
    if (!deletedCrypto) {
      return res.status(404).send({ message: 'Cryptocurrency not found' });
    }
    res.send({ message: 'Cryptocurrency deleted successfully' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getCryptoById,
  createCrypto,
  updateCrypto,
  deleteCrypto
};
