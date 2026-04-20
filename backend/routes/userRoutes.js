const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@mail.com" && password === "123456") {
    const token = jwt.sign({ email }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid login" });
  }
});

module.exports = router;