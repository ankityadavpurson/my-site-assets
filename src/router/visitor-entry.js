const { addVisitorEntry } = require("../firebase/visitor-entry");

const add = async (req, res) => {
  try {
    const entry = req.body;
    const documentData = await addVisitorEntry(entry);
    res.status(200).json({ message: "success", documentData });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { add };
