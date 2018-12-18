var express = require('express');
var router = express.Router();

var events = require('../models/event');

// routes here
router.get('/', events.getAll, renderIndex);
router.get('/:id', events.find, events.findByUser, renderShow);

router.post('/:id/register', events.addUserToEvent, redirectShow);
router.delete('/:id/register', events.removeUserFromEvent, redirectShow);

function renderIndex(req, res){
  res.render('./events/index');
}

function renderShow(req, res){
  var mustacheVariables = {
    event: res.locals.event,
    userAttendance: res.locals.userAttendance
  };
  
  res.render('./events/show', mustacheVariables);
}

function redirectShow(req, res){
  res.redirect(`/events/${res.locals.event_id}`);
}

// template functions


module.exports = router;