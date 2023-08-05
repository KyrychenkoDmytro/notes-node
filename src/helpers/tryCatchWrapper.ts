import { Request, Response, NextFunction } from 'express';

const tryCatchWrapper = (ctrl: (req: Request, res: Response, next: NextFunction) => Promise<any>) => {
    const func = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await ctrl(req, res, next);
        } catch (error) {
            next(error);
        }
    };

    return func;
};

export default tryCatchWrapper;