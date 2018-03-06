const express = require('express');

const publicweb = process.env.PUBLICWEB || './dist/publicweb';
const app = express();

app.use(express.static(publicweb));
console.log(`serving ${publicweb}`);
app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: publicweb });
});

const port = process.env.PORT || '443';
app.listen(port, () => console.log(`API running on localhost:${port}`));