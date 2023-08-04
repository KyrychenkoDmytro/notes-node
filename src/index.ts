import express from 'express';
import notesRouter from './routes/notesRouter';

const app = express();
const PORT = 8080;

app.use(express.json());

app.use('/notes', notesRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
