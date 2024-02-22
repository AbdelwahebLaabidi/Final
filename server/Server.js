const express = require('express')
const connectDB = require('./Config/ConnectDB')
const userRoute = require('./Routes/User')
const postRoute = require('./Routes/Post')
const commentaireRoute = require('./Routes/Commentaire')
const cors = require('cors')
const app = express()

require ('dotenv').config()


connectDB()
app.use(cors(
    {
        origin: ["https://deploy-mern-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json())
app.use('/api/authProject', userRoute)
app.use('/api/post', postRoute)
app.use('/api/commentaire', commentaireRoute)



app.listen(process.env.port, console.log(`Server is running on the port ${process.env.port}`))