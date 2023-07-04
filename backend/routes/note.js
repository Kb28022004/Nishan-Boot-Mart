const express = require("express");
const router = express.Router();
const Notes = require("../Models/Notes");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");

//ROUTE:1 Get all notes from the logged  user using : GET "/api/v1/auth/createuser"." login required"

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ User: req.User.id });
    res.json(notes);
  } catch (error) {
    res.status(500).json("Internal Server error");
  }
});

//ROUTE 2: Add a new note  using : POST "/api/v1/auth/addnote"." login required"

router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "description must be of 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      // if there are errors then return bad request and error
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Notes({
        title,
        description,
        tag,
        User: req.User.id,
      });
      const savednotes = await note.save();
      res.json(savednotes);
    } catch (error) {
      res.status(500).json("Internal Server error");
    }
  }
);
//ROUTE 3: update existing  note  using : PUT "/api/v1/notes/updatenote"." login required"
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    //create a newnote object
    const newNote = {};

    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //Find the note to be upadated and update it
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not found");
    }
    if (note.User.toString() !== req.User.id) {
      return res.status(401).send("Not allowed");
    }
    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    res.status(500).json("Internal Server error");
  }
});

//ROUTE 4: delete existing  note  using : DELETE "/api/v1/notes/deletenote"." login required"
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
try {
    //Find the note to be deleted and delete it
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not found");
    }

    //Allowe deletion if the logged user has its own note
    if (note.User.toString() !== req.User.id) {
      return res.status(401).send("Not allowed");
    }
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ Success: "Deletion has been completed", note: note });
  } catch (error) {
    res.status(500).json("Internal Server error");
  }
});

module.exports = router;
