const express = require('express');
const port = 4000;
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const today = new Date();

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };

  let day = today.toLocaleDateString('en-US', options);
  res.render('date', { kindOfDay: day });
});

app.listen(port, () => {
  console.log(`Server startd on port ${port}`);
});
