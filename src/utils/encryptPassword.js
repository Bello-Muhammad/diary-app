const bcrypt = require('bcryptjs')

module.exports.passwordEncryption = async (password) => {
    return await bcrypt.hash(password, 8);
};