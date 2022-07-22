const firestore = require(".");

async function addNewEntry(entry) {
  await firestore.collection("form-entries").add(entry);
}

module.exports = { addNewEntry };
