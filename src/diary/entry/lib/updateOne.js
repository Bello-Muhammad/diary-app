const pool = require("../../../../config/dbConfig");
const { editEntry } = require("../../../utils/entryQueries");

module.exports.updateOne = async (id, description) => {
    return await pool.query(editEntry, [description, id]);
}