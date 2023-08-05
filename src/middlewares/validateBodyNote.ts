import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { noteSchema } from "../schema";
import HttpError from "../helpers/httpErrors";

export const validateNote = (req: Request, res: Response, next: NextFunction) => {

    try {

        const validBody = noteSchema.validateSync(req.body);
        const dataToValidate = {
            name: validBody.name,
            created: validBody.created,
            category: validBody.category,
            content: validBody.content,
            archived: validBody.archived,
        };

        req.body = dataToValidate;
        next();
    } catch (error) {
        const validationError: yup.ValidationError = error as yup.ValidationError;
        throw new HttpError(400,  validationError.message);
    }
};
