const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const CONNECTION_URL='mongodb+srv://uchiha_madara:uchiha@cluster0.bkx5v.mongodb.net/First?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL).then(()=>{console.log('Connected')})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
