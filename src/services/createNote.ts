import { Request, Response, NextFunction } from "express";
import HttpError from "../helpers/httpErrors";
import { createOneNote } from "../repositories/notesRepository";

const createNote = async (req: Request, res: Response, next: NextFunction) => {
    const newNote = req.body;
    const createdNote = createOneNote(newNote);

    if (createdNote) {
        return res.status(200).json({ createdNote, message: "Created success" });
    }

    throw new HttpError(400, "Note was not created");
};

export default createNote;