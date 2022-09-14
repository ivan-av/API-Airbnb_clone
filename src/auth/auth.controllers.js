const { getUserByEmail } = require("../users/users.controllers");
const { comparePassword } = require("../utils/crypt");

const loginUser = async (email, password) => {
    try {
        const user = await getUserByEmail(email)
        const verify_password = comparePassword(password, user.password);
        if (verify_password) {
            return user;
        }
        return false;
        //return verify_password ? user : false
    } catch (error) {
        return false
    }
    //? user.password -> Hashed password
    //* password -> Password in plane text
};


module.exports = {
    loginUser,
};