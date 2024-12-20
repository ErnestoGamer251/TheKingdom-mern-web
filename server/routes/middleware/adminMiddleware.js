const authMiddleware = require('../../controllers/auth/auth-controller').authMiddleware;

const adminMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: "Access denied! Admins only.",
    });
  }
  next();
};

module.exports = adminMiddleware;