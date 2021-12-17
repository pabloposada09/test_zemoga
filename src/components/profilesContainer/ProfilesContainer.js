import React from 'react'
import './profilesContainer.css'

import { celebrities } from '../../data/celebrities'
import { CelebrityProfile } from '../celebrityProfile/CelebrityProfile'

export const ProfilesContainer = () => {
    return (
        <section>
            {/* div para el titulo junto con el menu para cambiar el tipo de vista  */}
            <div>
                <h2>Previous Rulings</h2>
            </div>

            {/* div para contener los registros. */}
               
            <div className='celebritiesContainer'>
                {celebrities.map(celebrity=>{
                    return <CelebrityProfile  
                                key={celebrity.name}
                                celebrity={celebrity} 
                            />;
                    })
                }
            </div>
            
        </section>
    )
}
