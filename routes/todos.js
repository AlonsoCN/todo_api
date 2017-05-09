var express = require('express');
var router = express.Router();

/* GET todos listing. */
router.get('/', function(req, res, next) {
  var data = {
    status : 200,
    result : [
      {
          "id": 1,
          "title": "Do homework",
          "complete": false
      },
      {
          "id": 2,
          "title": "Sleep to get ready for party",
          "complete": false
      },
      {
          "id": 3,
          "title": "Take a shower and get dressed",
          "complete": false
      },
      {
          "id": 4,
          "title": "Go to Daniel's party",
          "complete": false
      },
      {
          "id": 5,
          "title": "Get drunk as f*ck",
          "complete": false
      }
    ]
  };
  res.json(data);
});

module.exports = router;
