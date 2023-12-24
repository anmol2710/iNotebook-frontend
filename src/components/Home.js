import React, { useEffect ,useState } from 'react'
import NoteItem from './NoteItem/noteitem';
import Cookies from 'js-cookie';


function Home({isLoggedIn ,handleLogin}) {
    const [notes, setNotes] = useState([{}]);   
    useEffect(() => {
      handleFetch()
    }, [isLoggedIn , notes])
    
    async function handleFetch(){
        if(Cookies.get("token")){
            handleLogin()
        }
        const response = await fetch("https://inotebook-backend-2dbx.onrender.com/notes/fetch" , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user:Cookies.get("token") }),
        })
        const responsedate = await response.json();
        setNotes(responsedate.notes)
    }

    return (
        <>
            <div className="container my-3">
                <h2>Your Notes</h2>
                <div className="notes-container">
                    {notes.map(note => {
                        return <NoteItem key={note._id} note={note} />;
                    })}
                </div>
            </div>
        </>
    )
}

export default Home;