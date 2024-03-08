const express = require('express');
const router = express.Router();
const pool = require('../config/db');

//module.exports = router;

// Rota para listar todos os clientes
router.get('/', async (req, res) => {
  // Lógica para listar clientes (ainda não implementada)
  // res.send('Lista de clientes');
  try {
    const result = await pool.query('SELECT * FROM clientes');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao listar clientes:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para cadastrar um novo cliente
router.post('/', async (req, res) => {
  // Lógica para cadastrar um cliente (ainda não implementada)
  //res.send('Cliente cadastrado com sucesso');
  const { nome, email, telefone, coordenada_x, coordenada_y } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO clientes (nome, email, telefone, coordenada_x, coordenada_y) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [nome, email, telefone, coordenada_x, coordenada_y]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao cadastrar cliente:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para visualizar um cliente por ID
router.get('/:id', async (req, res) => {
  // Lógica para visualizar um cliente por ID (ainda não implementada)
  // const clienteId = req.params.id;
  // res.send(`Visualizando cliente com ID ${clienteId}`);
  const clienteId = req.params.id;

  try {
    const result = await pool.query('SELECT * FROM clientes WHERE id = $1', [clienteId]);

    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send('Cliente não encontrado');
    }
  } catch (error) {
    console.error('Erro ao visualizar cliente:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

router.delete('/:id', async (req, res) => {
  const clienteId = req.params.id;

  try {
    const result = await pool.query('DELETE FROM clientes WHERE id = $1 RETURNING *', [clienteId]);

    if (result.rows.length > 0) {
      res.json({ message: 'Cliente excluído com sucesso', cliente: result.rows[0] });
    } else {
      res.status(404).send('Cliente não encontrado');
    }
  } catch (error) {
    console.error('Erro ao excluir cliente:', error);
    res.status(500).send('Erro interno do servidor');
  }
});

module.exports = router;
