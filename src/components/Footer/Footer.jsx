import React from 'react'
import { AiFillFire, AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { FaFacebookF } from 'react-icons/fa'
import { RiDiscordFill, RiFireLine, RiTelegramLine } from 'react-icons/ri'
import { CiTwitter } from 'react-icons/ci'
import './footer.css'
const MY__ACCOUNT = [
  {
    display: 'Author Profile',
    url: '/seller-profile'
  },
  {
    display: 'Create',
    url: '/create-item'
  },
  {
    display: 'Collection',
    url: '/market'
  },
  {
    display: 'Edit Profile',
    url: '/edit-profile'
  },
]


const RESOURCE = [
  {
    display: 'Help Center',
    url: '#'
  },
  {
    display: 'Partner',
    url: '#'
  },
  {
    display: 'Community',
    url: '#'
  },
  {
    display: 'Activity',
    url: '#'
  },
]

const COMPANY = [
  {
    display: 'About',
    url: '#'
  },
  {
    display: 'Career',
    url: '#'
  },
  {
    display: 'Ranking',
    url: '#'
  },
  {
    display: 'Contact Us',
    url: '/contact'
  },
]




const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='3' md='6' sm='6' className='mb-4'>
            <div className="logo">
              <h2 className='d-flex gap-2 align-items'>
                <span>
                  <i class="ri-fire-line"></i>
                </span>NFTs
              </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vel at, vero neque itaque maxime excepturi eius repudiandae beatae reprehenderit rerum, veniam commodi reiciendis corporis, recusandae earum quae id. Numquam?</p>
            </div>
          </Col>
          <Col lg='2' md='3' sm='6'>
            <h5>My Account</h5>
            <ListGroup className='list__group'>
              {
                MY__ACCOUNT.map((item, index) => (<ListGroupItem key={index} className='list__item'>
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>))
              }
            </ListGroup>
          </Col>
          <Col lg='2' md='3' sm='6'>
            <h5>Resources</h5>
            <ListGroup className='list__group'>
              {
                RESOURCE.map((item, index) => (<ListGroupItem key={index} className='list__item'>
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>))
              }
            </ListGroup>
          </Col>
          <Col lg='2' md='3' sm='6'>
            <h5>Company</h5>
            <ListGroup className='list__group'>
              {
                COMPANY.map((item, index) => (<ListGroupItem key={index} className='list__item'>
                  <Link to={item.url}>{item.display}</Link>
                </ListGroupItem>))
              }
            </ListGroup>
          </Col>
          <Col lg='3' md='6' sm='6'>
            <h5>Newsletter</h5>
            <input type="text" className='newsletter' placeholder='Email' />
            <div className='social__links d-flex gap3 align-items-center'>
              <span><Link to='#'><FaFacebookF /></Link></span>
              <span><Link to='#'><AiOutlineInstagram /></Link></span>
              <span><Link to='#'><CiTwitter /></Link></span>
              <span><Link to='#'><RiTelegramLine /></Link></span>
              <span><Link to='#'><RiDiscordFill /></Link></span>
            </div>
          </Col>
          <Col lg="12" className='mt-4 text-center'>
            <p className='copyright'>Copyrights 2022, Developed by Phan Tien Huy All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer