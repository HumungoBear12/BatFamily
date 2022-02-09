import { React, useState} from 'react'
import data from '../Util/Games'

const VideoGames = () => {
   const [games, setGames] = useState(0)
    const {Name,Image,Description,Year,Creators} = data[games]
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
  <div>
      <h1>Games</h1>
      <article className="main">
        <img src={Image} alt={Name}/>
        <h3>{Name}</h3>
        <p>{Year}</p>
        <p>{Creators}</p>
        <p>{Description}</p>
        <button onClick={next}>Next</button>
        <button onClick={back}>Previous</button>
    </article>
  </div>
  )
};

export default VideoGames;
