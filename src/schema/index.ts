import * as yup from "yup";

export const noteSchema = yup.object().shape({
    name: yup.string().required(),
    created: yup.date().required(),
    category: yup.string().oneOf(["Task", "Random Thought", "Idea"] as const).required(),
    content: yup.string().required(),
    archived: yup.boolean().default(false),
});

export const editSchema = yup.object().shape({
    name: yup.string(),
    created: yup.date(),
    category: yup.string().oneOf(["Task", "Random Thought", "Idea"] as const),
    content: yup.string(),
    archived: yup.boolean(),
}).test('atLeastOneRequired', 'At least one field is required', function (values) {
    const { name, created, category, content, archived } = values;
    return !!name || !!created || !!category || !!content || !!archived || archived !== undefined;
});

export const idSchema = yup.object().shape({
    id: yup.string().required(),
});
