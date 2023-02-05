const router = require("express").Router();
const { User, Post, Comment } = require("../models/");
const withAuth = require("./../utils/auth");

// route to get all Posts
router.get("/", async (req, res) => {
  const postData = await Post.findAll({ include: [User] }).catch((err) => {
    res.json(err);
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  res.render("all", { posts, loggedIn: req.session.loggedIn });
});

// route to login page
router.get("/login", (req, res) => {
  if (req.session.In) {
    res.redirect("/");
    return;
  }

  res.render("login", { loggedIn: req.session.loggedIn, user_id: req.session.user_id });
});

// route to SIGNUP page
router.get("/signup", (req, res) => {
  res.render("signup", { loggedIn: req.session.loggedIn, user_id: req.session.user_id });
});

// route to DASHBOARD page
router.get("/dashboard", withAuth, async (req, res) => {
  const postData = await Post.findAll({ where: { user_id: req.session.user_id }, include: [User] }).catch((err) => {
    res.json(err);
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  res.render("dashboard", { posts, loggedIn: req.session.loggedIn, user_id: req.session.user_id });
});

// route to newPost page
router.get("/newpost", withAuth, async (req, res) => {
  res.render("newpost", { loggedIn: req.session.loggedIn, user_id: req.session.user_id });
});

// route to updatePost page
router.get("/updatepost/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (!postData) {
      res.status(404).json({ message: "No post with this id!" });
      return;
    }
    const post = postData.get({ plain: true });
    console.log(post.user_id);
    if (post.user_id === req.session.user_id) {
      res.render("updatepost", { post, loggedIn: req.session.loggedIn, user_id: req.session.user_id });
    } else {
      res.redirect("/");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to get the comments for a post
router.get("/comment/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });
      console.log(post);
      res.render("comment", { post, loggedIn: req.session.loggedIn, user_id: req.session.user_id });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to add a comment
router.get("/addcomment/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });
      console.log(post);
      res.render("addcomment", { post, loggedIn: req.session.loggedIn, user_id: req.session.user_id });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
