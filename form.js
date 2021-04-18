import express from 'express';
const port = 5000;
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
import date from './datefunction.js';

let newtaks = ['Buy Groceries', 'Buy Milk', 'Buy IceCream'];
let workItems = [];

app.get('/', (req, res) => {
  date();
  console.log(date);
  console.log(date());

  let day = date();
  res.render('form', { listTitle: day, newlistitem: newtaks });
});

app.post('/', (req, res) => {
  let item = req.body.wakanda;
  let newitem = req.body.wakanda;
  console.log(req.body);
  console.log(req.body.wakanda);
  if (req.body.list === 'Work List') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    newtaks.push(newitem);
    res.redirect('/');
  }
});

app.get('/work', (req, res) => {
  res.render('form', { listTitle: 'Work List', newlistitem: workItems });
});

app.post('/work', (req, rest) => {
  console.log(req.body);
  res.redirect('/work');
});

app.listen(port, () => {
  console.log(`Server startd on port ${port}`);
});
