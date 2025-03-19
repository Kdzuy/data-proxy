const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.redirect('https://www.google.com/');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
