const express = require('express');
const cors = require('cors');
const testController = require('./src/controllers/testController');
const artistRoutes = require('./src/routes/artistRouter'); 
const contactRoutes = require('./src/routes/contactRouter'); 


const app = express();

const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(express.json());
app.use(cors(corsOptions));

app.get('/test', testController);
app.use('/api/v1', artistRoutes);
app.use('/api/v1', contactRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
