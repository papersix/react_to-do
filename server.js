'use strict'
const express     =  require('express')
const path        =  require('path')
const logger      =  require('morgan')
const app         =  express();
const PORT        =  process.env.port || 3009
const tasksRoute  = require('./routes/tasks.js');


// hey!  this is fun
const env         = process.env.NODE_ENV || 'development';
const DEV         = env==='development';
const dotenv      = (DEV) ? require('dotenv').config() : undefined;
// something to see what type of enviornment we are in
//

app.use('/tasks', tasksRoute);

app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))


app.get ('/', function(req,res){
  res.send('testing home')
})

app.listen(PORT, ()=>
  console.log('server is  listening on', PORT)
  )





