import mongoose from 'mongoose';

const holidaySchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    fecha: {
        type: Date,
        required: true,
    },
},
    {
        timestamps: true,
        versionKey: false,
    });

export default mongoose.model('Holiday', holidaySchema);
