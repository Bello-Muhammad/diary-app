const { addNewEntry } = require("../services/createEntry.services");

module.exports.createEntry = async (req, res) => {
    try {

        const { title, description } = req.body;
        const owner = parseInt(req.user.id);

        console.log(owner)
        if (!title || !description || !owner ) {
            throw new Error('all inputs require')
        }
        const createdEntry = await addNewEntry(title, description, owner);

        res.status(201).json({
            "responseMessage": createdEntry
        })
    } catch (error) {
        res.status(400).json({
            "message": error.message
        })
    }
}; 
