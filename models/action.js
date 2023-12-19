import { mongoose } from mongoose

const actionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
})

const Modelo = mongoose.model('Action', actionSchema);

module.exports = Modelo
