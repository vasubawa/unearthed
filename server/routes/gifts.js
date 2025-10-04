import express from 'express'
import GiftsController from '../controllers/gifts.js'

const router = express.Router()

// Get all gifts
router.get('/', GiftsController.getGifts)

// Get gift by ID
router.get('/:giftId', GiftsController.getGiftById)

export default router
