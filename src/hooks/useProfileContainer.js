import React,{useEffect,useState} from 'react'
import { getCelebrities } from '../helpers/getCelebrities';

export const useProfileContainer = () => {
    
    const [celebrities, setCelebrities] = useState([]);

    useEffect(() => {
        (async () => {
            const data =await getCelebrities();
            setCelebrities(data);
          })()
    },[])

    return{
        celebrities
    }
}
