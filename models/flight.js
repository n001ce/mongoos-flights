import mongoose from 'mongoose'


export{ Flight }

const Schema = mongoose.Schema

const ticketsSchema = new Schema({
    seat: String,
    price: Number
}, {
    timstamps: true
})

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date,
    tickets: [ticketsSchema],
    destinations: [{type: Schema.Types.ObjectId, ref:'Destination'}]
},{
    timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)