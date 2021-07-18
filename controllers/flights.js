import { Flight } from '../models/flight.js'

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
    const flight = new Flight(req.body)
    if (!flight.departs){
      flight.departs = new Date()
      flight.departs.setFullYear(flight.departs.getFullYear()+1)
    }
    flight.save(function(err) {
          if (err) return res.redirect('/flights/new')
      res.redirect('/flights/show')
    })
  }

  function addToFlight(req, res) {
    Flight.findById(req.body.flightId)
    .then(flight => {
    flight.destination.push(req.params.destinationId)
    user.save()
    .then(()=> {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function show(req, res) {
  Flight.findById(req.params.id)
  .populate('destinations')
  .then(flight => {
    res.render('flights/show', {
      flight
    })
  })
}

function createTicket(req, res) {
  // Find the movie
 Flight.findById(req.params.id, function(err, flight) {
    // Push new review into [reviews]
    flight.tickets.push(req.body)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}
