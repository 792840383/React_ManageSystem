import mysql from "mysql";

export const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"qiu1687759332QWE!",
    database:"management",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

db.query('SELECT * FROM `users`', function(err, results, fields) {
    if(err) {
      console.error(err);
    } else {
      console.log("users success");
    }
  });


