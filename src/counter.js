const mongoose = require("mongoose");

const CounterModel = mongoose.model("counter", {
  hits: Number,
  visitors: Number,
  ips: [String],
});

// const counterModel = new CounterModel({ hits: 0, visitors: 0, ips: [] });
// counterModel.save().then((counter) => console.log("done", { counter }));
const docId = "61ec5e583f3ae68bcef73c84";

class Counter {
  counterRecords = {
    hits: 0,
    visitors: 0,
    ips: [],
  };

  constructor() {
    CounterModel.findById(docId).then((counterDoc) => {
      const { hits, visitors, ips } = counterDoc._doc;
      this.counterRecords = { ...this.counterRecords, hits, visitors, ips };
    });
  }

  count = (ip) => {
    this.counterRecords.hits++;
    if (this.counterRecords.ips.indexOf(ip) === -1) {
      this.counterRecords.ips.push(ip);
      this.counterRecords.visitors = this.counterRecords.ips.length;
    }
    this.updateDB();
  };

  resetCuonter = () => {
    this.counterRecords.hits = 0;
    this.counterRecords.visitors = 0;
    this.counterRecords.ips = [];
    this.updateDB();
  };

  get = (_req, res) => {
    const { hits, visitors } = this.counterRecords;
    res.json({ hits, visitors });
  };

  set = (req, res) => {
    this.count(req.ip);
    const { hits, visitors } = this.counterRecords;
    res.json({ hits, visitors });
  };

  getIPs = (_req, res) => {
    const { ips } = this.counterRecords;
    res.json(ips);
  };

  reset = (_req, res) => {
    this.resetCuonter();
    const { hits, visitors } = this.counterRecords;
    res.json({ hits, visitors });
  };

  updateDB() {
    const { hits, visitors, ips } = this.counterRecords;
    CounterModel.updateOne({ id: docId }, { hits, visitors, ips })
      .then((_doc) => {
        // console.log(_doc);
      })
      .catch((err) => console.log(err));
  }
}

const counter = new Counter();
module.exports = counter;
