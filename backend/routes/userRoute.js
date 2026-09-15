import express from "express";
const router = express.Router();
import User from "../model/UserModel.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
// import { retry } from "@reduxjs/toolkit/query";

router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !password || !email) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "User already exist" });
        }
        const hashedpassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            password: hashedpassword,
            username
        })

        await newUser.save();
        return res.status(200).json({ message: "user registered successfully" });
    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        });
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!password || !email) {
            return res.status(400).json({ message: "all feilds are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "user not registerd" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("password", user.password);
        console.log("password", password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        let token = crypto.randomBytes(32).toString("hex");
        user.token = token;
        await user.save();

        return res.status(200).json({ message: "user logged in", token })
    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        });

    }
});

export default router;