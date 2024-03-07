const express = require('express');
const router = express.Router();

// Rota para listar todos os clientes
router.get('/', (req, res) => {
  // Lógica para listar clientes (ainda não implementada)
  res.send('Lista de clientes');
});

// Rota para cadastrar um novo cliente
router.post('/', (req, res) => {
  // Lógica para cadastrar um cliente (ainda não implementada)
  res.send('Cliente cadastrado com sucesso');
});

// Rota para visualizar um cliente por ID
router.get('/:id', (req, res) => {
  // Lógica para visualizar um cliente por ID (ainda não implementada)
  const clienteId = req.params.id;
  res.send(`Visualizando cliente com ID ${clienteId}`);
});

module.exports = router;
