import { createSchema, defineRule } from "_utils/validation-library";


export const FeedbackFormSchema = createSchema({
    feedback: defineRule().required().min(2).max(14).build(),   
})

 

