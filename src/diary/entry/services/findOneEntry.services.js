const { findOne } = require("../lib/findOne")

module.exports.findOneEntry = async (id) => {
    
    const body = {id}
    const singleEntry = await findOne(body);

    if (singleEntry.rowCount === 0) {
        throw new Error (`entry with this id: ${id} not found`) 
    }
    
    return singleEntry.rows;
};