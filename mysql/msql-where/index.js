var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

// -----Select With a Filter
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// -----Wildcard Characters
// con.connect(function (err) {
//   if (err) throw err;
//   con.query(
//     "SELECT * FROM customers WHERE address LIKE 'c%'",
//     function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     }
//   );
// });

// -----Escaping Query Values

var adr = "Mountain 21";
var sql = "SELECT * FROM customers WHERE address = " + mysql.escape(adr);
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});