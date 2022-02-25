
var deneme= require('../dao/deneme');

exports.getCityListFunction1 = function(req, res) {
   
  deneme.getCityListFunction1(function(err, data){
      if( err ) console.log(err);
      else res.send(data);
    }, req.body);
};

