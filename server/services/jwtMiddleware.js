const jwt = require('jsonwebtoken');

const verifyToken = (requiredRole) => {
  return (req, res, next) => {
    const token = req.headers["authorization"]?.split(' ')[1];
    
    if (!token) {
        return res.status(403).json({ message: "Access denied" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }

        req.userId = decoded.id;
        req.userRole = decoded.role;

        // Check if the user has the required role
        if (requiredRole && req.userRole !== requiredRole) {
            return res.status(403).json({ message: "Access denied for this role" });
        }

        next();
    });
  };
};

module.exports = { verifyToken };
