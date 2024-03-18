const { createNewUser } = require("../services/createUser.services");

module.exports.registerNewUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password) {
            res.status(401).json({
                "message": 'all input must be provided'
            })
        }
    
        const registeredUser = await createNewUser(name, email, password);

        res.status(201).json({
            "responseMessage": registeredUser
        })
    } catch (error) {
        res.status(400).json({
            "message": error.message
        })
    }
}; 