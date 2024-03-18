const { generateToken } = require("../../../utils/generateAuthToken");
const { userDataValidation } = require("../../../utils/validateData")

module.exports.loginUser = async (email, password) => {

    const validatedData = await userDataValidation(email, password);

    if(!validatedData) {
        return 'can not login user'
    }

    const data = {
        "id": validatedData.rows[0].id,
        "email": validatedData.rows[0].email
    }

    const token = await generateToken(data)

    return {
        "name": validatedData.rows[0].name,
        email,
        "token": {
            token
        }
    }
}