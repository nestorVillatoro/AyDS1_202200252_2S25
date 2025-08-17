const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.json({
    nombre: "Néstor Enrique Villatoro Avendaño",
    album_favorito: "José José - 20 triunfadoras"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
