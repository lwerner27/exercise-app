const router = require("express").Router();
const authRoutes = require("./auth");
const apiRoutes = require("./api");

// API Routes
router.use("/auth", authRoutes);
router.use("/api", apiRoutes);

module.exports = router;
