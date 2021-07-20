import { useEffect } from 'react'
import useStorage from "./UseStorage"
import "./ProgressBar.css"

function ProgressBar({file, setFile}) {
    const {url, progress} = useStorage(file)
    // console.log(progress, url);
    useEffect(()=> {
        if(url) {
            setFile =  null;
        }
    }, [url, setFile])

    return (
        <div className = "progress_bar" style={{width: progress + '%'}} >
            
        </div>
    )
}

export default ProgressBar
