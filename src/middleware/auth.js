const jwt = require('jsonwebtoken');
const { findOneUser } = require('../diary/user/lib/findOneUser');

module.exports.auth = async (req, res, next) => {
    try {

        const jwtSecret = process.env.JWT_SECRET;
        
        const token = req.headers.authorization.replace('Bearer ', '')
        const decoded = jwt.verify(token, jwtSecret);
        const id = parseInt(decoded.userId);
        const body = { id }
        const userData = await findOneUser(body);

        if (userData.rowCount === 0) {
            throw new Error('invalid email or password')
        }

        const user = userData.rows[0];
        delete user['password']
        
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}