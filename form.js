const express = require('express');
const port = 5000;
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const today = new Date();

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };

  let day = today.toLocaleDateString('en-US', options);
  res.render('form', { kindOfDay: day });
});

app.post('/', (req, res) => {
  console.log(req.body);
  console.log(req.body.wakanda);
});

app.listen(port, () => {
  console.log(`Server startd on port ${port}`);
});
