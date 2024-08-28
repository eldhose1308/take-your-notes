const mockItem = {
    "id": "1",
    "heading": "My heading",
    "link": "",
    "icon": "",
    "tags": [],
    "content": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut quam in elit viverra semper.
    Praesent convallis nisl nec est interdum, vitae vestibulum mauris pulvinar. Vivamus non purus non ex tristique
    gravida. Proin tempor elit vel ipsum tempus, ut sollicitudin ligula tristique. Integer luctus volutpat
    tincidunt. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et
    malesuada fames ac turpis egestas. Duis a ligula at lacus laoreet sollicitudin. Nulla eget ligula venenatis,
    dapibus nisl sit amet, placerat lacus. Aliquam erat volutpat.`
}

const mockNotes = '123456789'.split('').map(item => {
    const { heading, content } = mockItem;
    return { ...mockItem, id: item, heading: `${heading} ${item}`, content: `${content} ${item}` }
});


const mockFolders = [
    { "label": "Last Wore Dress", "value": "last_wore_dress" },
    { "label": "Drive Clone Drive Clone Drive Clone", "value": "drive_clone" },
    { "label": "Study Materials", "value": "study_materials" },
    { "label": "Project Files", "value": "project_files" },
    { "label": "Meeting Notes", "value": "meeting_notes" }
]


const mockFiles = [
    { "label": "File 1", "value": "file_1" },
    { "label": "File 2", "value": "file_2" },
    { "label": "File 3", "value": "file_3" },
    { "label": "File 4", "value": "file_4" },
    { "label": "File 5", "value": "file_5" }
]

export {
    mockNotes,
    mockFolders,
    mockFiles
} 