const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.redirect('https://datablog.onrender.com/blog');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
