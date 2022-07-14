import './Header.scss'


let Header = () => {


  return (
    <div className='header d-flex justify-content-lg-end justify-content-sm-center align-items-center px-lg-5 px-sm-0'>
        <ul className='nav-links d-flex align-items-center justify-content-center'>
          <li className='nav-link'>About Company</li>
          <li className='nav-link'>Services</li>
          <li className='nav-link'>Clients</li>
          <li className='nav-link'>Contact Us</li>
        </ul>
      
    </div>
  )
}

export default Header