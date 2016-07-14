'use strict'
const express   =  require('express')
const path      =  require('path')
const logger    =  require('morgan')
const app       =  express();
const PORT     =  process.env.port || 3009


app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, ()=>
  console.log('server ihere listening on', PORT)
  )

app.route('/tasks/:id')

  .get((req,res)=>res.send(`show one task' ${req.params.id}`))
  .put((req,res)=>res.send(`edit one task ${req.params.id}`))
  .delete((req,res)=>res.send(`delete one task ${req.params.id}`))

app.route('/tasks')

  .get((req,res)=>res.send('show tasks'))
  .post((req,res)=>res.send('posted new task'))


// app.get ('/', (res, req)=>{
//   res.send('testing home')
// })






