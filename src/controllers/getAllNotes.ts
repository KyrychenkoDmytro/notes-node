import { Request, Response } from "express";
import { getNotes } from "../services/notesRepository";
import HttpError from "../helpers/httpErrors";

const getAllNotes = async (req: Request, res: Response) => {

    const notes = getNotes();
    if (notes.length) {
        return res.status(200).json(notes);
    }

    throw new HttpError(404, "notes not found");

};

export default getAllNotes;