const pool = require("../../../../config/dbConfig");
const { addEntry } = require("../../../utils/entryQueries");

module.exports.createOne = async (title, description, owner) => {
    return await pool.query(addEntry, [title, description, owner]);
};