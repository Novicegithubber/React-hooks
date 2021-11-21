import React, { useState } from 'react';



const Form = ({ addMovie }) => {
    
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie(title);
        setTitle("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Movie title</label>
            <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
            <input type="submit" value="add movie" />
    </form>

    
    )
}


export default Form;