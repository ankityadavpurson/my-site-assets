const add = async (req, res) => {
  const entry = req.body;
  console.log("entry", JSON.stringify(entry));
  const documentData = "await addVisitorEntry(entry)";
  res.status(200).json({ message: "success", documentData });
};

module.exports = { add };
