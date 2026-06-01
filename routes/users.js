const express = require("express");

const { users } = require("../data/users.json");

const {getAllUsers, getSingleUserById, createUser, updateUserById, deleteUserById, getSubscriptionDetailsById} = require('../controllers/user-controller');

const router = express.Router();

router.get('/',getAllUsers);

router.get('/:id', getSingleUserById);

router.post('/', createUser);

router.put('/:id', updateUserById);

router.delete('/:id', deleteUserById);

router.get('/subscription-details/:id', getSubscriptionDetailsById);

module.exports = router;