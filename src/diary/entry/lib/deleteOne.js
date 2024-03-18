const pool = require("../../../../config/dbConfig");
const { deleteEntry } = require("../../../utils/entryQueries");

module.exports.deleteOne = async (id) => {
    return await pool.query(deleteEntry, [id]);
};