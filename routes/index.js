var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express.js' });
});


module.exports = router;



// var Request = require("request");
//
// Request.get("https://bikewise.org/api/v2/incidents?page=2&proximity=666%20Broadway%20New%20York%2C%20NY%2010012%2C%20USA&proximity_square=1", (error, response, body) => {
//     if(error) {
//         return console.dir(error);
//     }
//     // console.dir(JSON.parse(body));
//
//     let data = JSON.parse(body)
//     // console.dir(data["incidents"][0]["title"])
//     console.dir(data["incidents"][0])
//
//     // console.dir(typeof [1,2])
//     // console.log(typeof [1,2])
//
// });
