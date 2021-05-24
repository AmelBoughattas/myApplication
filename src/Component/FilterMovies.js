import React from 'react';
import Rate from './Rate';
import './filterStyle.css';

/* import StarRating from 'react-rating-stars-component'; */

const FilterMovies = ({titleSearch, setTitleSearch, rateSearch, setRateSearch}) => {
    return (
      <div>
          
            <form action="#" autocomplete="off" className='frm'  style={{display:'flex', justifyContent:'space-between'}}>

                {/* --------------------------- Movies ------------------------- */}
              <svg viewBox="0 0 960 300">
               <symbol className="titleMovie" id="s-text">
                <text textAnchor="middle" x="50%" y="80%">Movies</text>
               </symbol>
               <g className="g-ants">
                 <use xlinkHref="#s-text" className="text-copy" />
                 <use xlinkHref="#s-text" className="text-copy" />
                 <use xlinkHref="#s-text" className="text-copy" />
                 <use xlinkHref="#s-text" className="text-copy" />
                 <use xlinkHref="#s-text" className="text-copy" />
               </g>
              </svg>

              <br/>
             {/**********************************************Filter by Title****************************************************/}
              <fieldset class="url" style={{marginRight:'150px', paddingTop:'50px'}}>
                  <input className="inpt" id="movie" type="text" name="url" required  
                  onChange={(e)=>setTitleSearch(e.target.value)} value={titleSearch}/>
                   <label for="url" className="lab" style={{marginRight:'150px', paddingTop:'50px'}}><i class="fa fa-search" aria-hidden="true"></i> Search</label>
                 <div class="after"></div>
              </fieldset>

                {/**********************************************Filter by Rate****************************************************/}
                <div style={{marginTop:'10px', paddingTop:'50px'}}>
                   <Rate rate={rateSearch} setRateSearch={setRateSearch}/>
                </div>
          </form>
      </div>
    )
}
export default FilterMovies
