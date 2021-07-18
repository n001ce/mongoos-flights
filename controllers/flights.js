import { Flight } from '../models/flight.js'
import {Destination} from '../models/destination.js'

export{
    newFlight as new,
    create,
    index,
    addToFlight,
    show,
    createTicket
  }

  function index(req, res){
    Flight.find({}, function(error, Flight) {
      res.render('flights/index', {
        Flight,
        error: error,
        time: req.time
      })
    })
  }

function newFlight(req, res) {
    res.render('flights/new');
  }  

function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key]
    }
    const flight = new Flight(req.body)
    if (!flight.departs){
      flight.departs = new Date()
      flight.departs.setFullYear(flight.departs.getFullYear()+1)
    }
    flight.save(function(err) {
      if (err) return res.redirect('/flights/new')
      res.redirect(`/flights/${flight._id}`)
    })
  }

function addToFlight(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.destinations.push(req.body.destinationId)
      flight.save(function(err) {
        res.redirect(`/flights/${flight._id}`)
      })
    })
  }

function show(req, res) {
  Flight.findById(req.params.id)
  .populate('destinations').exec(function(err, flight){
    Destination.find({_id: {$nin: flight.destinations}}, function(err, destinations) {
      res.render('flights/show', {
        title: 'Flight Detail', 
        flight: flight,
        destinations: destinations
      })
    })
  })
}

function createTicket(req, res) {
 Flight.findById(req.params.id, function(err, flight) {
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}
