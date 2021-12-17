import React, { useState,useEffect } from 'react'

export const useCelebrity = (celebrity) => {
    

    const {name,description,category,picture,lastUpdated,votes:{positive,negative}}=celebrity;   

    //variable to manage the positiveVotesIncrement
    const [positiveVotes, setPositiveVotes] = useState(positive);

    //variable to manage the negativeVotesIncrement
    const [negativeVotes, setNegativeVotes] = useState(negative)
    //Variable to determinate if label is like or dislike
    const [status, setStatus] = useState(false);

    //Variable to manage the vote button
    const [vote, setVote] = useState(false);

    //Variable to manage the selection
    const [selection, setSelection] = useState("");

    //Variable to storage the positive percentage
    const [positivePercentage, setPositivePercentage] = useState(0);

    //variable to storage the negative percentage
    const [negativePercentage, setNegativePercentage] = useState(0);

    //Variable to manage the date 
    const [dateInfo, setDateInfo] = useState("");

    

    //Method to set the status
    const determinateStatus=()=>{
        setStatus(()=>{
            return (positiveVotes>=negativeVotes?true:false);
        });
    };

    //Method to handle the selection change
    const handleSelection =(e)=>{
        setSelection(e.target.value);
    }

    //Method to handle the vote action
    const handleVote = (e)=>{
        if(!vote){
            if(selection===""){
                alert("Debe seleccionar una opcion");
            }else{
                if(selection==="like"){
                   setPositiveVotes((value)=>{
                       return value+1;
                   });
                   unCheckButton("choice1");

                }else if(selection==="dislike"){
                   setNegativeVotes((value)=>{
                        return value+1;
                    });
                    unCheckButton("choice2");
                }
                
                setVote(true);
                setDateInfo("Thank you for your vote");
                //callMethod to update database in aws
            }
        }else{

            setSelection("");
            setVote(false);
        }
    }

    //Method to calculate the percetages
    const calculatePercentages = ()=>{
        
        const total = positiveVotes + negativeVotes;
        const positiveP = (positiveVotes*100)/total;
        const negativeP = (negativeVotes*100)/total;
        
        setPositivePercentage(positiveP.toFixed(2));
        setNegativePercentage(negativeP.toFixed(2));

        console.log(name);
        console.log(positiveP)
        console.log(negativeP);
    }


    //Method to update the dateMessage
    const calculateDate=()=>{
        if(!vote){
            const lastDate = new Date(lastUpdated);
            const date = new Date();

            const yearDif = date.getFullYear() - lastDate.getFullYear();
            const monthDif = (date.getMonth()+1) - (lastDate.getMonth()+1);
            const dayDif = date.getDate() - lastDate.getDate();

            if(yearDif >=1){
                yearDif==1? setDateInfo(`${Math.round(yearDif)} year ago in ${category}`):setDateInfo(`${Math.round(yearDif)} years ago in ${category}`);
            }else if(monthDif>=1){
                monthDif==1? setDateInfo(`${Math.round(monthDif)} month ago in ${category}`):setDateInfo(`${Math.round(monthDif)} months ago in ${category}`);
            }else if(dayDif>=1){
                dayDif==1? setDateInfo(`${Math.round(dayDif)} day ago in ${category}`):setDateInfo(`${Math.round(dayDif)} days ago in ${category}`);
            }
        }
    }

    //Method to uncheck the button 
    const unCheckButton=(name)=>{
        const radio = document.querySelector(`input[type=radio][name=${name}]:checked`);
        radio.checked = false;
    }


    useEffect(()=>{
        determinateStatus();
        calculatePercentages();
        calculateDate();
    },[vote]);


    return{
        status,
        vote,
        positivePercentage,
        negativePercentage,
        dateInfo,
        handleSelection,
        handleVote
    };

}
