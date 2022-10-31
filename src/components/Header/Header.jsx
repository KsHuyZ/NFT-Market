import React, { useEffect, useRef } from 'react'
import { Container } from 'reactstrap'
import './header.css'
import { AiFillFire } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import { RiWalletLine } from 'react-icons/ri'
import { FiMenu } from 'react-icons/fi'

const NAV__LINKS = [
    { display: 'Home', url: '/home' },
    { display: 'Market', url: '/market' },
    { display: 'Create', url: '/create' },
    { display: 'Contact', url: '/contact' },

]

const Header = () => {
    const headerRef = useRef()
    const menuRef = useRef()
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('header__shrink')
            } else {
                headerRef.current.classList.remove('header__shrink')
            }
        })
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    const toggleMenu = () => menuRef.current.classList.toggle('active__menu')

    return (
        <header className='header' ref={headerRef}>
            <Container>
                <div className="navigation">
                    <div className="logo">
                        <h2 className='d-flex gap-2 align-items'>
                            <span>
                                <i class="ri-fire-line"></i>
                            </span>NFTs
                        </h2>
                    </div>
                    <div className="nav__menu" ref={menuRef} onClick={toggleMenu}>
                        <ul className="nav__list">
                            {NAV__LINKS.map((item, index) => (<li className="nav__item" key={index}>
                                <NavLink to={item.url} className={navClass => navClass.isActive ? 'active' : ''}>{item.display}</NavLink>
                            </li>))}

                        </ul>
                    </div>
                    <div className="nav__right d-flex align-items-center gap-5">
                        <button className='btn d-flex gap-2 align-items-center'>
                            <RiWalletLine />
                            <Link to={'/wallet'}>
                                <span>

                                    Connect Wallet
                                </span>
                            </Link>

                        </button>
                        <span className="mobile__menu">
                            <FiMenu onClick={toggleMenu} />
                        </span>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header