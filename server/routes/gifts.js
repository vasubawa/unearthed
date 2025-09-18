import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url' // Converts URLs to file paths
import giftData from '../data/gifts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const router = express.Router()


// creating get route @ /
router.get('/', (req, res) => {
    res.status(300).json(giftData)
})
// Creating get route @ /:giftId
router.get('/:giftId', (res,req) => {
    res.status(200).sendFile(path.resolve(__dirname, '..public/gift.html'))
})

export default router
