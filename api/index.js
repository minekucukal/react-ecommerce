const fs = require('fs');
const cors = require('cors');
const { promisify } = require('util');
const express = require('express');

const readFileAsync = promisify(fs.readFile);

const app = express();

app.use(cors());

app.get('/api/v1/products', async (req, res) => {
  const data = await readFileAsync('./data/products.json', {
    encoding: 'utf8'
  });
  const products = JSON.parse(data);
  res.send(products);
});

app.get('/api/v1/products/:item_id', async (req, res)=>{
  const data = await readFileAsync('./data/products.json', {
    encoding: 'utf8'
  });

  const products = JSON.parse(data);

  const itemId  = req.params.item_id;

  res.send(products.data.find(product => product.item_id === itemId));

});



app.listen(4000, () => {
  console.log('listening on port 4000');
});


