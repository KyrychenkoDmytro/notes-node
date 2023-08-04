import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
   await res.send('atata')
})

export default router;