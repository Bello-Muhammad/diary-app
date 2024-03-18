const pool = require("../../../../config/dbConfig");
const { checkEntryExist, getEntry } = require("../../../utils/entryQueries");

module.exports.findOne = async (body) => {
    const {title, id} = body;
    if(title) {
        return await pool.query(checkEntryExist, [ title ]);
    }

    if(id) {
        return await pool.query(getEntry, [ id ]);
    }
    
};