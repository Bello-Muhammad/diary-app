const { loginUser } = require("../services/loginUser.service");

module.exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if( !email || !password ) {
            res.status(401).json({
                "message": 'all input must be provided'
            })
        }
    
        const authUser = await loginUser( email, password);

        res.status(201).json({
            "responseMessage": authUser
        })
    } catch (error) {
        res.status(400).json({
            "message": error.message
        })
    }
}; 