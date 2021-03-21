//alert("123");

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", 
  database: "users",
  password: "root"
});

connection.connect(err => {
  alert(err)
  if (err) {
    console.log(err);
    return err;
  } else {
  console.log("Loaded");
  }
});

let query = "SELECT `name` FROM `user_data` WHERE id = 1";

connection.query(query, (err, result) => {
  alert(result);
});


/*
"ID Update"

SET @autoid := 0;
UPDATE user_data SET id = @autoid := (@autoid + 1);
ALTER TABLE user_data AUTO_INCREMENT = 1;
*/