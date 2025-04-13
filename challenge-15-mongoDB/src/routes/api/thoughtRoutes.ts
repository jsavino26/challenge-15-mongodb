import { Router } from 'express';
import {
    getThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
  } from '../../controllers/thoughtController';

const router = Router();

// Routes for /api/thoughts
router.route('/')
  .get(getThoughts)
  .post(createThought); // POST new thought

// Routes for /api/thoughts/:id
router.route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Routes for reactions
router.route('/:thoughtId/reactions')
  .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

export default router;