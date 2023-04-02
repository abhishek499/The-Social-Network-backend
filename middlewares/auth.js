const jwt = require("jsonwebtoken");

exports.authUser = async (req, res, next) => {
  try {
    console.log(req);
    let temp = req.header("Authorization");
    const token = temp && temp.slice(7, temp.length);

    if (!token) {
      return res.status(400).json({ message: "Invalid Authorization." });
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(400).json({ message: "Invalid Authorization." });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
