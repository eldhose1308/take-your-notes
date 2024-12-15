import { createSchema, defineRule } from "_utils/validation-library";


export const BasicInformationFormSchema = createSchema({
    appName: defineRule().required().min(2).max(32).build(),   
    subdomainName: defineRule().required().min(3).max(10).build(), 
    contactEmail: defineRule().required().email().min(8).max(32).build(),  
    tagLine: defineRule().min(2).max(256).build(),   
})

 

