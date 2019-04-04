const express = require("express");
const next = require("next");
const path = require("path");

const PORT = process.env.PORT || 4000;

const app = express();
// const handle = app.getRequestHandler();

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(path.join(__dirname, "static")));

// Todos API route
app.use("/api/todos", require("../api/todos"));
// pages route
app.use("/", require("../pages/index"));
// pages route
app.use("/about", require("../pages/about"));
// pages route
app.use("/todo", require("../pages/todo"));

app.listen(PORT, () => console.log(`Server Started On Port ${PORT}`));

// const server = express();

// app.get("*", (req, res) => {
//   return handle(req, res);
// });
