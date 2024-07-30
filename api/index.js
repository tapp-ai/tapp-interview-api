const express = require("express");
const cors = require("cors");
const { data, resetData } = require("./data");
const app = express();
const port = 3000;

app.use(express.json({ strict: false }));

app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("Good luck on the interview! -- Levi & Matt");
});

/**
 * GET /page-improvements/:projectId
 */
app.get("/page-improvements/:projectId", (req, res) => {
  const objects = Object.entries(data.optimizations).map(([id, obj]) => ({
    id,
    ...obj,
  }));
  res.json(objects);
});

/**
 * POST /page-improvements/:id
 */
app.post("/page-improvements/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!data.optimizations[id]) {
    res.status(404).json({ message: "Improvement object not found" });
    return;
  }

  if (body["new"] === undefined) {
    res.status(400).json({ message: "Body must contain 'new' key" });
    return;
  }

  data.optimizations[id]["new"] = body["new"];

  res.json({ message: "Improvement object updated" });
});

/**
 * DELETE /page-improvements/:id
 */
app.delete("/page-improvements/:id", (req, res) => {
  const { id } = req.params;

  if (!data.optimizations[id]) {
    res.status(404).json({ message: "Improvement object not found" });
    return;
  }

  delete data.optimizations[id];

  res.json({ message: "Improvement object deleted" });
});

/**
 * POST /admin/page-improvements/reset
 */
app.post("/admin/page-improvements/reset", (req, res) => {
  resetData();
  res.json({ message: "Data reset" });
});

app.use((req, res) => {
  res.status(404).send("404: Page not found");
});

app.listen(port, () => {
  console.log(`Interview API listening on port ${port}`);
});

module.exports = app;
