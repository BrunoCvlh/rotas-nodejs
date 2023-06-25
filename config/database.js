const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1/dimontagna', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao mongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

