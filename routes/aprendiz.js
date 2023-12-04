const express = require("express");
const userSchema = require("../models/aprendiz");


const router = express.Router();

// create user
router.post("/aprendices", (req, res) => {
  const aprendiz = userSchema(req.body);
  aprendiz
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/aprendices", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/aprendices/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/aprendices/:id", (req, res) => {
  const { id } = req.params;
  userSchema
  .deleteOne({ _id: id })
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/aprendices/:id", (req, res) => {
const { id } = req.params;
const { nombre, telefono, email, identificacion } = req.body;

userSchema
  .updateOne({ _id: id }, { $set: { nombre, telefono, email, identificacion } })
  .then((data) => res.json(data))
  .catch((error) => res.json({ message: error }));
});

module.exports = router;

