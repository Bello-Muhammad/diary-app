const pool = require("../../../../config/dbConfig");
const { getAllEntries } = require("../../../utils/entryQueries");

module.exports.findMany = async () => {
    return await pool.query( getAllEntries);
};