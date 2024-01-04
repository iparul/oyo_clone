import connectDB from "@/db";
import User from "@/models/user-models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    if (req.method === "POST") {
        connectDB();
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: "All Fields are Mandatory !" });
        }
        const emailExists = await User.findOne({ email });
        if (!emailExists) {
            return res.status(400).json({ msg: "User is not Registered!" });
        }
        const passwordMathed = await bcrypt.compare(password, emailExists.password)
        if (!passwordMathed) {
            return res.status(400).json({ msg: "Invalid Credentitials!" });
        }

        const token = jwt.sign({ token: emailExists._id }, process.env.JWT_SECRET, {
            expiresIn: "30d",

        })

        return res
            .status(200)
            .json({ msg: "User login succesuflly", token });
    }
}