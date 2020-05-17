const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const { User } = require('./models/user');

const config = require('./config/key');

mongoose.connect(config.mongoURI, { 
        useNewUrlParser: true, 
        useCreateIndex: true,
        useUnifiedTopology: true
     })
    .then(() => console.log('Connected to the database.'))
    .catch((err) => console.error(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/api/users/register', (req, res) => {
    const user = new User(req.body);
    user.save((err, userData) => {
        if(err)
            return res.json({ success: false, err });
        else 
            return res.status(200).json({
                success: true,
                data: userData
            });    
    }); 
});

const PORT = 5000;
 
app.listen(PORT, () => {
    console.log(`Listening to port: ${PORT}`);
});