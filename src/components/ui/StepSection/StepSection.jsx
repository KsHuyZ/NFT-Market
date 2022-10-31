import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { RiLayoutMasonryLine, RiListCheck, RiWalletLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { CiImageOn } from 'react-icons/ci'
import './stepSection.css'

const STEP__DATA = [
    {
        title: 'Set up your wallet',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore commodi',
        icon: <RiWalletLine />
    },
    {
        title: 'create your collection',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore commodi',
        icon: <RiLayoutMasonryLine />
    },
    {
        title: 'Add your NFTs',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore commodi',
        icon: <CiImageOn />
    },
    {
        title: 'List them for sale',
        desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora labore commodi',
        icon: <RiListCheck />
    },
]

const StepSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-4'>
                        <h3 className="step__title">
                            Create and Sell Your NFTs
                        </h3>
                    </Col>
                    {STEP__DATA.map((item, index) => (
                        <Col lg='3' md='4' sm='6' key={index} className='mb-4'>
                            <div className="single__step__item">
                                <span> <i>
                                    {item.icon}
                                </i></span>
                                <div className="step__item__content">
                                    <h5>
                                        <Link to='/wallet'>{item.title}</Link>
                                    </h5>
                                    <p>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </Col>
                    ))}

                </Row>
            </Container>
        </section>
    )
}

export default StepSection