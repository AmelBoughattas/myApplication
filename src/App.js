import React,{ useState} from 'react';
 import { uuid as uuidv4 } from 'uuidv4';   
import MoviesLists from './Component/MoviesLists';
import FilterMovies from './Component/FilterMovies';
import './App.css';
import AddMovie from './Component/AddMovie';
const App = () => {

    const[movies,setMovies] = useState(
     [
        {
        
          title :"Raya and the dragon" ,
          description : "Raya and the Last Dragon is a movie about Raya and Sisu, the last dragon of Kumandra, and their quest of finding all the pieces of a magical gem to restore the land to its previous, peaceful form.",
          posteURL: "https://www.cinezik.org/critiques/jaquettes/raya-et-le-dernier-dragon2021022612.jpg",
          backImg:'https://www.escapistmagazine.com/v2/wp-content/uploads/2021/03/itf-raya_last_dragon-1024x576.jpg',
          rate:5,
          id:uuidv4(),
         },
    
      {  
          title :"Tom & Jerry",
          description : "Tom, le chat et Jerry, la souris n'ont plus de domicile. Ils emménagent dans un hôtel chic de New York où Kayla a trouvé un emploi. Mais pour qu'elle puisse le garder, il faut impérativement qu'elle chasse Jerry avant la réception d'un mariage...",
          posteURL: "https://fr.web.img2.acsta.net/pictures/20/12/28/10/09/5991258.jpg",
          backImg:'https://pbs.twimg.com/media/En-keNDVQAA3soh.jpg',
          rate: 3,
          id:uuidv4(),
      },
    
      {
         
          title :"Thunder Force",
          description : "Deux meilleurs amis d'enfance se réunissent pour former un duo de super-héros improbable pour combattre le crime, lorsque l'un d'eux invente une formule qui donne des super-pouvoirs aux gens ordinaires.",
          posteURL: "https://static.metacritic.com/images/products/movies/1/6de1a1a94c754b41b5e69b118292f5d8.jpg",
          backImg:"https://occ-0-1722-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbozzFA1UgUUBkhpzbYzOQhpXZJm4uwUU_qg6Wf4R8AsNz2XBYqw2TaGgzAlHrqiSzlP6HWi6MkFlibJTXd-1LieH1HW.jpg?r=f4a",
          rate: 3,
          id:uuidv4(),
      },
    
      {  
          title :"Super girl",
          description : "Supergirl est une série télévisée américaine créée par Greg Berlanti et Ali Adler, diffusée ... Helen Slater, interprète principale dans le film Supergirl en 1984, rejoint la distribution en tant qu'invitée dans le rôle de la mère adoptive de Kara sur Terre.",
          posteURL: "https://i1.wp.com/www.supermanhomepage.com/clickandbuilds/SupermanHomepage/wp-content/uploads/2021/03/Supergirl-Season6-Poster.jpg?fit=1080%2C1350&ssl=1",
          backImg:"https://otakukart.com/wp-content/uploads/2021/04/supergirl-poster-1-1200x900.jpg",
          rate: 4,
          id:uuidv4(),
      },
    ])
    
     const addNewMovie = (e, newM) => {
         e.preventDefault();
         setMovies([...movies,newM])
     }
   
     const [titleSearch, setTitleSearch] = useState('');
     const [rateSearch,setRateSearch] = useState(1);
      return  (
      <div className="App">
          <FilterMovies titleSearch={titleSearch}
                        setTitleSearch={setTitleSearch}
                        rateSearch={rateSearch}
                        setRateSearch={setRateSearch}/>
          <MoviesLists movies={movies}
          titleSearch={titleSearch}
          rateSearch={rateSearch}/> 
         <AddMovie 
          addNewMovie={addNewMovie}
        />

      </div>
   )
  }
export default App;
