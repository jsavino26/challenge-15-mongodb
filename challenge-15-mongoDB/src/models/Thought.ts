import { Schema, model } from 'mongoose';
import Reaction from './Reaction';

const thoughtSchema = new Schema({
  thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
  createdAt: { type: Date, default: Date.now, get: (timestamp: Date) => timestamp.toISOString() },
  username: { type: String, required: true },
  reactions: [Reaction],
}, {
  toJSON: { virtuals: true, getters: true },
  id: false,
});

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);
export default Thought;