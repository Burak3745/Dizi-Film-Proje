import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Users from "../models/userModel.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { fullname, email, password, passwordAgain, phoneNumber } = req.body;

    const userExists = await Users.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists." });

    if (password !== passwordAgain)
      return res.status(400).json({ message: "Passwords do not match." });

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await Users.create({
      fullname,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    return res.status(201).json(createdUser);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: `create user failed -> ${error.message}` });
  }
});

router.post("/signin", async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    if (!user) return res.status(400).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Wrong password." });

    return res.status(200).json({ user, message: "Authentication successful" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
});

router.post("/profile/update", async (req, res) => {
  try {
    console.log(req.body);
    const { email, fullname, phoneNumber } = req.body;

    const userExists = await Users.findOne({ email });
    if (!userExists)
      return res.status(400).json({ message: "User doesn't exists." });

    const updatedUser = await Users.findOneAndUpdate(
      { email },
      {
        fullname,
        phoneNumber
      }
    );
    return res.status(201).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: `update user profile failed -> ${error.message}` });
  }
});

router.get("/profile/get/:email", async (req, res) => {
  try {
    console.log(req.params);
    const { email } = req.params;
    const user = await Users.findOne({ email });
    if (!user) return res.status(400).json({ message: "User doesn't exist." });
    const { fullname, phoneNumber } = user;
    return res.status(200).json( {email, fullname, phoneNumber, message: "Profile get successful" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
});

export default router;
