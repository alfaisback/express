const express = require('express');
const app = express();
const port = 3333;

// Fungsi untuk mengirimkan file HTML
function sendHTMLFile(res, filename) {
  res.sendFile(__dirname + '/' + filename);
}

// Rute untuk halaman utama
app.get('/', (req, res) => {
  sendHTMLFile(res, 'index.html');
});

// Rute untuk halaman about
app.get('/about', (req, res) => {
  sendHTMLFile(res, 'about.html');
});

// Rute untuk halaman user
app.get('/user/:id', (req, res) => {
  sendHTMLFile(res, 'user.html');
});

app.listen(port, () => console.log(`Server running on port ${port}`));
