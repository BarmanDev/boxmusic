const db = require('../config/db');

exports.getAllArtists = async (req, res) => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM artist');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error al obtener los artistas: ' + error.message);
    res.status(500).json({ error: 'Error al obtener los artistas de la base de datos' });
  }
};

exports.getArtistById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.promise().query('SELECT * FROM artist WHERE id_artist = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Artista no encontrado' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error al obtener el artista: ' + error.message);
    res.status(500).json({ error: 'Error al obtener el artista de la base de datos' });
  }
};

exports.createArtist = async (req, res) => {
  const { name, bio, contact, service_id } = req.body;
  try {
    await db.promise().query('INSERT INTO artist (name, bio, contact, service_id) VALUES (?, ?, ?, ?)', [name, bio, contact, service_id]);
    res.status(201).json({ message: 'Artista creado exitosamente' });
  } catch (error) {
    console.error('Error al crear el artista: ' + error.message);
    res.status(500).json({ error: 'Error al crear el artista en la base de datos' });
  }
};

exports.updateArtist = async (req, res) => {
  const { id } = req.params;
  const { name, bio, contact, service_id } = req.body;
  try {
    await db.promise().query('UPDATE artist SET name = ?, bio = ?, contact = ?, service_id = ? WHERE id_artist = ?', [name, bio, contact, service_id, id]);
    res.status(200).json({ message: 'Artista actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar el artista: ' + error.message);
    res.status(500).json({ error: 'Error al actualizar el artista en la base de datos' });
  }
};

// Delete da fallos voy a crear los demas controller por si se debe a ese el problema
exports.deleteArtist = async (req, res) => {
  const { id } = req.params;
  try {
    await db.promise().query('DELETE FROM songs WHERE artist_id = ?', [id]);

    await db.promise().query('DELETE FROM contact WHERE artist_id = ?', [id]);

    await db.promise().query('DELETE FROM favorites WHERE id_artist = ?', [id]);

    await db.promise().query('DELETE FROM artist WHERE id_artist = ?', [id]);

    res.status(200).json({ message: 'Artista y registros relacionados eliminados exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el artista y registros relacionados: ' + error.message);
    res.status(500).json({ error: 'Error al eliminar el artista y registros relacionados de la base de datos' });
  }
};




  
