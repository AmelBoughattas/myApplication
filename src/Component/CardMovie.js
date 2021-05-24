import React from 'react';
import './Cardsstyle.scss';
import Rate from './Rate';
 import ReactStars from "react-rating-stars-component";  

 const CardMovie = ({el:{title,posteURL,description,rate,backImg}}) => {
 

    return (
     
          <div className="bd">
             {/******************************* card movie  ******************************/}

             <div className="movie_card" >
                <div className="info_section">

                   {/****************************************display contenu movie******************************************/}
                    <div className="movie_header">
                      <img className="locandina" src={posteURL} alt=""/>
                        <div className="title_rate" style={{display:'flex', justifyContent:'space-between'}}>
                          <h1>{title}</h1>
                          <div className="rate"  style={{marginTop:'-20px' }}>
                             <Rate rate={rate}/>
                          </div>
                        </div>
                        <div className="movie_desc">
                           <p>{description}</p>
                        </div>
                    </div>

             {/**********************************icon social media with icon fonts awsome**************************************/}
                    <div className="social" >
                      <div className="movie_social" >
                       <ul>
                         <li><i className="fas fa-share-alt styleicon"></i></li>
                         <li><i className="fas fa-heart styleHeart"></i></li>
                         <li><i className="fas fa-comment-alt styleicon"></i></li>
                       </ul>
                      </div >
                    </div>
                </div>

             {/********************************* background card ********************************/}
                <div className="blur_back" style={{ backgroundImage: `url(${backImg})`, backgroundSize: 'cover',  backgroundRepeat: 'no-repeat',height: '100%' }}></div>
     
            </div>
         </div>
   
    )
}

export default CardMovie