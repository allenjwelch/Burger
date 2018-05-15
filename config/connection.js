const mysql = require('mysql'); 

const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'user', 
  password: 'root', 
  database: 'burgers_bd'
}); 

connection.connect(function(err) {
  if (err) {
    console.log(`error connecting: ${err.stack}`); 
    return; 
  }
  console.log(`connected as id ${connection.threadId}`); 
}); 

module.exports = connection; 