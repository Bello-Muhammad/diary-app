const { deleteOne } = require("../lib/deleteOne");
const { findOne } = require("../lib/findOne")

module.exports.deleteOneEntry = async (id) => {

    const body = { id };
    const checkIfExist = await findOne(body);

    if(checkIfExist.rowCount === 0) {
        throw new Error (`entry with this id: ${id} do not exist`)
    }

    const deletedEntry = await deleteOne(id);

    console.log(deletedEntry)
    // return deletedEntry
}