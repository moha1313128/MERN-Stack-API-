const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
const app = express();

// BodyParser Middlware
app.use(express.json());

// Db Config
// const db = require('./config/keys').mongoURI;
const db = config.get('mongoURI');

//connect   
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).then(() => console.log('DB connected....')).catch(err => console.log(err));

// Route
app.use('/api/items', require('./routes/api/items'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server are running on port ${port}`));
