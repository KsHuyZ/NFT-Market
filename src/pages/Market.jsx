import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CommonSection from '../components/ui/CommonSection/CommonSection'

const Market = () => {
  return (
    <>
      <CommonSection title={'Market Place'} />
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="market__product__filter">
                <div className="filter__left">
                  <div className="all__category__filter">
                    <h6 className=''>All Categories</h6>
                    <select name="" id="">
                      <option value="art">Art</option>
                      <option value="music">Music</option>
                      <option value="domain-name">Domain Name</option>
                      <option value="virtual-world">Virtual World</option>
                      <option value="trending-card">Trending Cards</option>
                    </select>
                  </div>

                  <div className="all__items__filter">
                    <h6 className=''>Items</h6>
                    <select name="" id="">
                      <option value="single-item">Single Items</option>
                      <option value="bundle">Bundle</option>
                    </select>
                  </div>

                </div>
                <div className="filter__right">
                  
                  <select name="" id="">
                    <option value="">Sort by</option>
                    <option value="hight-rate">Hight rate</option>
                    <option value="bundle">Mid Rate</option>
                  </select>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Market