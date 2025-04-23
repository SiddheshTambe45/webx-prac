import express from "express";

const PORT = 4545;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from server",
  });
});

app.post("/api/data", (req, res) => {
  try {
    const requestData = req.body;

    console.log("Data received: " + JSON.stringify(requestData));

    res.status(200).json({
      message: "Data received successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
