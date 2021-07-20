import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

export default function Upload() {
    const [file, setFiles] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/jpeg', 'image/png' ]
   
    function changeHandler(e){
        let selected = e.target.files[0];
        console.log(selected);
    

        if(selected && types.includes(selected.type)) {
            setFiles(selected)
            setError('')
        }else {
            setFiles(null)
            setError("Please select an image file (png or jpeg)")   
        }
    }

    return (
        <div>
            <label>
            <input type = "file" onChange = {changeHandler} />
            <span>+</span>
            </label>
            <div className = "output">
                {error && <div className = "error"> {error} </div> }
                {file && <div className = "file"> {file.name} </div> }
                {file && <ProgressBar file= {file} setFiles={setFiles} /> }
            </div>
        </div>
    )
}
