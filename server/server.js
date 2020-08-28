const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;
const route = require('./routes/index.js');

app.use(cors());

app.use(bodyParser.json());
app.use('/', route);

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})