const db = require('../config/db');

const testController = async (req, res) => {
  try {
    const result = await db.promise().query('SELECT 1 + 1 AS solution');
    console.log(result[0][0].solution);
    res.status(200).json({ message: 'Conexión a la base de datos establecida' });
  } catch (error) {
    console.error('Error al realizar la consulta: ' + error.message);
    res.status(500).json({ error: 'Error al conectar a la base de datos' });
  }
};

module.exports = testController;
