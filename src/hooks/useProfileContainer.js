import React,{useEffect,useState} from 'react'
import { getCelebrities } from '../helpers/getCelebrities';

export const useProfileContainer = () => {
    
    const [celebrities, setCelebrities] = useState([]);
    const [view, setView] = useState("grid");

    const handleSelection =(e)=>{
        setView(e.target.value);
    }

    useEffect(() => {
        (async () => {
            const data =await getCelebrities();
            setCelebrities(data);
          })()
    },[])

    return{
        celebrities,
        view,
        setView,
        handleSelection
    }
}
