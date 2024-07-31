const mockData = [
    {
      "id": "folder-1",
      "name": "Folder 1",
      "files": [
        {
          "id": "file-1-1",
          "name": "File 1-1",
          "notes": [
            {
              "id": "note-1-1-1",
              "name": "Note 1-1-1"
            },
            {
              "id": "note-1-1-2",
              "name": "Note 1-1-2"
            }
          ]
        },
        {
          "id": "file-1-2",
          "name": "File 1-2",
          "notes": [
            {
              "id": "note-1-2-1",
              "name": "Note 1-2-1"
            }
          ]
        }
      ]
    },
    {
      "id": "folder-2",
      "name": "Folder 2",
      "files": [
        {
          "id": "file-2-1",
          "name": "File 2-1",
          "notes": [
            {
              "id": "note-2-1-1",
              "name": "Note 2-1-1"
            },
            {
              "id": "note-2-1-2",
              "name": "Note 2-1-2"
            },
            {
              "id": "note-2-1-3",
              "name": "Note 2-1-3"
            }
          ]
        }
      ]
    }
  ]
  
  export default mockData;

  export const arrowIcons = {
    // true: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-chevron-down"><circle cx="12" cy="12" r="10"/><path d="m16 10-4 4-4-4"/></svg>,
    // false: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-chevron-right"><circle cx="12" cy="12" r="10" /><path d="m10 8 4 4-4 4" /></svg>,
    true: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 16L6 10H18L12 16Z"></path></svg>,
    false: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 12L10 18V6L16 12Z"></path></svg>,
  }