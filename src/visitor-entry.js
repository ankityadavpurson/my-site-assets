const { addVisitorEntry } = require("./firebase");

const add = async (req, res) => {
  const entry = req.body;
  const documentData = await addVisitorEntry(entry);
  res.status(200).json({ message: "success", documentData });
};

module.exports = { add };
