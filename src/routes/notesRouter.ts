import express from 'express';
import controllers from '../controllers';
import { validateNoteId } from '../middlewares/validateIdNote';
import { validateNote } from '../middlewares/validateBodyNote';
const router = express.Router();

router.get('/', controllers.getAllNotes);
router.get('/stats', controllers.getNotesStats);
router.get('/:id', controllers.getNote);
router.post('/', validateNote, controllers.createNote);
router.delete('/:id', controllers.deleteNote);
router.patch('/:id', validateNoteId, controllers.editNote);

export default router;