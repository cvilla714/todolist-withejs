import express from 'express';
// const express = require('express');
const port = 5000;
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
import day from './datefunction.js';

// let newitem = '';
let newtaks = ['Buy Groceries', 'Buy Milk', 'Buy IceCream'];
let workItems = [];

app.get('/', (req, res) => {
  day();
  console.log(day);
  console.log(day());
  // const today = new Date();

  // const options = {
  //   weekday: 'long',
  //   day: 'numeric',
  //   month: 'long',
  // };

  // let day = today.toLocaleDateString('en-US', options);
  // //   res.render('form', { kindOfDay: day, newlistitem: newitem });
  // res.render('form', { kindOfDay: day, newlistitem: newtaks });
  res.render('form', { listTitle: day(), newlistitem: newtaks });
});

app.post('/', (req, res) => {
  let item = req.body.wakanda;
  let newitem = req.body.wakanda;
  console.log(req.body);
  console.log(req.body.wakanda);
  //   let newitem = req.body.wakanda;
  //   res.render('form', { newlistitem: newitem });
  if (req.body.list === 'Work List') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    newtaks.push(newitem);
    res.redirect('/');
  }
  // let newitem = req.body.wakanda;
  // newtaks.push(newitem);
  // res.redirect('/');
});

app.get('/work', (req, res) => {
  res.render('form', { listTitle: 'Work List', newlistitem: workItems });
});

app.post('/work', (req, rest) => {
  console.log(req.body);
  // let item = req.body.wakanda;
  // workItems.push(item);
  res.redirect('/work');
});

app.listen(port, () => {
  console.log(`Server startd on port ${port}`);
});
