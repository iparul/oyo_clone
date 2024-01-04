import connectDB from "@/db";
import Hotel from "@/models/hotel-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    if (req.method == "POST") {
        connectDB();
        const newHotel = new Hotel(req.body)
        const result = await newHotel.save()
        res.status(200).json({
            msg: "Hotel Added!", result
        })
    }
    if (req.method == "GET") {
        connectDB();
        const location = req.query.city
        const hotelList = await Hotel.find({ location })
        if (hotelList.length > 0) {
            res.status(200).json({
                hotelList: hotelList
            })
        }
        const allHotelList = await Hotel.find({})
        res.status(200).json({
            hotelList: allHotelList
        })
    }
}