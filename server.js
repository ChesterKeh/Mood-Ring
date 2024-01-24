//require block
require("dotenv").config();
require("./config/database");
const express = require("express");
const path = require("path");
const eventRouter = require("./routes/eventRouter");
const journalRouter = require("./routes/journalRouter");
const taskRouter = require("./routes/taskRouter");
const subtaskRouter = require("./routes/subtaskRouter");
const userRouter = require("./routes/userRouter");

const server = express();

//middleware block
server.use(express.json());
server.use(express.static(path.join(__dirname, "dist")));

//routes block
server.use("/event", eventRouter);
server.use("/api/users", userRouter);

server.use("/api/event", eventRouter);
server.use("/api/journal", journalRouter);
server.use("/api/task", taskRouter);
server.use("/", subtaskRouter);

server.get("/test", (req, res) => {
  res.json({ hello: "world" });
});

//listen block
const port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
