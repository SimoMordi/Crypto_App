// cryptoRoutes.js
const express = require('express');
const router = express.Router();

const {
  getCryptoById,  createCrypto,
    updateCrypto, deleteCrypto
} = require('./controllers/cryptoControl');

router.get('/cryptos/:id', getCryptoById);
router.post('/cryptos', createCrypto);
router.put('/cryptos/:id', updateCrypto);
router.delete('/cryptos/:id', deleteCrypto);


// const { getUsers, addUser, editUser, deleteUser, loginUser, getUserWithToken 
// } = require('./controllers/usersControl')

// router.get('/', getUserWithToken);
// router.get('/all', getUsers);
// router.post('/login', loginUser);
// router.post('/register', addUser);
// router.patch('/:id', editUser);
// router.delete('/:id', deleteUser);

module.exports = router;