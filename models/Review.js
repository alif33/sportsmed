import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User', 
            required: true 
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        body: {
            type: String,
            required: true,
            trim: true
        }
    },
    { timestamps: true }
);

export default mongoose.models.Review || mongoose.model('Review', orderSchema);

