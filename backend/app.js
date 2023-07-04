require("dotenv").config();

const express = require("express");
var cors=require('cors')
const app = express();

//connection to the database

const connectDB = require("./db/connect");
const port = process.env.port || 3000;

//routes

const userRouter = require("./routes/auth");
const notesRouter = require("./routes/note");

app.use(express.json());
app.use(cors())
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/notes", notesRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
