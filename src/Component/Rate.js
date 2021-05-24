import React from 'react';
import './filterStyle.css'
const Rate = ({rate , setRateSearch}) => {
    const stars = (rate) => {
        let startsTab = [];
        for (let i=1 ; i<=5; i++){
          if (i<=rate){
              startsTab.push(<span className="stars"
                               style={{ color: '#FFC83D', fontSize: '40px', marginLeft: '0', cursor: 'pointer'}}
                               onClick={() => setRateSearch(i)}
                               >★</span>)
          }
          else {
              startsTab.push(<span 
                               style={{ color: '#FFC83D', fontSize: '40px', marginLeft: '0', cursor: 'pointer'}}
                               onClick={() => setRateSearch(i)}
                               >☆</span>)
          }
        }
        return startsTab;
    }
    return (
        <div>
            {stars (rate)}
        </div>
    )
}
Rate.defaultProps = {
    setRateSearch: () => {},
    rate :1
}
export default Rate
