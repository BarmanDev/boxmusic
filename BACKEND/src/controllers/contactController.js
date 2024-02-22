const db = require('../config/db');

exports.getAllContacts = async (req, res) => {
  try {
    const [rows] = await db.promise().query('SELECT * FROM contact');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error al obtener los contactos: ' + error.message);
    res.status(500).json({ error: 'Error al obtener los contactos de la base de datos' });
  }
};

exports.getContactById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.promise().query('SELECT * FROM contact WHERE id_contact = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Contacto no encontrado' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    console.error('Error al obtener el contacto: ' + error.message);
    res.status(500).json({ error: 'Error al obtener el contacto de la base de datos' });
  }
};

exports.createContact = async (req, res) => {
  const { youtube, instagram, phone, email, artist_id } = req.body;
  try {
    await db.promise().query('INSERT INTO contact (youtube, instagram, phone, email, artist_id) VALUES (?, ?, ?, ?, ?)', [youtube, instagram, phone, email, artist_id]);
    res.status(201).json({ message: 'Contacto creado exitosamente' });
  } catch (error) {
    console.error('Error al crear el contacto: ' + error.message);
    res.status(500).json({ error: 'Error al crear el contacto en la base de datos' });
  }
};

exports.updateContact = async (req, res) => {
  const { id } = req.params;
  const { youtube, instagram, phone, email, artist_id } = req.body;
  try {
    await db.promise().query('UPDATE contact SET youtube = ?, instagram = ?, phone = ?, email = ?, artist_id = ? WHERE id_contact = ?', [youtube, instagram, phone, email, artist_id, id]);
    res.status(200).json({ message: 'Contacto actualizado exitosamente' });
  } catch (error) {
    console.error('Error al actualizar el contacto: ' + error.message);
    res.status(500).json({ error: 'Error al actualizar el contacto en la base de datos' });
  }
};

exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    await db.promise().query('DELETE FROM contact WHERE id_contact = ?', [id]);
    res.status(200).json({ message: 'Contacto eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar el contacto: ' + error.message);
    res.status(500).json({ error: 'Error al eliminar el contacto de la base de datos' });
  }
};
