const { updateOneEntry } = require("../services/updateOneEntry.services");

module.exports.updateEntry = async (req, res) => {
    const id = parseInt(req.params.id);
    const { description } = req.body;
    try {
        
        const entry = await updateOneEntry(id, description);

        res.status(200).json({
            entry
        })

    } catch (error) {
        res.status(400).json({
            "responseMessage": "something went wrong",
            "error": error.message
        })
    }
};
