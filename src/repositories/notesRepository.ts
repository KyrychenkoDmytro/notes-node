import { Note, NumberOfNotesByCategory } from "../types/interfaces";

let notes: Note[] = [
    {
        id: 1,
        name: 'Shopping List',
        created: 'April 20, 2021',
        category: 'Task',
        content: 'Tomatoes, bread',
        archived: false,
    },
    {
        id: 2,
        name: 'The theory of evolut...',
        created: 'April 27, 2021',
        category: 'Random Thought',
        content: 'The evolution...',
        archived: false,
    },
    {
        id: 3,
        name: 'New Feature',
        created: 'May 05, 2021',
        category: 'Idea',
        content: 'Implement new...',
        archived: false,
    },
    {
        id: 4,
        name: 'William Gaddis',
        created: 'May 07, 2021',
        category: 'Idea',
        content: 'Power does not co...',
        archived: false,
    },
    {
        id: 5,
        name: 'Books',
        created: 'May 15, 2021',
        category: 'Task',
        content: 'The Lean Startup',
        archived: false,
    },
    {
        id: 6,
        name: 'Learn javascript',
        created: 'April 12, 2021',
        category: 'Task',
        content: 'Event loop is',
        archived: true,
    },
    {
        id: 7,
        name: 'React or Angular?',
        created: 'April 15, 2021',
        category: 'Random Thought',
        content: 'Library or framework',
        archived: true,
    }
];

export const getNotes = (): Note[] => notes;
export const findOneNote = (findId: number) => notes.find((note) => Number(note.id) === Number(findId));
export const createOneNote = (newNote: Note) => (notes = [...notes, newNote]);
export const updateOneNote = (editId: number, newNote: Note) => {
    deleteOneNote(editId);
    createOneNote(newNote);
};
export const deleteOneNote = (removeId: number) => (notes = [...notes.filter((note) => Number(note.id) !== Number(removeId))]);

export const calcCategoryCounts = () => {
    const categoryCounts: NumberOfNotesByCategory = {};
    const notes = getNotes();

    notes.forEach(note => {
        const { category, archived } = note;
        if (!categoryCounts[category]) {
            categoryCounts[category] = { total: 0, archived: 0 };
        }
        categoryCounts[category].total++;
        if (archived) {
            categoryCounts[category].archived++;
        }
    });

    return categoryCounts;
}