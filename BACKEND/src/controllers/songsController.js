const db = require('../config/db');

exports.createSong = async (req, res) => {
    const { name,genre, price, artist_id } = req.body;
    try {
      await db.promise().query('INSERT INTO songs (name, genre, price, artist_id) VALUES (?, ?, ?, ?)', [name, genre, price, artist_id]);
      res.status(201).json({ message: 'Cancion creado exitosamente' });
    } catch (error) {
      console.error('Error al crear el cancion: ' + error.message);
      res.status(500).json({ error: 'Error al crear la cancion en la base de datos' });
    }
  };

  exports.getAllSongs = async (req, res) => {
    try {
      const [rows] = await db.promise().query('SELECT * FROM songs');
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error al obtener los artistas: ' + error.message);
      res.status(500).json({ error: 'Error al obtener los artistas de la base de datos' });
    }
  };