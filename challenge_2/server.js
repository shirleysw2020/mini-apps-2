const express = require('express');
const app = express();
const PORT = 4000;

const access_token = 'fill_in';

app.use(express.static(__dirname + '/public'));


app.listen(PORT, () => {
  console.log(`app listening on port: ${PORT}`);
});