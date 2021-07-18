import mongoose from 'mongoose'

export {
  Destination
}

const Schema = mongoose.Schema

const destinationsSchema = new Schema({
  airport:{
      type: String,
      unique: true,
  }
}, {
  timestamps: true
})

const Destination = mongoose.model('Destination', destinationsSchema)