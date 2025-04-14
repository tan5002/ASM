const UserInfo = require('../models/UserInfo');

// Lấy thông tin cá nhân
exports.getUserInfo = async (req, res) => {
  try {
    const user = await UserInfo.findOne(); // giả sử chỉ có 1 user
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Lỗi server' });
  }
};

// Cập nhật thông tin cá nhân
exports.updateUserInfo = async (req, res) => {
  try {
    const updated = await UserInfo.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Không thể cập nhật' });
  }
};
