const express = require("express"); // our express server
const router = express(); // generate an app object
const login = require("./login");

router.post("/", async (req, res, next) => {
  try {
    const slogin = await login.create(req.body);
    return success(res, slogin);
  } catch (err) {
    res.status(500).json({ message: "failed to create todos" });
  }
});
function success(res, payload) {
  return res.status(200).json(payload);
}

router.get("/", async (req, res) => {
  try {
    const slogin = await login.find();
    res.json(slogin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
function success(res, payload) {
  return res.status(200).json(payload);
}

router.use((err, req, res, next) => {
  return res.status(err.status || 400).json({
    status: err.status || 400,
    message: err.message || "there was an error processing request",
  });
});
module.exports = router;
