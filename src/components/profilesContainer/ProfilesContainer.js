import React from 'react';
import './profilesContainer.css';

import { CelebrityProfile } from '../celebrityProfile/CelebrityProfile';
import { useProfileContainer } from '../../hooks/useProfileContainer';
export const ProfilesContainer = () => {


    const {celebrities,handleSelection,view,setView} = useProfileContainer();

    return (
        <section>
            {/* div para el titulo junto con el menu para cambiar el tipo de vista  */}
            <div id='description'>
                <h2>Previous Rulings</h2>

                <span id='selectionDrop'>
                    <form action="#">
                        <select name="presentation" id="options" className='selection' onChange={(e)=>{handleSelection(e)}}>
                            <option value="grid" className='selection'>Grid</option>
                            <option value="list" className='selection'>List</option>                            
                        </select>
                    </form>
                </span>
            </div>



            {/* div para contener los registros. */}
               
            <div className= {`${view=="grid"?'celebritiesContainerGrid':'celebritiesContainerList'}`}  >
                {celebrities.map(celebrity=>{
                    return <CelebrityProfile  
                                key={celebrity.name}
                                celebrity={celebrity} 
                                view={view}
                            />;
                    })
                }
            </div>
            
        </section>
    )
}
