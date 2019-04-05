const uuid = require("uuid");

module.exports = [
  {
    point: 1,
    todo: {
      id: uuid.v4(),
      item: "Complete Work"
    }
  },
  {
    point: 2,
    todo: {
      id: uuid.v4(),
      item: "Submit Today"
    }
  },
  {
    point: 3,
    todo: {
      id: uuid.v4(),
      item: "Await Next Instruction"
    }
  }
];
