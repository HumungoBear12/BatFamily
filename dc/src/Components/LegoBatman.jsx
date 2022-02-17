import {React, useState} from 'react'
import data from '../Util/LegoBatman'

const LegoBatman = () => {
    const [lego, setLego] = useState(0)
    const {Name,Image,ReleaseDate,Story,Creators} = data[lego]
    const checkNumber = (number) => {
        if(number  > 2){
            return 0;
        }
        if(number < 0){
            return 3
        }
        return number
    }
    const next = () =>{
        setLego((game)=>{
            let newGame = game + 1;
            return checkNumber(newGame)
        })
    }
   const back = () =>{
        setLego((game)=>{
            let newGame = game - 1;
            return checkNumber(newGame)
        })
    }
  return (
        <div className="Games">
            <h1>{lego.length}</h1>
            <article >
                <img className="Game-IMG" src={Image} alt={Name}/>
                <h3 className="Game-NAME">{Name}</h3>
                <p className="Game-CREATORS">{Creators}: {ReleaseDate}</p>   
                <p className="Game-DESCRIPTION">Story: {Story}</p>
                <button className="Game-NEXT-Lego" onClick={next}>Right</button>
                <button className="Game-PREV-Lego" onClick={back}>Left</button>
            </article>
        </div>
  )
}

export default LegoBatman