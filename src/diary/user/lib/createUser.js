const pool = require("../../../../config/dbConfig");
const { createUser } = require("../../../utils/userQueries");

module.exports.createOneUser = async (name, email, encryptedPassword) => {
    const password = encryptedPassword;
    return await pool.query(createUser, [name, email, password]);
};