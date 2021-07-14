import { Flight } from '../models/flight.js'

export{
    newFlight as new,
    create,
    index,
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
    flight.save(function(err) {
      // one way to handle errors
          if (err) return res.redirect('/flights/new')
      // for now, redirect right back to new.ejs
      res.redirect('/flights/new')
    })
  }
