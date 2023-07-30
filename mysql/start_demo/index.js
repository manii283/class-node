var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pothfolio",
});

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("select * from contacts", function (err, result) {
      if (err) throw err;
      console.log("Result: " + JSON.stringify(result));
    });
  });

