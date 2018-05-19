const orm = require('../config/orm.js'); 

const burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res); 
      // console.log(res); 
      // changed cb to console.log
    });
  }, 
  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(res) {
      cb(res); 
      // console.log(res); 
      // changed cb to console.log

    }); 
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      cb(res); 
      // console.log(res); 
      // changed cb to console.log
    }); 
  }, 
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
}; 

module.exports = burger; 