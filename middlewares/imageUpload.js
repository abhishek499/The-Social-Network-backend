module.exports = async function (req, res, next) {
  try {
    const files = Object.values(req.files).flat();

    if (!req.files || files.length === 0) {
      return res.status(400).json({ message: "No Files Selected." });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
