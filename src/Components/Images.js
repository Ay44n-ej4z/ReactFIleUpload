import React from 'react'
import UsefireStore from './UsefireStore'

export default function Images() {
    const {docs} = UsefireStore('images')
    console.log(docs);
    return (
        <div className = "container">
            {docs && docs.map(doc => (
                <div className = "img-wrap" key = {doc.id}> 
                <img src = {doc.url} alt = "uploaded pic" />
                </div>
            ) )}
        </div>
    )
}
