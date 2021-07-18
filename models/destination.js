import mongoose from 'mongoose'

export {
  Destination
}

const Schema = mongoose.Schema

const destinationSchema = new Schema({
  destination: {type: String, unique: true}
}, {
  timestamps: true
})

const Destination = mongoose.model('Destination', destinationSchema)