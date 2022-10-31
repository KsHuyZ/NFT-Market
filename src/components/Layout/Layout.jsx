import React from 'react'
import Routers from '../../routes/Routers'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = (props) => {
    return (
        <>
            <Header />
            <div>
                <Routers />
            </div>
            <Footer />
        </>
    )
}

export default Layout