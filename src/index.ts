import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello TypeScript" });
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
