const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const withAuth = require("./../utils/auth");
// route to get all
router.get("/", async (req, res) => {
  const postData = await Post.findAll({ include: [User] }).catch((err) => {
    res.json(err);
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  res.render("all", { posts, loggedIn: req.session.loggedIn });
});

// route to login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// route to SIGNUP page
router.get("/signup", (req, res) => {
  res.render("signup");
});

// route to DASHBOARD page
router.get("/dashboard", withAuth, async (req, res) => {
  const postData = await Post.findAll({ where: { user_id: req.session.user_id }, include: [User] }).catch((err) => {
    res.json(err);
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  res.render("dashboard", { posts, loggedIn: req.session.loggedIn, user_id: req.session.user_id });
});

module.exports = router;
