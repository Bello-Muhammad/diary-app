const { findAllEntries } = require("../services/findEntries.services");

module.exports.getEntries = async (req, res) => {
    try {
        const entries =await findAllEntries()
        
        res.status(200).json({
            entries
        })
    } catch (error) {
        res.status(400).json({
            "responseMessage": "something went wrong",
            "error": error.message
        })
    }
};