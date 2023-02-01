const router = require("express").Router();

const postRoutes = require("./post-routes.js");
const userRoutes = require("./user-routes");

router.use("/users", userRoutes);
router.use("/post", postRoutes);

module.exports = router;
