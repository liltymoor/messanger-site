const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "test_db",
  password: "root"
});

connection.connect(err => {
  if (err) {
    console.log(err);
    return err;
  } else {
  console.log ("Loaded");
  }
});

let query = "SELECT `test_col` FROM `test_1`";

connection.query(query, (err, result) => {
  console.log(err);
  console.log(result);
});
