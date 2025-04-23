import express from "express";
import cookieParser from "cookie-parser";

const PORT = 4545;

const app = express();

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to expres cookie parser.",
  });
});

app.post("/set-cookie", (req, res) => {
  try {
    const { username } = req.body;

    res.cookie("username", username, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      secure: true,
      httpOnly: true,
    });

    res.status(200).json({
      message: "Cookie set successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

app.get("/get-cookie", (req, res) => {
  try {
    const username = req.cookies.username;

    res.status(200).json({
      message: "Cookie retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

app.delete("/clear-cookie", (req, res) => {
  try {
    res.clearCookie("username");
    res.status(200).json({
      message: "Cookie cleared successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
