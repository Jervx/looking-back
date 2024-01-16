import z from "zod";

export const UserRegisterValidation = z.object({
    name: z.string({ required_error : "name is required"}).min(1, "name is required"),
    email: z.string({ required_error : "email is required"}).email("email must be valid"),
    password: z
        .string({ required_error : "password is required"})
        .min(8, "Password must be minimum of 8 characters")
        .refine(
            (value) =>
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#^&])/.test(value),
            "Password must include uppercase, lowercase, digit, and special character."
        ),
});

export const UserLoginValidation = z.object({
    email: z.string({ required_error : "email is required"}).email("invalid email"),
    password: z.string({ required_error : "password is required"}).min(1, "password is required"),
});

export const UserGetValidation = z.object({
    id : z.string({ required_error : "params id is required"}).min(1, "user id param is required")
})