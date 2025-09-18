// Import express
import express from 'express'
import giftsRouter from './routes/gifts.js'

// Initialize express
const app = express();

// Middlewear
// Serves files from client
app.use('/public', express.static('./public'))
app.use('/script', express.static('./public/scrips'))
app.use('/gifts', giftsRouter)

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})


// Starts the server on port 3001

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})