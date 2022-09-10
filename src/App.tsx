import { useState, useMemo } from 'react';

import './App.css'

import type {Note} from "./Types";

import api from "./Api";

import NoteCard from '../src/Components/NoteCard'

import NoteModal from '../src/Components/NoteModal'

import Footer from '../src/Components/Footer'

export default function App() {

const [notes, setNotes] = useState<Note[]>(() => api.notes.list());

const [draft, setDraft] = useState<null | Partial<Note>>(null);

const [view, setView] = useState<"active" | "archived">("active")

const matches = useMemo(() => {
  return notes.filter(note => view === 'active' ? !note.archived : note.archived)
}, [notes, view])

function handleEdit(note: Note) {
setDraft(note);
}


function handleDelete(id: Note['id']) {
  setNotes(notes => notes.filter(note => note.id != id))
}

function handleSave() {
  if (draft?.id) {
    setNotes((notes) => 
    notes.map((note) => {
       if (note.id != draft.id) return note;

    return {...draft,
      lastEdited: new Date().toString(),
    } as Note;
    }),
    );
  } else {
  setNotes((notes) => notes.concat({
id: String(+new Date()),
lastEdited: new Date().toString(),
    ...(draft as Omit<Note, "id" | 'lastEdited'>),
  }),
  );
}  setDraft(null);
}

function handleArchive(id: Note["id"]) {
  setNotes((notes) =>
   notes.map((note) => {
     if (note.id != id ) return note;

     return { 
     ...note,
     archived: !note.archived,
     };
  }),
  );
}

function handleDraftChange(field: string, value: string) {
  setDraft((draft) => ({ 
...draft,
[field]: value,
  }));
}

  return (
    <main className="nes-container with-title is-rounded is-centered"
    style={{margin: "10px", backgroundColor: "#d3cbcb" }} >
<div style={{margin: "10px"}}> React + Typescript + Nes.CSS
<h1 style={{margin: "10px"}}> Nes Notes </h1>
<div  className="nes-container is-rounded is-dark" style={{display: "flex", gap: 24, justifyContent: "center",
  alignItems: "center"}}>
<button className="nes-btn is-centered" onClick={() => setDraft({})} >
   Make a Note 
   </button>
<button className="nes-btn" onClick={() => setView(view => view === "active" ? "archived" : "active")} > 
 {view === "active" ? "See Archived" : "See Actives"} 
</button>
</div>
</div>
<div style={{display: "grid", justifyContent: "center",
  alignItems: "center"}}>
{matches.map(note => (
<NoteCard 
onEdit={handleEdit}
onDelete={handleDelete}
onArchive={handleArchive}
key={note.id}
note={note}
/>
))}
</div>
{draft &&  <NoteModal 
onSave={handleSave}
 onChange={handleDraftChange}  
 note={draft} 
 onClose={() => setDraft(null)} />}
 <Footer />
</main>
  )
}

