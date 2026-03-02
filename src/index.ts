import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello TypeScript" });
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
