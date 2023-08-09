import { Request, Response, NextFunction } from 'express';
import { deleteOneNote, findOneNote } from '../services/notesRepository';
import HttpError from '../helpers/httpErrors';

const deleteNote = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const findNote = findOneNote(id);

    if (findNote) {
        deleteOneNote(id);
        return res.status(200).json({ deletedNote: findNote, message: "Deleted success" });
    }

    throw new HttpError(404, "Note was not found");
};

export default deleteNote;