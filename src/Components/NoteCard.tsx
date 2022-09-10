import type {Note} from "../Types";


type Props = {
    note: Note;
    onArchive: (id: Note['id']) => void;
    onDelete: (id: Note['id']) => void;
    onEdit: (note: Note) => void;
  }



export default function NoteCard({note, onEdit, onArchive, onDelete}: Props) {
    return (
      <div 
      className="nes-container with-title is-rounded is-centered"
      style={{padding: 12, border: '4px solid black',
    margin: '15px'
    }}
      >
      <div> 
        <h3 className="title"> {note.title}  </h3>
        <p> {note.content} </p>
        </div>
        <div style={{display: "flex",gap: 12}}> 

  <button className="nes-btn"
  onClick={() => onArchive(note.id)}
  > Archived </button>

  <button className="nes-btn"
  onClick={() => onEdit(note)}
  > Edit </button>

  <button className="nes-btn"
  onClick={() => onDelete(note.id)}
  > Deleted </button>
          </div>
          </div>
    );
  }