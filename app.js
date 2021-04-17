const express = require('express');
const port = 3000;
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  //   res.send(`<h1>Hello There</h1>`);
  const today = new Date();
  const day = '';
  // if (today.getDay() === 5) {
  if (today.getDay() === 6 || today.getDay() === 0) {
    day = 'Weekend';
    // res.send(`Yay it's the weekend!`);
  } else {
    day = 'Weekday';
    // res.send(`Boo! I have to work`);
  }
  res.render('list', { kindOfDay: day });
});

app.listen(port, () => {
  console.log(`Server startd on port ${port}`);
});
