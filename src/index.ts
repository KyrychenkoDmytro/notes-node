import express, { Request, Response, NextFunction } from 'express';
import notesRouter from './routes/notesRouter';

const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/notes', notesRouter);

app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({
        message,
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
