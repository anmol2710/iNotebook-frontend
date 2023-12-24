import React , { useState } from 'react'
import Cookies from 'universal-cookie'
import Alert from '../Alert';

function AddNote(){

    const cookies = new Cookies();
    const token = cookies.get("token")

    const[title,setTitle] = useState("");
    const[description,setDescription] = useState("");
    const[isNoteCreated , setIsNoteCreated] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();

        const response = await fetch("https://inotebook-backend-2dbx.onrender.com/notes/add",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token, title , description }),
        })
        if(response.ok){
            setIsNoteCreated(true);
        }
    }

    return(
        <>
            <div className="container my-3">
                <h2>Add Notes</h2>
                {isNoteCreated?(
                    <Alert msg="Note Created"/>
                ):(
                    <>
                    </>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="title" className="form-control" id="title" onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" name="description" id="description" cols="20" rows="10" onChange={(e) => setDescription(e.target.value)}  ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )

}

export default AddNote;