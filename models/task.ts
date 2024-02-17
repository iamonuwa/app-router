import * as yup from "yup"

export const TaskSchema = yup.object({
    tasks: yup.array().of(
        yup.string().required()
    ),
})

export type Task = yup.InferType<typeof TaskSchema>