const mongoose = require("mongoose");

const CounterModel = mongoose.model("counter", {
  hits: Number,
  visitors: Number,
  ips: [String],
});

// const counterModel = new CounterModel({ hits: 0, visitors: 0, ips: [] });
// counterModel.save().then((counter) => console.log("done", { counter }));

class Counter {
  docId = process.env.COUNTER_DOC_ID;

  get = async (_req, res) => {
    const counterDoc = await CounterModel.findById(this.docId);
    const { hits, visitors } = counterDoc;
    res.json({ hits, visitors });
  };

  set = async (req, res) => {
    try {
      const ip = req.ip;

      const counterDoc = await CounterModel.findById(this.docId);
      const addIP = counterDoc.ips.indexOf(ip) === -1;

      await CounterModel.findByIdAndUpdate(
        this.docId,
        addIP
          ? { $push: { ips: ip }, $inc: { hits: 1, visitors: 1 } }
          : { $inc: { hits: 1 } }
      );
      res.status(200).send("Success");
    } catch (error) {
      // console.log(error);
      res.status(500).send("Internal Server Error");
    }
  };

  getIPs = async (_req, res) => {
    const counterDoc = await CounterModel.findById(this.docId);
    res.json(counterDoc.ips);
  };

  reset = async (_req, res) => {
    try {
      await CounterModel.findByIdAndUpdate(this.docId, {
        hits: 0,
        visitors: 0,
        ips: [],
      });
      res.status(200).send("Deleted");
    } catch (error) {
      // console.log(error);
      res.status(500).send("Internal Server Error");
    }
  };
}

const counter = new Counter();
module.exports = counter;
