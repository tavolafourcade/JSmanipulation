let express = require('express');
let app = express();
const path = require("path");
let mainRoutes = require('./routes/mainRoutes');

app.listen(3000, ()=> console.log('Exitoso'));

app.use('/', mainRoutes);

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "./public")));