import { Request, Response } from 'express';
import Thought from '../models/Thought';

// Get all thoughts
export const getThoughts = async (req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get a single thought by ID
export const getThoughtById = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) {
      return res.status(404).json({ message: 'No thought found with that ID' });
    }
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create a new thought
export const createThought = async (req: Request, res: Response) => {
  try {
    const newThought = await Thought.create(req.body);
    res.status(201).json(newThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update a thought by ID
export const updateThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!thought) {
      return res.status(404).json({ message: 'No thought found with that ID' });
    }

    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete a thought by ID
export const deleteThought = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.id);
    if (!thought) {
      return res.status(404).json({ message: 'No thought found with that ID' });
    }
    res.json({ message: 'Thought deleted successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Add a reaction to a thought
export const addReaction = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $addToSet: { reactions: req.body } },
      { new: true, runValidators: true }
    );

    if (!thought) {
      return res.status(404).json({ message: 'No thought found with that ID' });
    }

    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Remove a reaction from a thought
export const removeReaction = async (req: Request, res: Response) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    );

    if (!thought) {
      return res.status(404).json({ message: 'No thought found with that ID' });
    }

    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

