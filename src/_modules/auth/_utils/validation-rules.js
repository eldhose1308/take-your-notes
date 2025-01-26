import { createSchema, defineRule } from "_utils/validation-library";


export const SignUpSchema = createSchema({
    email: defineRule().required().email().min(8).max(32).build(),
    password: defineRule().required().password().min(8).max(32).build(),
    full_name: defineRule().required().min(3).max(32).build(),
    user_name: defineRule().required().min(3).max(32).build(),
})

export const SignInSchema = createSchema({
    email: defineRule().required().email().min(8).max(32).build(),
    password: defineRule().required().password().min(8).max(32).build(),
})
 


export const ResetPasswordEmailSchema = createSchema({
    email: defineRule().required().email().min(8).max(32).build(),
})
 

export const ResetPasswordSchema = createSchema({
    email: defineRule().required().email().min(8).max(32).build(),
    otp: defineRule().required().min(5).max(8).build(),
    newPassword: defineRule().required().password().min(8).max(32).build(),
    confirmPassword: defineRule().required().password().min(8).max(32).build(),
})
 

