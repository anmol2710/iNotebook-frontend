import React from 'react'
import { Link } from "react-router-dom";

const NoteItem = (props) => {

    async function handleDelete(id){
        const response = await fetch(`https://inotebook-backend-2dbx.onrender.com/notes/delete/${id}`,{
            method:"DELETE",
            headers:{
                'Content-Type': 'application/json',
            }
        })
        if(response.ok){
            console.log(await response.json())
        }
        else{
            console.log(response)
        }
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.note.title}</h5>
                {props.note.description !== undefined ?(

                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.note.description.substring(0,100)}</h6>
                ):(
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.note.description}</h6>
                )}
                <Link to={`/note/${props.note._id}`}>Read More</Link>
            </div>
            <div className="container">
            <i onClick={()=>(handleDelete(props.note._id))} className="fa-solid fa-trash"></i>
            </div>
        </div>
    )

}

export default NoteItem;