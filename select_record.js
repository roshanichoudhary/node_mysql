var mysql = require('mysql');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  // 5. select all data
  // con.query("SELECT * FROM customers", function (err, result, fields) {
  //   if (err) throw err;
  //   // console.log(fields);
  //   console.log(result);
  // });

  select name and address 
  con.query("SELECT name, address FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});