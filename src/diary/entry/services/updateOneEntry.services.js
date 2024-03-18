const { findOne } = require("../lib/findOne");
const { updateOne } = require("../lib/updateOne");

module.exports.updateOneEntry = async (id, description) => {
    const body = { id }
    const checkIfExist = await findOne(body);

    if(checkIfExist.rowCount === 0) {
        throw new Error (`entry with this id: ${id} not found`)
    }

    const updatedEntry = await updateOne(id, description);
    return {
        'responseMessage': 'entry updated successfully',
        'updateCount': updatedEntry.rowCount
    }
};