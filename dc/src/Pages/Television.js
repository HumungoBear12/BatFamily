import {React,useState} from 'react';
import TV from '../Util/TV';


const Television = () => {
  const [televisions,setTelevisions] = useState(TV)
  console.log(televisions)
  return <div className="TV-container">
    {televisions.map((tv)=>{
     const {id,Name,Year,Image} = tv;
     return (
     <div >
        <div className="TV-Holder" key={id}>
          <img className="TV-image" src={Image} alt={Name}></img>
          <h1 className="TV-title">{Name}</h1>
          <p className="TV-Year">Years: {Year}</p>
        </div>
     </div>
     )
  }

  )}
  </div>
   
};

export default Television;
