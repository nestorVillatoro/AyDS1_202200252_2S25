const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.json({
    nombre: "Néstor Enrique Villatoro Avendaño",
    cancion_favorita: "José José - El Triste"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
