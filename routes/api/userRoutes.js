const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);


// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);


// /api/users/:userId/friends/:friendId
// router.route('/:userId/friends/:friendId').post(addFriend);
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

// define the route for delete friend from a friend list
// router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
