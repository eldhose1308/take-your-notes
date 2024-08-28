import { createSchema, defineRule } from "_utils/validation-library";


export const FolderNameSchema = createSchema({
    folderName: defineRule().required().min(3).max(32).build(),
    // folderIcon: defineRule().required().password().min(8).max(32).build(),
})

