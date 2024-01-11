import  '../css/components.css'

function video(props) {
  return (
    <div className='main'>
        <video src={props.origen} autoPlay loop muted/>
    </div>
  )
}

export default video