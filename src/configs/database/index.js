var mysql = require("mysql2/promise");

// var pool = mysql.createPool({
//   host: "localhost",
//   port: process.env.DB_LOCALHOST || 3306,
//   user: "nhom12",
//   password: "1",
//   database: "shop",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

var pool = mysql.createPool({
  host: "localhost",
  port: process.env.DB_LOCALHOST || 3306,
  user: "root",
  password: "",
  database: "shop",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports.query = async function (query) {
  try {
    console.log("Connect succesfully");
    var Data = await pool.query(query);
    table = Data[0];
    return table;
  } catch (err) {
    console.log("Error connecting...");
    throw err;
  }
};
