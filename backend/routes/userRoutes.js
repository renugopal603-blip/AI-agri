const express = require('express');
const router = express.Router();
const { getUsers, deleteUser, updateUser } = require('../controllers/userController');

// TODO: Add auth/admin middleware later if needed. For now just public routes for testing.
router.route('/').get(getUsers);
router.route('/:id').delete(deleteUser).put(updateUser);

module.exports = router;
