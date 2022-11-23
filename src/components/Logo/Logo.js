import Tilt from 'react-parallax-tilt';
import './Logo.css'
import scan from './scan.png';


const Logo = () => {
  return (
    <div className='ma4 mt0'>
    <Tilt className="bd Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
      <div className="Tilt-inner pa3">
        <img alt="www.flaticon.com" src={scan}></img>
      </div>
      
    </Tilt>
    </div>
  )
}

export default Logo
