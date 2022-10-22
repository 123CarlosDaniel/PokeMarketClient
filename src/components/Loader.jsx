import loader from '../assets/loader.svg'

export default function Loader(){
  return (
    <div className='Layout'>
      <div style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <img src={loader}></img>
      </div>
    </div>

  )
}