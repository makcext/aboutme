const express = require('express');
const { json } = require('express');

const app = express();

app.use(json());

app.get('/api', (req, res) => {
  const { weight, distance } = req.body;
  const result = weight * distance;
  res.json({ result });
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});