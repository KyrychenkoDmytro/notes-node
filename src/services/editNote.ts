import { Request, Response, NextFunction } from 'express';
import { updateOneNote, findOneNote } from '../repositories/notesRepository';
import HttpError from '../helpers/httpErrors';

const editNote = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const bodyNote = req.body;
    const findNote = findOneNote(id);

    if (findNote) {
        const editedNote = {
            id,
            name: bodyNote.name || findNote.name,
            created: bodyNote.created || findNote.created,
            category: bodyNote.category || findNote.category,
            content: bodyNote.content || findNote.content,
            archived: bodyNote.archived !== undefined ? bodyNote.archived : findNote.archived,
        };
    
        const updatedNote = updateOneNote(editedNote);
    
        return res.status(200).json({ updatedNote, message: "Updated success" });
    }
    

    throw new HttpError(404, "Note was not found");
};

export default editNote;