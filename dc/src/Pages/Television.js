import {React,useState} from 'react';
import TV from '../Util/TV';


const Television = () => {
  const {television,setTelevision} = useState(TV)
  return(
    <div>
        {television.map((tv)=>{
          const {id,Name,Year,Image} = tv;
          <div key={id}>
            <img src={Image} alt={Name}></img>
            <h1>{Name}</h1>
            <p>{Year}</p>
          </div>
        }
      )
      }
    </div>
  )
   
};

export default Television;
