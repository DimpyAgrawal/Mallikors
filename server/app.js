const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const path = require('path');
const axios = require('axios');

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


// app.get('/api/places', async (req, res) => {
//   const { query } = req.query;
//   console.log(req.query);
//   const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`;

//   try {
//     const searchResponse = await axios.get(searchUrl);
//     const places = searchResponse.data.results;
//     console.log(searchResponse);
//     const detailedPlaces = await Promise.all(
//       places.map(async (place) => {
//         const placeId = place.place_id;
//         const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`;
//         const detailsResponse = await axios.get(detailsUrl);
//         const details = detailsResponse.data.result;
//         console.log(detailsResponse);
//         return {
//           name: details.name,
//           address: details.formatted_address,
//           rating: details.rating,
//           userRatingsTotal: details.user_ratings_total,
//           location: details.geometry.location,
//           photos: details.photos
//             ? details.photos.map(
//                 (photo) =>
//                   `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${apiKey}`
//               )
//             : [],
//         };
//       })
//     );

//     res.json({detailedPlaces});
//   } catch (error) {
//     console.error('Error fetching data from Google Places API:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

app.use('/auth',router);
app.use('/',applicat);


const server = app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
   
})
