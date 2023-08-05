import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { idSchema, editSchema } from "../schema";
import HttpError from "../helpers/httpErrors";
import { Note } from "../types/interfaces";
import { findOneNote } from "../repositories/notesRepository";

export const validateNoteId = (req: Request, res: Response, next: NextFunction) => {

    try {
        req.params = idSchema.validateSync(req.params);
        const validBody = editSchema.validateSync(req.body);
        req.body = validBody;

        next();
    } catch (error) {
        const validationError: yup.ValidationError = error as yup.ValidationError;
        throw new HttpError(400, validationError.message);
    }
};