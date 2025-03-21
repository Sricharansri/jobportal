const mongoose = require('mongoose');

const connectDB = async () => {
  console.log("Connecting to MongoDB with URI:", process.env.MONGO_URI);  // Debug line

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
