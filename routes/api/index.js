const router = require("express").Router();
const dayRoutes = require("./day");
const exerciseRoutes = require("./exercise");

// Routes
router.use("/day", dayRoutes);
router.use("/exercise", exerciseRoutes);

module.exports = router;
