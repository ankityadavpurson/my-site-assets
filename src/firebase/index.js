const firestore = require("../utils/firebase");

async function addVisitorEntry(newEntry) {
  await firestore.collection("form-entries").add(newEntry);
}

module.exports = { addVisitorEntry };
