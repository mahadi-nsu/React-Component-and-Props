import React from 'react';
import NewsListItem from './news_list_item';


const newsList =(props) =>{
    //console.log(props);

    const items = props.news.map((item)=>{
        return (
            <NewsListItem key = {item.id} item = {item} />
        )
    })
    return (
        <div> 
           <div> News List </div>
           <div> {items }  </div>
        </div>
    )
}

export default newsList;