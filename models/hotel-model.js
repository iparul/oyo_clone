import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trime: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        trime: true
    },
    banner: {
        type: String,
        required: true,
    },
    gallery: [
        {
            type: String,
        }
    ],
    price: { type: Number },
    facilities: [
        {
            img: String,
            name: String
        }
    ],
    location: {
        type: String,
        required: true,
    }
}, { timestamps: true })

export default mongoose.models?.hotel || mongoose.model('hotel', hotelSchema)