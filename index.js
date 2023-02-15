const express = require("express");
const app = express();
const cors = require("cors");
const Data = require("./Models/Data");
require("./Databse/config");

app.use(cors());
app.use(express.json());

app.post("/add", async (req, resp) => {
  const data = new Data(req.body);
  const result = await data.save();
  resp.send(result);
});

app.get("/get", async (req, resp) => {
  const data = await Data.find();
  resp.send(data);
});

app.get("/get/:id", async (req, resp) => {
  const data = await Data.findById(req.params.id);
  resp.send(data);
});

app.delete("/delete/:id", async (req, resp) => {
  const data = await Data.findByIdAndDelete(req.params.id);
  resp.send(data);
});

app.put("/update/:id", async (req, resp) => {
  const data = await Data.findByIdAndUpdate(req.params.id, req.body);
  resp.send(data);
});

app.listen(4003, () => console.log("Port is working on 4003"));
