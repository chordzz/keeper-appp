import React, { useState } from 'react';
import Note from './Note';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/fab';
import Zoom from '@material-ui/core/Zoom';


function CreateNote () {

    const [isExpanded, setExpanded] = useState(false);

    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });

    const [allNotes, setAllNotes] = useState([]);

    function handleChange(event) {

        const {value, name} = event.target;

        setNewNote(prevValue => {
            if(name === 'noteTitle') {
                return {
                    title: value,
                    content: prevValue.content
                }
            } else if(name === 'noteContent') {
                return {
                    title: prevValue.title,
                    content: value
                }
            }
        })   
    }



    function handleClick(event) {
        event.preventDefault();
        
        setAllNotes(prevValue => {
            return([...prevValue, newNote])
        })

        setNewNote({
            title: '',
            content: ''
        })
    }

    function expand() {
        setExpanded(true);
    }

    function deleteNote(id) {
        setAllNotes(prevNotes => {
            return prevNotes.filter(
                (note, index) => {
                    return index !== id;
                }
            )
        })
    }



    return(
        <div>
            <form className='create-note'>

                {isExpanded && 
                    <input 
                        name= 'noteTitle'
                        type="text" 
                        value= {newNote.title}
                        placeholder='Title'
                        onChange = {handleChange}
                    />
                }

                <textarea 
                    name="noteContent" 
                    value= {newNote.content}
                    cols="30" 
                    rows={isExpanded ? 3 : 1} 
                    placeholder='Take a note'
                    onChange={handleChange}
                    onClick={expand}
                >
                </textarea>

                <Zoom in={isExpanded}>
                    <Fab 
                    onClick={handleClick}
                    >

                    <AddIcon />

                    </Fab>
                </Zoom>
            </form>

            <div>
                {allNotes.map((note, index) => {
                    return (<Note 
                        key= {index}
                        id = {index}
                        title= {note.title}
                        content= {note.content}
                        onChecked= {deleteNote}
                    />)
                })}
            </div>
        </div>
    )
}

export default CreateNote;