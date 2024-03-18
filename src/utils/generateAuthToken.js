const jwt = require('jsonwebtoken');

module.exports.generateToken = function (data) {
    const jwtSecret = process.env.JWT_SECERET;
    
    const token = jwt.sign({ userId: data.id.toString(), email: data.email}, jwtSecret, { expiresIn: process.env.JWT_LIFETIME });

    return token;
}