import mongoose from 'mongoose'

const actionSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    action: {
      type: JSON,
      required: true,
    },
    date: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export default mongoose.model('Action', actionSchema)