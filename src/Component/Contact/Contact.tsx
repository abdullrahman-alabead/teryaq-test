import { Col, Row } from 'react-bootstrap'
import './Contact.scss'

let Contact = () => {
  return(
    <div className='contact container-fluid'>
      <p className="main-heading">Message Us
      <div className="triangle"></div></p>
      <form>
        <Row>
          <Col className='col' >
          <input type="text" placeholder='Enter Name...' />
          <input type="text" placeholder='Enter Email...' />
          </Col>
          <Col className='col'>
          <input type="text" placeholder='Enter Company...' />
          <input type="text" placeholder='Enter Text...' />
          </Col>
          <Col className='col' md={12} lg={6}>
          <textarea placeholder='Enter Message...' className='m-0' />
          <button type='submit' className='submit-btn'>Submit</button>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default Contact