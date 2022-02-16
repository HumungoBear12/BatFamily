import { React,} from 'react'
import Arkham from '../Components/Arkham'
import LegoBatman from '../Components/LegoBatman'


const VideoGames = () => {
  return (
      <div>
          <div>
              <h1 className="ArkhamHeader">Arkham Series</h1>
              <Arkham/>
          </div>
          <div>
              <h1 className="ArkhamHeader">Lego Series</h1>
              <LegoBatman/>
          </div>
      </div>
  )
};

export default VideoGames;
