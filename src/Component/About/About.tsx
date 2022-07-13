import './About.scss'
let image =  require('../../assets/images/workers.png')

let About = () => {
  
  return(
    <div className='about-container container-fluid'>
      <p className="main-heading">About Company
      <div className="triangle"></div>
      </p>
        <p className='about '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        <img src={image} alt="workers" className='workers-img' />
    </div>
  )
}

export default About