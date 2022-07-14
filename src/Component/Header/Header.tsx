import './Header.scss'


let Header = () => {
  // li clicking fix
  function liClick(ele: EventTarget){
    if(ele instanceof HTMLElement){
      let a = ele.firstElementChild
      if(a instanceof HTMLElement){
        a.click();
      }
    }
  }
  
  return (
    <div className='header d-flex justify-content-lg-end justify-content-sm-center align-items-center px-lg-5 px-sm-0'>
        <ul className='nav-links d-flex align-items-center justify-content-center'>
          <li className='nav-link' onClick={(e) => {liClick(e.target)}}> <a href="#about">About Company</a></li>
          <li className='nav-link' onClick={(e) => {liClick(e.target)}}> <a href="#services">Services</a></li>
          <li className='nav-link' onClick={(e) => {liClick(e.target)}}> <a href="#clients"> Clients</a></li>
          <li className='nav-link' onClick={(e) => {liClick(e.target)}}> <a href="#contact"> Contact Us</a></li>
        </ul>
      
    </div>
  )
}

export default Header