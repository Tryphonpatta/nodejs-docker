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

[
  `exit`,
  `SIGQUIT`,
  `SIGINT`,
  `SIGUSR1`,
  `SIGUSR2`,
  `uncaughtException`,
  `SIGTERM`,
].forEach(function (event) {
  process.on(event, function () {
    console.log(`${event}, exiting...`);
    process.exit(0);
  });
});
