var express = require('express');
var app = express();

//static DB as JSON
// var data = require('./data.json');
// console.log(data);

app.use(express.static(__dirname + '/public'));


app.get('/', function(req,res){

  // var data =
  //     {
  //       type: "Condo",
  //       price: 22000,
  //       address: "213 Grove Street",
  //       description: "Excellent place, really nice view"
  //     },
  //     {
  //       type: "House",
  //       price: 15000,
  //       address: "7823 Winding Street",
  //       description: "Beautiful home with lot's of space for a large family"
  //     },
  //     {
  //       type: "Duplex",
  //       price: 395000,
  //       address: "834 River Lane",
  //       description: "Great neighborhood, and lot's of nice green space"
  //     }

  res.json({
    type: "Condo",
    price: 22000,
    address: "213 Grove Street",
    description: "Excellent place, really nice view"
  });
});


app.listen(3000,function(){
  console.log("Server Started");
});
