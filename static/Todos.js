const uuid = require("uuid");

const todos = [
  {
    id: uuid.v4(),
    item: "Complete Work"
  },
  {
    id: uuid.v4(),
    item: "Submit Today"
  }
];

module.exports = todos;
