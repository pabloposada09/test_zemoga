import React from 'react'
import PropTypes from 'prop-types';
import './celebrityProfile.css'
import thumbsUp from '../../images//thumbs-up.svg';
import thumbsDown from '../../images/thumbs-down.svg';
import { useCelebrity } from '../../hooks/useCelebrity';


export const CelebrityProfile = ({celebrity}) => {


    //Variable para determinar si esta en una lista o grilla 
    //Metodo para manejar el cambio de grilla a lista 

    const {name,description,picture}= celebrity;
    const image = require(`../../images/${picture}`);
    const {
        status,
        vote,
        positivePercentage,
        negativePercentage,
        dateInfo,
        handleSelection,
        handleVote
    } = useCelebrity(celebrity);
        

    return (
        <div className='celebrityItem' style={{backgroundImage: 'url('+image+')'}}> 

            <div className='celebrityDescription'>
                <input type="image" src={status?thumbsUp:thumbsDown}   className={status?"likeLabel":"dislikeLabel"} />
                <h3>{name}</h3>
                <p id="description">{description}</p>
                <p id='lastTime'>{dateInfo}</p>
            </div>

            <div className='celebrityVote'>
                <input 
                    id= "like" 
                    type="radio" 
                    name="choice1" 
                    value="like" 
                    onChange={(e)=>{handleSelection(e)}} 
                    style={{visibility:`${vote?'hidden':'visible'}`}}
                />
                
                <label htmlFor="like" style={{display:`${vote?'none':'inline-block'}`}} >
                    <img src={thumbsUp}  className='likeButton'/>
                </label>
                    <input 
                        id ="dislike"
                        type="radio" 
                        name="choice2" 
                        value="dislike" 
                        onChange={(e)=>{handleSelection(e)}}
                        style={{visibility:`${vote?'hidden':'visible'}`}}
                        />
                <label htmlFor="dislike" style={{display:`${vote?'none':'inline-block'}`}}>
                    <img src={thumbsDown} className='dislikeButton'/>
                </label>

                <button className={`${vote?'voteAgainButton':'voteButton'}`} onClick={(e)=>{handleVote(e)}}>{vote?"Vote again":"Vote"}</button>
            </div>

            <div className='celebrityIndicator'>

                    <div className="closing-gauge__left" style={{width:`${positivePercentage}%` }}>
                        <img src={thumbsUp}/>
                            <p>{positivePercentage} %</p> 
                    </div>

                    <div className="closing-gauge__right" style={{width:`${negativePercentage}%` }}>
                        <img src={thumbsDown}/>
                        <p>{negativePercentage} %</p> 
                    </div>
            </div>
            

        </div>
        
    )
}


CelebrityProfile.propTypes ={
    celebrity:  PropTypes.object.isRequired
};
