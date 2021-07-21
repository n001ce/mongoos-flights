import mongoose from 'mongoose'


export{ Flight }

const Schema = mongoose.Schema

const ticketsSchema = new Schema({
    seat: String,
    price: {
        type: Number,
    }
}, {
    timstamps: true
})

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    departs: Date,
    tickets: [ticketsSchema],
    destinations: [{type: Schema.Types.ObjectId, ref:'Destination'}]
},{
    timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)