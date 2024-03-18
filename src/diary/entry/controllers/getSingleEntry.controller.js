const { findOneEntry } = require("../services/findOneEntry.services");

module.exports.getOneEntry = async (req, res) => {
    const id = parseInt(req.params.id);

    try {

        const entry = await findOneEntry(id)

        res.status(200).json({
            'responseMessage': 'here is your entry',
            entry
        }) 
    } catch (error) {
        res.status(400).json({
            "responseMessage": "something went wrong",
            "error": error.message
        })
    }
};