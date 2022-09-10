import type {Note} from "./Types";

 const api = { 
    notes: {
    list: (): Note[] =>  [{ 
    id: 'nota',
    title: '',
    lastEdited: '',
    archived: true,
    content: '',
    categories: ['random'],
    },
    { 
      id: 'nota1',
    title: '',
    lastEdited: '',
    archived: true,
    content: '',
    categories: ['random'],
    },
    { 
      id: 'nota2',
    title: '',
    lastEdited: '',
    archived: true,
    content: '',
    categories: ['random'],
    },
    ]
    }
    }

    export default api;