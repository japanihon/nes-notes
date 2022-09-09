import { useState } from 'react'

import './App.css'

type Note = { 
id: string;
title: string;
lastEdited: string;
archived: boolean;
content: string;
categories: string[];
}

type NoteCardProps = {
  note: Note
}



const api = { 
notes: {
list: () =>  [{ 
id: 'nota',
title: 'Un titulo',
lastEdited: '10/10/10',
archived: false,
content: 'Algun contenido',
categories: ['random'],
},
{ 
  id: 'nota1',
title: 'Un titulo',
lastEdited: '10/10/10',
archived: false,
content: 'Algun contenido',
categories: ['random'],
},
{ 
  id: 'nota2',
title: 'Un titulo',
lastEdited: '10/10/10',
archived: false,
content: 'Algun contenido',
categories: ['random'],
},
]
}
}


function NoteCard({note}: NoteCardProps) {
  return (
    <div 
    className="nes-container with-title"
    style={{padding: 12, border: '4px solid black',
  borderRadius: '40px',
  margin: '15px'
  }}
    >
    <div> 
      <h3 className="title"> {note.title}  </h3>
      <p> Last Edited: {note.lastEdited}</p>
      </div>
      <div style={{display: "flex",gap: 12}}> 
<button className="nes-btn"> Archived </button>
<button className="nes-btn"> Modified </button>
<button className="nes-btn"> Deleted </button>
        </div>
        </div>
  );
}



export default function App() {

const [notes, setNotes] = useState<Note[]>(() => api.notes.list());

  return (
    <main>
<div> Typescript 
<h1> Mis notas </h1>
<button className="nes-btn"> Crear Nota </button>
</div>
<div style={{display: "grid"}}>
{notes.map(note => (
<NoteCard 
key={note.id}
note={note}
/>
))}
</div>
</main>
  )
}

