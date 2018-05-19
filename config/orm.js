const connection = require('../config/connection.js'); 

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

const orm = {
  selectAll: function(table, cb) {
    let qString = `SELECT * FROM ${table};`; 
    connection.query(qString, function(err, result) {
      if (err) {throw err}; 
      cb(result);
    }); 
  }, 
  insertOne: function(table, cols, vals, cb) {
    // INSERT INTO playlist (id, title, artist, genre)
    // VALUES (1, 'A', 'A', 'A');
    let qString = `INSERT INTO ${table} (${cols.toString()}) `; 
    qString += `VALUES (${printQuestionMarks(vals.length)});`;

    console.log(qString); 

    connection.query(qString, vals, function(err, result) {
      if (err) {throw err;} 
      cb(result); 
    });
  }, 
  updateOne: function(table, objColVals, condition, cb) {
    // UPDATE table_name
    // SET column1 = value1, column2 = value2, ...
    // WHERE condition;
    console.log('table: ' + table); 
    console.log('objColVals: ' + objToSql(objColVals)); 
    console.log('condition: ' + condition); 

    let qString = `UPDATE ${table} SET ${objToSql(objColVals)} `; 
    qString += `WHERE ${condition};`; 

    console.log(qString); 

    connection.query(qString, function(err, result) {
      if (err) {throw err;}
      cd(result); 
    });
  }
}; 

module.exports = orm; 
