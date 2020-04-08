const express = require('express');

const app = express();

app.get('/projects', (req, res) => {
  return res.json([
    'Project1',
    'Project2',
    'Project3',
  ]);
});

app.post('/projects', (req, res) => {
  return res.json([
    'Project1',
    'Project2',
    'Project3',
    'Project4',
  ]);
});

app.put('/projects/:id', (req, res) => {
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