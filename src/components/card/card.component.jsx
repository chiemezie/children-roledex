import React from 'react'; 
import './card.styles.css' ; 

export const Card = (props) => { 
    return(
        <div className="card-container">
             <img className="card-image" alt="child image" src={`https://biamuta-assets.s3.eu-west-2.amazonaws.com/child${props.child.id}sm.png`}  />
             <h2>{props.child.name}</h2>  
             <p>{props.child.email}</p>   
        </div>
       
    )
}