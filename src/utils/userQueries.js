const createUser = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)";
const checkIfUserExist = "SELECT u FROM users u WHERE u.email = $1";
const getUserById = "SELECT * FROM users WHERE id = $1";
const getUserByEmail = "SELECT * FROM users WHERE email = $1";

module.exports = {
    createUser,
    checkIfUserExist,
    getUserByEmail,
    getUserById
};