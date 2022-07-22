const firestore = require(".");

async function add(entry) {
  await firestore.collection("form-entries").add(entry);
}

module.exports = { add };
