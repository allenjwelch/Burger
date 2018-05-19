const orm = require('../config/orm.js'); 

const burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      console.log(res); 
      // changed cb to console.log
    });
  }, 
  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(res) {
      console.log(res); 
      // changed cb to console.log

    }); 
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      console.log(res); 
      // changed cb to console.log

    }); 
  }
}; 

module.exports = burger; 