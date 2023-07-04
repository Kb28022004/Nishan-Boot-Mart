const express = require("express");
const router = express.Router();
const user = require("../Models/User");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");
const JWT_SECRET = "iamagoodboy";

//ROUTE:1 Create a user using : POST "/api/v1/auth/createuser"."No login required"
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("passoword", "passoword must be of 5 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // if there are errors then return bad request and error

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //check whether the user with this email exits already
      let User = await user.findOne({ email: req.body.email });
      if (User) {
        return res
          .status(400)
          .json({ error: "Sorry a user is already exits with this email" });
      }

      const salt = await bcrypt.genSalt(10);
      const scrPaswrd = await bcrypt.hash(req.body.passoword, salt);

      //Create a new user

      User = await user.create({
        name: req.body.name,
        email: req.body.email,
        passoword: scrPaswrd,
      });

      const data = {
        User: {
          id: User.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      res.json({ authtoken });
    } catch (error) {
      res.status(500).json("Internal Server error");
    }
  }
);

//ROUTE:2 Authenticate a user using : POST "/api/v1/auth/login"."No login required"
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("passoword", "Passoword cannot be blank").exists(),
  ],
  async (req, res) => {
    // if there are errors then return bad request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, passoword } = req.body;
    try {
      let User = await user.findOne({ email });
      if (!User) {
        return res
          .status(400)
          .json({ error: "Please try to login with the correct credentials" });
      }

      let passCompare = await bcrypt.compare(passoword, User.passoword);
      if (!passCompare) {
        return res
          .status(400)
          .json({ error: "Please try to login with the correct credentials" });
      }
      const data = {
        User: {
          id: User.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
    
      res.json({  authtoken });
    } catch (error) {
      res.status(500).json("Internal Server error");
    }
  }
);
//ROUTE:3 Get loggedin  user  details using : POST "/api/v1/auth/getuser"." login required"
router.post("/getuser", fetchuser, async (req, res) => {
  try {
   const userid = req.User.id;
    const User = await user.findById(userid).select("-passoword");
    res.send(User);
  } catch (error) {
    res.status(500).json("Internal Server error");
  }
});

module.exports = router;
