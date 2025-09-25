import express from 'express'
import giftsRouter from './routes/gifts.js'

const app = express();

app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))
app.use('/gifts', giftsRouter)

// Home route
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

// Catch-all 404 route
app.use((req, res) => {
    res.status(404).sendFile('404.html', { root: './public' });
});

const PORT = process.env.PORT || 3001

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})