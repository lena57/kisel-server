import mongoose from 'mongoose';

export const generateId = () => new mongoose.Types.ObjectId();