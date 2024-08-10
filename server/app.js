const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const path = require('path');

require('./models/user');
require('./models/application');
const router =  require('./routes/auth');
const applicat = require('./routes/router')

dotenv.config();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({credentials: true}));

const port  = process.env.PORT||8080;

mongoose.connect(`mongodb+srv://dimpy:${process.env.DB_PASSWORD}@cluster0.glj5682.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log('database is connected');
}).catch(err =>{
    console.log('Connection error', err.message);
})

const apiKey = 'AIzaSyCeOKb-Q5-NEb5mbNntnFGP61r_-xCsO9Y';


app.use('/auth',router);
app.use('/',applicat);

// Serve the frontend (if needed)
app.use(express.static(path.join(__dirname,'dist')));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,'dist', 'index.html'));
});

const server = app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
   
})
