const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Đã kết nối MongoDB');
  } catch (error) {
    console.error('❌ Kết nối MongoDB thất bại:', error.message);
    process.exit(1); // Thoát nếu lỗi
  }
};

module.exports = connectDB;
