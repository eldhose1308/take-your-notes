import { createSchema, defineRule } from "_utils/validation-library";


export const SignUpSchema = createSchema({
    email: defineRule().required().email().min(8).max(32).build(),
    password: defineRule().required().password().min(8).max(32).build(),
})

