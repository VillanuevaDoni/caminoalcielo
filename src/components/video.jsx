import VideoIglesia from '../assets/iglesiavideo.mov'
import  '../components.css'

function video() {
  return (
    <div className='main'>
        <video src={VideoIglesia} autoPlay loop muted/>
    </div>
  )
}

export default video