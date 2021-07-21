import React, { useState } from 'react'
import UsefireStore from './UsefireStore'
import {motion} from 'framer-motion'
import "./Image.css"

export default function Images( {setSelectedImg} ) {
    
    const {docs} = UsefireStore('images')
    console.log(docs);
     
    return (
        <div className = "img-grid">
            {docs && docs.map(doc => (
                <motion.div className = "img-wrap" key = {doc.id}
                layout
                whileHover={{ opacity: 2}}
                onClick= {()=> setSelectedImg(doc.url)}
           
           >
             
                 <motion.img src = {doc.url} alt = "uploaded pic" 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1}}
                
                />
                
                </motion.div>
            ) )}
        </div>
    )
}
