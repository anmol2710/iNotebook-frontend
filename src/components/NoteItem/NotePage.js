import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

const NotePage = () => {

    const [note, SetNote] = useState([]);

    const { id } = useParams();
    useEffect(() => {
        fetchNote();
    }, [id])

    async function fetchNote() {
        const response = await fetch(`https://inotebook-backend-2dbx.onrender.com/notes/${id}`, {
            method: "GET"
        }).catch((e) => { console.log(e) })
        const noteData = await response.json();
        SetNote(noteData[0])
        console.log(noteData[0])
    }

    console.log(id)
    return (
        <>
            <div className="container my-4 gap10">
                <h1>{note.title}</h1>
                <p>{note.description}</p>
            </div>
        </>
    )

}

export default NotePage;