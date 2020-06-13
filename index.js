const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/medical',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
//Habilitar BodyParse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//Habilitar Routing
app.use('/',routes());

app.listen(4000,()=>{
 console.log('Server ON') 
})