import type {Note} from "../Types";

type Props = {
    note: Partial<Note>;
    onClose: VoidFunction; 
    onChange: (field: string, value: string) => void;
    onSave: VoidFunction;
  };
  
  
  
  export default function NoteModal({note, onClose, onChange, onSave} : Props) {
   return (
       <section 
       className="nes-dialog" 
       id="dialog-default" 
       style={{width: '100%', height: 'auto',
        position: 'absolute',
         top: 0, left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
        }}
       >
         <div 
         style={{
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.2)", 
         width: '100%', 
         height: '100%'}}/>
           
  <form method="dialog" style={{
        backgroundColor: "white",
        zIndex: 1,
        padding: 12, 
        border: "5px solid black"}}>
  <h1 className="title"> Create / Edit Note </h1>
  <div className="nes-field">
  <label htmlFor='title'> Title </label>
  <input
  onChange={(event) => onChange('title', event.target.value)}
   value={note.title}
   className="nes-input" 
   id="title" 
   type="text" />
  </div>
  <div className="nes-field">
  <label htmlFor='content'> Content </label>
  <textarea value={note.content} 
  className="nes-textarea" id="content" 
  onChange={(event) => onChange('content', event.target.value)}/>
  </div>
  <div style={{
    marginTop: 24,
    display: 'flex',
   alignItems: 'center', 
   justifyContent: 'space-between'}} className="dialog-menu" >
  <button className="nes-btn" onClick={onClose}> Close </button>
  <button 
  onClick={onSave}
  className="nes-btn is-primary"> Save </button>
  </div>
  </form>
       </section>
   )
  }
  