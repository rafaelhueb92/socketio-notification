const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, _ =>
  console.log(`Server running on http://localhost:${PORT}`)
);
