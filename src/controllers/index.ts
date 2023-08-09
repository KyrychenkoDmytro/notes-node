import tryCatchWrapper from "../helpers/tryCatchWrapper";
import getNote from "./getNote";
import deleteNote from "./deleteNote";
import getAllNotes from "./getAllNotes";
import createNote from "./createNote";
import getNotesStats from "./getNotesStats";
import editNote from "./editNote";

export default {
    getNote: tryCatchWrapper(getNote),
    deleteNote: tryCatchWrapper(deleteNote),
    getAllNotes: tryCatchWrapper(getAllNotes),
    createNote: tryCatchWrapper(createNote),
    getNotesStats: tryCatchWrapper(getNotesStats),
    editNote: tryCatchWrapper(editNote)
}