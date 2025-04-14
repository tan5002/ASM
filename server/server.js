require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connect = require("./config/connect")
const projectRoutes = require('./routes/project');
const userRoutes = require('./routes/user');

connect();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/projects', projectRoutes);

app.use('/api/user', userRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
