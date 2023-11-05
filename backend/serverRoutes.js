// cryptoRoutes.js
const express = require('express');
const router = express.Router();

const {
  getCryptoById,  createCrypto,
    updateCrypto, deleteCrypto
} = require('./controllers/cryptoControl');

router.get('/cryptocurrencies/:id', getCryptoById);
router.post('/cryptocurrencies', createCrypto);
router.put('/cryptocurrencies/:id', updateCrypto);
router.delete('/cryptocurrencies/:id', deleteCrypto);


const { getUsers, addUser, editUser, deleteUser, loginUser, getUserWithToken } = require('./controllers/usersControl')

router.get('/', getUserWithToken);
router.get('/all', getUsers);
router.post('/login', loginUser);
router.post('/register', addUser);
router.patch('/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;