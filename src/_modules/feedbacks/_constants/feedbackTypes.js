export const FEEDBACK_TYPES = {
    complaint: 'complaint',
    suggestion: 'suggestion',
    enquiry: 'enquiry',
}

export const feedbackTypeModes = [
    { id: 'complaint', label: 'Complaint', modeElement: 'Complaint' },
    { id: 'suggestion', label: 'Suggestion', modeElement: 'Suggestion' },
    { id: 'enquiry', label: 'Enquiry', modeElement: 'Enquiry' },    
];


export const filterQueryParamMappings = {
    enquiry: { type: 'enquiry' },
    suggestion: { type: 'suggestion' },
    complaint: { type: 'complaint' },
}
