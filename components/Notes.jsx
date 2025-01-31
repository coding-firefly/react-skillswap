import React from "react";


function Note({note, onDelete}){
    const readable_date = new Date(note.created_at).toLocaleDateString("en-GB")

    return <>
    
        <p className="js-date">{readable_date}</p>
        <p className="js-title">{note.title}</p>
        <p className="js-content">{note.content}</p>
        <p className="js-search">{note.search}</p>
        <p className="js-offer">{note.offer}</p>
        <p className="js-other">{note.other}</p>

        <button className="js-deleteButton" onClick={()=>onDelete(note.id)}>init._Delete_</button>

    </>
}

export default Note;