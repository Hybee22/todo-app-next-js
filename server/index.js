const express = require("express");
const next = require("next");
const path = require("path");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const app = express();

  //Body Parser Middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Set Static Folder
  app.use(express.static(path.join(__dirname, "static")));

  // Todos API route
  app.use("/api/todos", require("../api/todos"));

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(PORT, err => {
    if (err) throw err;
    console.log(` Ready on ${PORT}`);
  });
});
