const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 80;

console.log("port:",port);

console.log("host:",process.env.MYSQL_HOST)
console.log("myport:",process.env.MYSQL_PORT)

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || 3306,
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  database: process.env.MYSQL_DATABASE || 'mydatabase',
});

// Route to fetch data from MySQL database
app.get('/data', (req, res) => {
  // Get a connection from the pool
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Query the database
    connection.query('SELECT * FROM testtable', (err, results) => {
      connection.release(); // Release the connection back to the pool

      if (err) {
        console.error('Error querying database:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }

      // Send the results as JSON
      res.json(results);
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});