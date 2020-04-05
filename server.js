const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const path = require('path');
const app = express();

// BodyParser Middlware
app.use(bodyParser.json());

// Db Config
const db = require('./config/keys').mongoURI;

//connect   
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => console.log('DB connected....')).catch(err => console.log(err));

// Route
app.use('/api/items', items);

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
