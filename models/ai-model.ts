import * as yup from "yup"

export const AIModel = yup.object().shape({
    model: yup.string().required(),
    version: yup.string().required(),
    license: yup.string().required(),
    contributors: yup.array().of(yup.string()).required(),
    rating: yup.number().required(),
})

export type AIModel = yup.InferType<typeof AIModel>