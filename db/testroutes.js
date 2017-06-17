var express = require('express');
var Worker = require('./Worker');

var router = express.Router(); // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({
    message: 'hooray! welcome to our api!'
  });
});

// more routes for our API will happen here

// on routes that end in /bears
// ----------------------------------------------------
router.route('/Worker')

  // create a worker (accessed at POST http://localhost:8080/api/bears)
  .post(function(req, res) {

    var worker = new Worker(); // create a new instance of the worker model
    worker.name = req.body.name; // set the workers name (comes from the request)

    // save the worker and check for errors
    worker.save(function(err) {
      if (err)
        res.send(err);

      res.json({
        message: 'Worker created!'
      });
    });
  })

  .get(function(req, res) {
    Worker.find(function(err, worker) {
      if (err)
        res.send(err);

      res.json(worker);
    });
  });

router.route('/Worker/:worker_id')

  // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
  .get(function(req, res) {
    Worker.findById(req.params.worker_id, function(err, worker) {
      if (worker === null || err)
        res.status(404).send('Not found');
      res.json(worker);
    });
  })

  .put(function(req, res) {

    // use our bear model to find the bear we want
    Worker.findById(req.params.worker_id, function(err, worker) {

      if (err)
        res.send(err);

      worker.name = req.body.name; // update the bears info

      // save the bear
      worker.save(function(err) {
        if (err)
          res.send(err);

        res.json({
          message: 'Worker updated!'
        });
      });

    });
  })

  .delete(function(req, res) {
    Worker.remove({
      _id: req.params.worker_id
    }, function(err, worker) {
      if (err)
        res.send(err);

      res.json({
        message: 'Successfully deleted'
      });
    });
  });

module.exports = router;
