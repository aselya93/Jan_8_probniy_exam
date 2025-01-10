const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "..", ".env") });
const express = require("express");
const serverConfig = require("./config/serverConfig");
const indexRouter = require("./routes/index.routes");

const app = express();

serverConfig(app);

const PORT = process.env.PORT || 3000;

app.use("/api", indexRouter);

// Раздаем папку с файлами
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
