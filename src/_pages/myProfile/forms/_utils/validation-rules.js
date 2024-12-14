import { createSchema, defineRule } from "_utils/validation-library";


export const IdentitySchema = createSchema({
    // email: defineRule().required().email().min(8).max(32).build(),
    password: defineRule().required().password().min(8).max(32).build(),
    fullName: defineRule().required().min(3).max(32).build(),
    userName: defineRule().required().min(3).max(32).build(),
})

export const ExtraInformationSchema = createSchema({
    websiteLink: defineRule().required().min(9).max(128).build(),
    phone: defineRule().min(8).max(14).build(),   
    bio: defineRule().required().min(8).max(14).build(),   
})

 

