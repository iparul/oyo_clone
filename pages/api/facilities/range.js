import connectDB from "@/db";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        connectDB()
        const key = req.query.price

        const hotels = await Hotel.find({ price: { $lte: key } })//lte =  less then or equale
        res.status(200).json({
            hotels: hotels
        })
    }
}