const { deleteOneEntry } = require("../services/deleteOneEntry.service");

module.exports.removeOneEntry = async (req, res) => {
    const id = parseInt(req.params.id);

    try {

        const entry = await deleteOneEntry(id)

        res.status(200).json({
            'responseMessage': 'entry deleted successfully'
        })
        
    } catch (error) {
        res.status(400).json({
            "responseMessage": "something went wrong",
            "error": error.message
        })
    }
};