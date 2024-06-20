const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/User");

//------- Registration -------
const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  //Validate
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please all fields are required");
  }
  // Check the email is taken
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  // hash the user password
  const salt = await bcrypt.genSalt(10);
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
});
//------- Login -------
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // check for user email
  const user = await User.findOne({ email });
  if (!user) {
    res.status(401);
    throw new Error("Invalid email or password");
  }
  // check if the password in valid
  const isMatch = await bcrypt.compare(password, user?.password);
  if (!isMatch) {
    res.status(401);
    throw new Error("Invalid email or password");
  }
  // Generate token (jwt)
  // set the token into cookie (http only)

  // send the response
  res.json({
    status: "success",
    _id: user?._id,
    message: "login success",
    username: user?.username,
    email: user?.email,
  });
});
//------- Logout -------
//------- Profile -------
//------- Check user Auth Status -------

module.exports = {
  register,
  login,
};
