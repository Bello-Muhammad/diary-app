const { createOne } = require('../lib/createEntry');
const { findOne } = require('../lib/findOne');

module.exports.addNewEntry = async (title, description, owner) => {

    const body = { title }
     //check if diary exists
    const checkIfExist = await findOne(body);
    
    if (checkIfExist.rowCount !== 0) {
        return 'entry exist!'
    }
    
    const createdEntry = await createOne(title, description, owner)
    
    if (createdEntry.rowCount !== 1) {
        throw new Error('entry not created successfully');
    }

    return `${title} :- created successfully`;
};