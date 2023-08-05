import express from 'express';
import services from '../services';
import { validateNoteId } from '../middlewares/validateIdNote';
import { validateNote } from '../middlewares/validateBodyNote';
const router = express.Router();

router.get('/', services.getAllNotes);
router.get('/stats', services.getNotesStats);
router.get('/:id', services.getNote);
router.post('/', validateNote, services.createNote);
router.delete('/:id', services.deleteNote);
router.patch('/:id', validateNoteId, services.editNote);

export default router;