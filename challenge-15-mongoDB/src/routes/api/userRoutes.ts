import { Router } from 'express';
import {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
  } from '../../controllers/userController';

const router = Router();

router.route('/').get(getUsers).post(createUser); // This defines the GET and POST /api/users route

console.log('User routes registered: GET /api/users');

// GET one, PUT (update), and DELETE user by ID
router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// Add and remove a friend
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

export default router;