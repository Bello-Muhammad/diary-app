const bcrypt = require('bcryptjs');
const { findOneUser } = require('../diary/user/lib/findOneUser');

module.exports.userDataValidation = async (email, password) => {
    
    const body = { email }
    const user = await findOneUser(body);

    if (user.rowCount === 0) {
        throw new Error('email not found')
    }

    const hashedPassword = user.rows[0].password
    const checkPasswordMatch = await bcrypt.compare(password, hashedPassword)

    if(!checkPasswordMatch) {
        throw new Error('invalid password provided')
    }

    return user;
}