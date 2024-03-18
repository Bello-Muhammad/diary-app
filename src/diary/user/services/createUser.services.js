const { passwordEncryption } = require("../../../utils/encryptPassword");
const { generateToken } = require("../../../utils/generateAuthToken");
const { createOneUser } = require("../lib/createUser");
const { findOneUser } = require("../lib/findOneUser");
const { findUserByCredential } = require("../lib/findUserByCredential");

module.exports.createNewUser = async (name, email, password) => {

    //  check if user exists
    const checkIfExist = await findUserByCredential(email);

    if (checkIfExist.rowCount !== 0) {
        return 'user exist!'
    }

    const encryptedPassword = await passwordEncryption(password);
    const createdUser = await createOneUser(name, email, encryptedPassword)
    
    if (createdUser.rowCount !== 1) {
        throw new Error('user not created successfully');
    }

    const body = { email }
    const user = await findOneUser(body);

    const data = {
        "id": user.rows[0].id,
        "email": user.rows[0].email
    }

    const token = generateToken(data);

    return {
        name,
        email,
        'token': {
            token
        } 
    };
};