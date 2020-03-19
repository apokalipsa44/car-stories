const express = require('express');
const passportConfig = require('./services/passportConfig');
const authRoutes = require('./routes/authRoutes');

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);