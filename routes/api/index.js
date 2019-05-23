const router = require("express").Router();
const dayRoutes = require("./day");

// Routes
router.use("/day", dayRoutes);

module.exports = router;
