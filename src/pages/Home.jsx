import React from 'react'
import HeroSection from '../components/ui/HeroSection'
import LiveAuction from '../components/ui/LiveAuction/LiveAuction'
import SellerSection from '../components/ui/SellerSection/SellerSection'
import StepSection from '../components/ui/StepSection/StepSection'
import Trending from '../components/ui/TrendingSection/Trending'

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <Trending />
      <StepSection />
    </>
  )
}

export default Home