import {Destination} from '../models/destination.js'

export{
    newDestination as new,
    create
  }

function create(req, res) {
    Destination.create(req.body, function(err, destination){
        console.log(req.body)
        console.log(err)
        res.redirect('/destinations/new')
    })
    }

function newDestination(req, res) {
    Destination.find({}, function(err, destinations) {
        res.render('destinations/new', {
          title: 'Add Destination',
          destinations: destinations
        })
    })
    }


