'use strict'

const env         = process.env.NODE_ENV || 'development';
const DEV         = env==='development';
const dotenv      = (DEV) ? require('dotenv').config() : undefined;

const express     =  require('express')
const path        =  require('path')
const logger      =  require('morgan')
const bodyParser  = require('body-parser')
const app         =  express();
const tasksRoute  =  require('./routes/tasks');


const PORT        =  process.env.port || 3009
// hey!  this is fun

// something to see what type of enviornment we are in
//
app.use(logger('dev'))
app.use(bodyParser.json());

app.use('/tasks', tasksRoute);




app.get ('/', function(req,res){
  res.send('testing home')
})

app.listen(PORT, ()=>
  console.log('server is  listening on', PORT)
  )





