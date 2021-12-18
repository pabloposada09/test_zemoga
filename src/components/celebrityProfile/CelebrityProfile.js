import React from 'react'
import PropTypes from 'prop-types';
import './celebrityProfile.css'
import thumbsUp from '../../images//thumbs-up.svg';
import thumbsDown from '../../images/thumbs-down.svg';
import { useCelebrity } from '../../hooks/useCelebrity';


export const CelebrityProfile = ({celebrity,view}) => {


    //Variable para determinar si esta en una lista o grilla 
    //Metodo para manejar el cambio de grilla a lista 

    const {name,description,picture}= celebrity;
    const image = require(`../../images/${picture}`);
    console.log(view);
    const {
        status,
        vote,
        positivePercentage,
        negativePercentage,
        dateInfo,
        handleSelection,
        handleVote,
        selection
    } = useCelebrity(celebrity);
        

    return (
        <div className={`${view=="grid"?'celebrityItem':'celebrityItemList'}`} style={{backgroundImage: 'url('+image+')'}}> 

            <div className= {`${view=="grid"?'celebrityDescription':'celebrityDescriptionList'}`}>
                <input type="image" src={status?thumbsUp:thumbsDown}   className={status?"likeLabel":"dislikeLabel"} />
                <h3>{name}</h3>
                <p id="description">{description}</p>
                <p id='lastTime'>{dateInfo}</p>
            </div>

            <div className= {`${view=="grid"?'celebrityVote':'celebrityVoteList'}`}>
                <input 
                    id= "like" 
                    type="radio" 
                    name="choice1" 
                    value="like" 
                    checked={selection=="like"?true:false}
                    onChange={(e)=>{handleSelection(e)}} 
                    style={{visibility:`${vote?'hidden':'visible'}`}}
                />
                
                <label htmlFor="like" id="lblLike" style={{display:`${vote?'none':'inline-block'}`}} >
                    <img src={thumbsUp}  className='likeButton'/>
                </label>
                    <input 
                        id ="dislike"
                        type="radio" 
                        name="choice2" 
                        value="dislike"  
                        checked={selection=="dislike"?true:false}
                        onChange={(e)=>{handleSelection(e)}}
                        style={{visibility:`${vote?'hidden':'visible'}`}}
                        />
                <label htmlFor="dislike" id="lbldisLike" style={{display:`${vote?'none':'inline-block'}`}}>
                    <img src={thumbsDown} className='dislikeButton'/>
                </label>

                <button className={`${vote?'voteAgainButton':'voteButton'}`} onClick={(e)=>{handleVote(e)}}>{vote?"Vote again":"Vote"}</button>
            </div>

            <div className= {`${view=="grid"?'celebrityIndicator':'celebrityIndicatorList'}`} >

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
    celebrity:  PropTypes.object.isRequired,
    view:   PropTypes.string.isRequired
};
