
const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);
  
  
// // /api/thoughts/:thoughtId/reactions/:reactionId
// router.route('/:thoughtId/reactions/:reactionId').post(addReaction).delete(removeReaction);

  // define the routes for post reaction to a thought
  router.route('/:thoughtId/reactions').post(addReaction);
  
  // define the route for delete reaction to a thought
  router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;

