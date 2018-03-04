import express from 'express';
import { port } from '../config/env';
import fetch from 'isomorphic-unfetch';

const app = express();
const url = `http://localhost:8080`;

async function testApi() {
  const pageRes = await fetch(
    `${url}/wp-json`
  );
  return await pageRes.json();
}

app.get('/', (req, res) => {
  const page = testApi();
  page.then((wpStuff) => {
    console.log(wpStuff)
    res.send(`Hello World! ${wpStuff}`);
  });
})

app.listen(port, () => console.log('Example app listening on port 3000!'))
