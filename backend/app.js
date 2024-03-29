const express = require('express');
const bcrypt = require('bcrypt');
const pg = require('pg');
const cors = require('cors')
const nodemailer = require('nodemailer');
const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());
app.use(cors())

// PostgreSQL client setup
const client = new pg.Client({
  connectionString: 'postgresql://postgres:0911@localhost:5432/postgres'
});
client.connect();

// Nodemailer transporter setup
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: '',
//     pass: ''
//   }
// });

// Registration endpoint
app.post('/register', async (req, res) => {
  const { email, password, firstName, lastName, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const result = await client.query(
      'INSERT INTO users (email, password_hash, first_name, last_name, role, name) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id',
      [email, hashedPassword, firstName, lastName, role, firstName]);
    const userId = result.rows[0].id;

    // // Send welcome email
    // await transporter.sendMail({
    //   from: '"Your App Name" <yourgmail@gmail.com>',
    //   to: email,
    //   subject: 'Welcome to Our App',
    //   text: 'Thank you for registering!'
    // });

    res.json({ userId, email, firstName, lastName, role });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error registering new user');
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (user && await bcrypt.compare(password, user.password_hash)) {
      res.send({
        email
      });
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in user');
  }
});

app.get('/users', async (req, res) => {
  try {
    // Execute a query to fetch all users
    const result = await client.query('SELECT id, email FROM users');
    const users = result.rows;

    // Send the fetched users as a response
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Error fetching users');
  }
});

app.get('/events', async (req, res) => {
  const result = await client.query('SELECT * FROM events')
  res.status(200).json(result.rows)
})

app.post('/events', async (req, res) => {
  const { event_name, start_time, end_time } = req.body;
  try {
    const query = 'INSERT INTO events (event_name, start_time, end_time) VALUES ($1, $2, $3) RETURNING *';
    const values = [event_name, start_time, end_time];
    const result = await client.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


app.delete('/events/:event_id', async (req, res) => {
  const { event_id } = req.params;
  try {
    const query = 'DELETE FROM events WHERE event_id = $1 RETURNING *';
    const values = [event_id];
    const result = await client.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).send('Event not found');
    }
    res.send({ message: "Event deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
