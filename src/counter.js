class Counter {
  counterRecords = {
    hits: 0,
    visitors: 0,
  };

  ips = [];

  count = (ip) => {
    this.counterRecords.hits++;
    if (this.ips.indexOf(ip) === -1) {
      this.ips.push(ip);
      this.counterRecords.visitors = this.ips.length;
    }
  };

  resetCuonter = () => {
    this.counterRecords.hits = 0;
    this.counterRecords.visitors = 0;
    this.ips = [];
  };

  get = (_req, res) => {
    res.json(this.counterRecords);
  };

  set = (req, res) => {
    this.count(req.ip);
    res.json(this.counterRecords);
  };

  getIPs = (_req, res) => {
    res.json(this.ips);
  };

  reset = (_req, res) => {
    this.resetCuonter();
    res.json(this.counterRecords);
  };
}

const counter = new Counter();

module.exports = counter;
