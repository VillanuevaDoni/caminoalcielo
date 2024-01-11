import VideoChurch from '../components/video'
import VideoIglesia from '../assets/iglesiavideo.mov'


function Home() {
  return (
    <div className='container p-5'>
      <div className='card'>
        <div className='card-img' >
        <VideoChurch origen={VideoIglesia}/>
        </div>
       
      <div className='container p-4'>
        <h1 className='display-2'>BIENVENIDO</h1>
        <hr className='my-4' />

        <p className='text-muted lh-base fs-4'>Lorem ipsum dolor sit amet 
        consectetur, adipisicing elit. Quae quisquam, quidem repellendus 
        nihil tempore alias beatae error id dolorum, ducimus atque et soluta 
        cum ipsam vel. Aliquam iure tempora inventore omnis repellat! 
        Consequatur laboriosam reiciendis iure ducimus possimus. Quidem ut 
        tempora minus totam iste distinctio, magni temporibus nisi quasi 
        corrupti repellendus vel quo soluta obcaecati assumenda rem et iure 
        impedit saepe nulla praesentium ea accusantium quaerat quod! Veritatis 
        perspiciatis officia laudantium consectetur beatae reprehenderit ab 
        tempora dolores! Fugiat numquam cum incidunt placeat praesentium dolor, 
        ullam, quae provident veritatis iusto enim eos labore quis, tempora 
        consectetur! Consequatur a nulla suscipit minus?</p>
        
      </div>
    </div>
    </div>

  )
}

export default Home
