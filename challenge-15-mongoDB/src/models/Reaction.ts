import { Schema, Types } from 'mongoose';

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp: Date) => timestamp.toISOString(),
  }
}, {
  toJSON: {
    getters: true
  },
  _id: false // so it doesn't generate its own _id (we're using reactionId)
});

export default reactionSchema;