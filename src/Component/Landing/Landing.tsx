import './Landing.scss'

let Landing = () => {
  return (
    <div className='landing d-flex align-items-center justify-content-center bg-black text-white'>
      <p className='landing-text m-0 text-center'>
      We cover all essential services and facilities management, pest control landscaping, security general maintenance, cleaning, recruitment, and outsourcing.
      </p>
      <div className='slider d-flex align-content-center justify-content-center position-absolute'>
        <span className='slider-button active'></span>
        <span className='slider-button'></span>
        <span className='slider-button'></span>
        <span className='slider-button'></span>
      </div>
    </div>
  )
}

export default Landing