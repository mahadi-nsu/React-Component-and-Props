import React from 'react';


const NewsListItem =(props) =>{
    
    return (

               <div key = {props.item.id}>
                    <h3> {props.item.title} </h3>
                    <p> {props.item.feed} </p>
                </div>
        
    )
}

export default NewsListItem;