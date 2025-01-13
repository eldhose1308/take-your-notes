export const SUBSCRIPTION_MODES = {
    users: 'users',
    categories: 'categories'
}

export const followStatusModes = [
    { id: SUBSCRIPTION_MODES.users, label: 'Users', modeElement: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg> },
    { id: SUBSCRIPTION_MODES.categories, label: 'Categories', modeElement: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-square-menu"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/></svg> },
];


export const filterQueryParamMappings = {
    users: { filters: 'users' },
    categories: { filters: 'categories' },
}
