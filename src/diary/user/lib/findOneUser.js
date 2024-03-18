const pool = require("../../../../config/dbConfig");
const { getUserByEmail, getUserById } = require("../../../utils/userQueries");

module.exports.findOneUser = async (body) => {
    const { email, id } = body;

    if(id) {
        return await pool.query(getUserById, [ id ]);
    }
    if(email) {
        return await pool.query(getUserByEmail, [ email ]);
    }
    
};