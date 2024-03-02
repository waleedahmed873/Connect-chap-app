const express = require ('express');

const connectDB = require('./Mongodb/connect');
const cookieParser = require ('cookie-parser');
const { app, server } = require('./socket/socket');

require('dotenv').config();

require('colors');
app.use(express.json());
connectDB()
app.use(cookieParser());

app.use("/api/auth",require('./routes/authRoutes'));
app.use("/api/messages",require('./routes/messageRoutes'));
app.use("/api/users",require('./routes/userRoutes'));




server.listen(process.env.PORT, () => console.log(`Server started on port:${process.env.PORT.green}`))