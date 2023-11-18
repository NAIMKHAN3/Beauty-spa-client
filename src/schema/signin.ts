import * as yup from 'yup';

export const signinSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(6).max(24).required("Password is required")
})