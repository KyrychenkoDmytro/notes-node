import { Request, Response, NextFunction } from "express";
import { findOneNote } from "../repositories/notesRepository";
import HttpError from "../helpers/httpErrors";

const getNote = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    const findNote = findOneNote(id);

    if (findNote) {
        return res.status(200).json({ foundNote: findNote, message: "success" });
    }

    throw new HttpError(404, "Note was not found");
};

export default getNote;