import express from 'express';
import app from './app';
import mongoose from 'mongoose';

const server = express();
const PORT = 5000;
const MONGO_URI = 'mongodb://localhost:27017/advanced';

server.use('/', app);

server.get('/', (_req, res) => {
  res.send('🚀 Server root running!');
});

async function main() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB connected');

    server.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
}

main();
