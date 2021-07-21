import {projectFireStore} from '../Firebase'
import {useEffect, useState} from 'react'

function UsefireStore( collection ) {
    const [docs, setDocs] = useState([])

    useEffect(()=> {
      const unsub = projectFireStore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap)=> {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            });
            setDocs(documents)
        });

        return () => unsub();
    }, [collection]) 
    return {docs};
}

export default UsefireStore
