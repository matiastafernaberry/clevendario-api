import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    role: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export default mongoose.model('User', userSchema)