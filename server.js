const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Start the app
const app = express();

//Start DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { 
   useNewUrlParser: true,
   useUnifiedTopology: true
});
requireDir('./src/models');

const Product = mongoose.model('Product');

//First route
app.get('/', (req, res) => {
   Product.create({
      title: 'Node Project',
      description: 'Build a node project',
      url: 'http://github.com/facebook/react-native'
   });

   return res.send('Hello test!')
});

app.listen(3001);
