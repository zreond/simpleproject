import * as Yup from 'yup'

const MINIMUM_LENGHT = {
    name: 2,
    city: 1,
    coutry: 2
}

const MAXIMUM_LENGTH = {
    name: 20,
    city: 30,
    country: 30
}

export const getUser = {
    schema: {
        params: {
            yupSchema: Yup.object().shape({
                id: Yup.number().required()
            })
        }
    }
}

export const addUser = {
    schema: {
        body: {
            yupSchema: Yup.object().shape({
                name: Yup.string().min(MINIMUM_LENGHT.name).max(MAXIMUM_LENGTH.name),
                email: Yup.string().email(),
                city: Yup.string().required().min(MINIMUM_LENGHT.name).max(MAXIMUM_LENGTH.name),
            }),
        },
    },
}

export const deleteUser = {
    schema: {
        params: {
            yupSchema: Yup.object().shape({
                id: Yup.number().required()
            })
        }
    }
}

export const updateUser = {
    schema: {
        body: {
            yupSchema: Yup.object().shape({
                name: Yup.string(),
                email: Yup.string().email(),
                city: Yup.string().required(),
            }),
        },
    },
}
