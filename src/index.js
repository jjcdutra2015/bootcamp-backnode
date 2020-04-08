const express = require('express');

const app = express();
app.use(express.json());

app.get('/projects', (req, res) => {
  const { title, owner } = req.query;

  console.log(title);
  console.log(owner);

  return res.json([
    'Project1',
    'Project2',
  ]);
});

app.post('/projects', (req, res) => {
  const { title, owner } = req.body;

  console.log(title);
  console.log(owner);

  return res.json([
    'Project1',
    'Project2',
    'Project3',
  ]);
});

app.put('/projects/:id', (req, res) => {
  const { id } = req.params;

  console.log(id);

  return res.json([
    'Project4',
    'Project2',
    'Project3',
  ]);
});

app.delete('/projects/:id', (req, res) => {
  return res.json([
    'Project2',
    'Project3',
  ]);
});

app.listen(3333, () => {
  console.log('Back-end started')
});