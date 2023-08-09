import { Request, Response } from "express";
import { calcCategoryCounts } from "../services/notesRepository";
import HttpError from "../helpers/httpErrors";

const getNotesStats = async (req: Request, res: Response) => {

    const notesStats = calcCategoryCounts();
    if (notesStats) {
        return res.status(200).json(notesStats);
    }

    throw new HttpError(404, "Notes stats not found");

};

export default getNotesStats;