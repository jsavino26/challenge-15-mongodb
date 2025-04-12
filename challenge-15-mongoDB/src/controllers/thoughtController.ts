import { Request, Response } from 'express';
import Thought from '../models/Thought';

export const getThoughts = async (req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Add other CRUD operations (getThoughtById, createThought, updateThought, deleteThought, addReaction, removeReaction)