import React from 'react'
import CardMovie from './CardMovie'; 
import './Cardsstyle.scss'
const MoviesLists = (props) => {
   
    return (
             /***********************************List Movies*******************************************/
        <div >
        {props.movies.filter((el)=> el.title.toLowerCase().includes(props.titleSearch.toLowerCase().trim()) && el.rate >= props.rateSearch)
        .map((el,id) => ( <CardMovie key={id} el={el}/> ))}
        </div>
        
    );
};

export default MoviesLists