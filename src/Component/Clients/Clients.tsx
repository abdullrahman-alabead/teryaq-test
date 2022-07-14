import { faArrowLeft, faArrowRight, faStar, faStarAndCrescent, faStarHalfAlt, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Clients.scss'

let Clients = () => {

  // Switch Client:
  function swtichClient(client : number){
    let slider = document.querySelector(".clients")
    if(slider instanceof HTMLElement){
      slider.style.transform = `translateX(${client}rem)`
    }
  }

  // Activate Button:
  function activateBtn(btn: EventTarget){
    let btns = document.querySelectorAll(".slider-btn")
      // remove class Active
    for (let i = 0; i < btns.length; i++) {
      btns[i].classList.remove("active")
    }
    if(btn instanceof HTMLElement){
      // add Class Active to clicked btn
      btn.classList.add("active")
    }
  }

  return (
    <div className="clients-container container-fluid text-center" id='clients'>
      <p className="main-heading mb-5">Clients</p>
      <div className="clients-slider d-flex justify-content-sm-center justify-content-md-start align-items-center pt-5 mx-auto">
        <div className="clients d-flex justify-content-center align-items-center">
          <div className="client">
            <img src={require("../../assets/images/user.png")} alt="client" className='client-img' />
            <p className="client-name">John Doe</p>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p className='client-op'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam, ut blanditiis in ea ratione voluptates distinctio iure corrupti sunt alias nihil harum mollitia dolor quos architecto odio. Aliquid, ad?</p>
          </div>
          <div className="client">
            <img src={require("../../assets/images/user.png")} alt="client" className='client-img' />
            <p className="client-name">John Doe</p>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <p className='client-op'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam, ut blanditiis in ea ratione voluptates distinctio iure corrupti sunt alias nihil harum mollitia dolor quos architecto odio. Aliquid, ad?</p>
          </div>
          <div className="client">
            <img src={require("../../assets/images/user.png")} alt="client" className='client-img' />
            <p className="client-name">John Doe</p>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <p className='client-op'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam, ut blanditiis in ea ratione voluptates distinctio iure corrupti sunt alias nihil harum mollitia dolor quos architecto odio. Aliquid, ad?</p>
          </div>
          <div className="client">
            <img src={require("../../assets/images/user.png")} alt="client" className='client-img' />
            <p className="client-name">John Doe</p>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <p className='client-op'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aperiam, ut blanditiis in ea ratione voluptates distinctio iure corrupti sunt alias nihil harum mollitia dolor quos architecto odio. Aliquid, ad?</p>
          </div>
          
        </div>
      </div>
      <div className="slider">
        <span className='slider-btn active' onClick={(e) => {swtichClient(2); activateBtn(e.target)}}></span>
        <span className='slider-btn' onClick={(e) => {swtichClient(-29); activateBtn(e.target)}}></span>
        <span className='slider-btn' onClick={(e) => {swtichClient(-60); activateBtn(e.target)}}></span>
        <span className='slider-btn' onClick={(e) => {swtichClient(-92); activateBtn(e.target)}}></span>
      </div>
      <img src={require('../../assets/images/dots.png')} alt="dots" className='dots'/>
      <img src={require('../../assets/images/dots.png')} alt="dots" className='dots left-dots'/>
    </div>
  )
}

export default Clients