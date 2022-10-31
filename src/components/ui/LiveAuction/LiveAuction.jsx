import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import img01 from '../../../assets/images/img-01.jpg'
import ava01 from '../../../assets/images/ava-01.png'
import './live-auction.css'
import { NFT__DATA } from '../../../assets/data/data'
import NFTCard from '../NFTCard/NFTCard'

const LiveAuction = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <div className="live__auction__top d-flex align-items-center justify-content-between">
                            <h3>Live Auction</h3>
                            <span>
                                <Link to="/market">Explore more</Link>
                            </span>
                        </div>
                    </Col>

                    {NFT__DATA.slice(0, 4).map((item, index) => (
                        <Col lg='3' md='4' sm='6' className='mb-4'>
                            <NFTCard key={index} item={item} />
                        </Col>))}

                </Row>
            </Container>
        </section>
    )
}

export default LiveAuction