const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;


const cors = require('cors');
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
        methods : ['GET','POST']
    })
)


app.use(express.json());
require('./config/passport');
const userRoutes = require('./Routes/Routes_User');
const authRoutes = require('./Routes/Auth');

app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/user',userRoutes);

app.listen(PORT,() =>{
    console.log(`listening on ${PORT}`);
})

const {dbConnect} = require('./config/database');
dbConnect();

