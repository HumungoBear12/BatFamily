import { React, useState} from 'react'
import data from '../Util/Games'

const VideoGames = () => {
   const [people, setPeople] = useState(0)
    const {rating,name,job,image,text} = data[people]
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
        setPeople((people)=>{
            let newPeople = people + 1;
            return checkNumber(newPeople)
        })
    }
   const back = () =>{
        setPeople((people)=>{
            let newPeople = people - 1;
            return checkNumber(newPeople)
        })
    }
  return (
  <div>
      <h1>Our Reviews</h1>
      <article className="main">
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <p>{rating} stars</p>
        <p>{job}</p>
        <p>{text}</p>
        <button onClick={next}>Next</button>
        <button onClick={back}>Previous</button>
    </article>
  </div>
  )
};

export default VideoGames;
