const express = require('express');
const mongoose = require('mongoose');

const app = express();

const { PORT = 3001 } = process.env;

// await mongoose.connect('mongodb://127.0.0.1:27017/wtwr_db');
mongoose
.connect('mongodb://127.0.0.1:27017/wtwr_db')
.then(() => {
  console.log("Connected to DB");
})
.catch(console.error);

// new mongoose.Schema

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


