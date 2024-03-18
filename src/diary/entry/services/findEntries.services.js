const { findMany } = require("../lib/findAllEntry");

module.exports.findAllEntries = async () => {
    const allEntries = await findMany();

    if (allEntries.rowCount === 0) {
        const data = {
            'responseMessage': 'no available entry in your diary',
            "response": allEntries.rows
        }

        return data 
    }

    return allEntries.rows;
};