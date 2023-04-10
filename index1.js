const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myloginapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));
