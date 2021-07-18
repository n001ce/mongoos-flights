import {Destination} from '../models/destination.js'

export{
    newDestination as new,
    create
  }

function newDestination(req, res) {
    res.render('destinations/new');
  }  

  function create(req, res) {
    const destination = new Destination(req.query.name)
    destination.save(function(err) {
          if (err) return res.redirect('/destinations/new')
      res.redirect('/flights')
    })
  }
