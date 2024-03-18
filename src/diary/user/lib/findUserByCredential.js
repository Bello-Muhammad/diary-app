const pool = require("../../../../config/dbConfig");
const { checkIfUserExist } = require("../../../utils/userQueries");

module.exports.findUserByCredential = async (email) => {

    if(email) {
        return await pool.query(checkIfUserExist, [ email ]);
    }    
};