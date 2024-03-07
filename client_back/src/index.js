const express = require('express');
const app = express();
const PORT = 3001;

const clienteRouter = require('./routes/clientes');

// Middleware para processar dados JSON
app.use(express.json());

// Rotas padrão
app.get('/', (req, res) => {
  res.send('Bem-vindo ao seu projeto Express!');
});

app.use('/clientes',clienteRouter);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
