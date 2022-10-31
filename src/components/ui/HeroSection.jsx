import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { RiBallPenLine, RiRocketLine } from 'react-icons/ri'
import './hero-section.css'
import heroImg from '../../assets/images/hero.jpg'

const HeroSection = () => {
    return (
        <div className='hero__section'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                            <h2>Discover rare digital art and collect <span>sell extraordinary </span> NFTs</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur cupiditate delectus magni doloribus excepturi error dolore atque nesciunt dolorum officiis fuga sapiente dolorem distinctio doloremque, rerum cumque porro ab esse!</p>
                            <div className="hero__btns d-flex align-items-center gap-4">
                                <button className='explore__btn d-flex algin-items-center gap-2'>
                                    <Link to="/market"><RiRocketLine /> Explore</Link>
                                </button>
                                <button className='create__btn d-flex algin-items-center gap-2'>
                                    <Link to="/market"><RiBallPenLine /> Create</Link>
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="hero__img">
                            <img src={heroImg} alt="" className='w-100' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeroSection