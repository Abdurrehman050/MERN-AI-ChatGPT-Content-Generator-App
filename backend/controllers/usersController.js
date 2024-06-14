const User = require("../models/User");
const bcrypt = require("bcryptjs");

//------- Registration -------
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //Validate
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("Please all fields are required");
    }
    // Check the email is taken
    const userExist = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User Already Exists");
    }
    // hash the user password
    const salt = await bcrypt.getSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create the user
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
    });
    // add the date trail will end
    newUser.trailExpires = new Date(
      new Date().getTime() + newUser.trailPeriod * 24 * 60 * 60 * 1000
    );
    // Save the user
    await newUser.save();
    res.json({
      status: true,
      message: "Registration was successful",
      user: {
        username,
        email,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
//------- Login -------
//------- Logout -------
//------- Profile -------
//------- Check user Auth Status -------

module.exports = {
  register,
};
