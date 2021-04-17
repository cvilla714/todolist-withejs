const express = require('express');
const port = 3000;
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const today = new Date();
  const currentday = today.getDay();
  let day = '';

  switch (currentday) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monda';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
  }

  res.render('list', { kindOfDay: day });
});

app.listen(port, () => {
  console.log(`Server startd on port ${port}`);
});
