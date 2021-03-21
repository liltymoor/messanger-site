const mysql = require('mysql');

mysql.on('ready', () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  });
});


brows

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "users",
  password: "root"
});

connection.connect(err => {
  alert("123");
  if (err) {
    console.log(err);
    return err;
  } else {
    console.log("Loaded");
  }
});

let query = "SELECT `test_col` FROM `test_1`";

//connection.query(query, (err, result) => {
//  console.log(err);
//  console.log(result);
//});
