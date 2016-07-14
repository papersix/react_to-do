'use strict'
const express = require('express')
const tasks = require('express').Router();

let taskData =[]

tasks.route('/:id')

  .get((req,res)=>res.send(`show one task' ${req.params.id}`))
  .put((req,res)=>res.send(`edit one task ${req.params.id}`))
  .delete((req,res)=>res.send(`delete one task ${req.params.id}`))

tasks.route('/')
  .get((req,res)=>res.send('show tasks'))
  .post((req,res)=>res.send('posted new task'))

module.exports = tasks
