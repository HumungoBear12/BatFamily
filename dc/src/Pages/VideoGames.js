import { React, useState} from 'react'
import data from '../Util/Games'
import {HiArrowCircleRight} from 'react-icons/hi'
import {HiArrowCircleLeft} from 'react-icons/hi'


const VideoGames = () => {
   const [games, setGames] = useState(0)
    const {Name,Image,Description,Year,Creators,Series} = data[games]
    const checkNumber = (number) => {
        if(number  > 3){
            return 0;
        }
        if(number < 0){
            return 3
        }
        return number
    }
    const next = () =>{
        setGames((game)=>{
            let newGame = game + 1;
            return checkNumber(newGame)
        })
    }
   const back = () =>{
        setGames((game)=>{
            let newGame = game - 1;
            return checkNumber(newGame)
        })
    }
  return (
  <div className="Games">
      <h1>{games.length}</h1>
      <article >
        <img className="Game-IMG" src={Image} alt={Name}/>
        <h3 className="Game-NAME">{Name}</h3>
        <p className="Game-CREATORS">{Creators}: {Year}</p>   
        <p className="Game-DESCRIPTION">{Description}</p>
        <button className="Game-NEXT" onClick={next}>Right</button>
        <button className="Game-PREV" onClick={back}>Left</button>
        <p className="Game-SERIES">{Series}</p>
    </article>
  </div>
  )
};

export default VideoGames;
