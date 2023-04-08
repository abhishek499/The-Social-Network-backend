const Post = require("../models/post")

exports.createPost = async (req, res) => {
  try {
    const {post} = await new Post(req.body).save;

    res.status(200).json({message: "Post created successfully."})
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
