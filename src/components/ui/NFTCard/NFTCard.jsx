import React, { useState } from 'react'
import { RiShoppingBagLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './nftcard.css'
import Modal from '../Modal/Modal'
import Skeleton from '@mui/material/Skeleton';


const NFTCard = ({ item }) => {
    const { title, id, currentBid, creatorImg, imgUrl, creator } = item
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="single__nft__card">
            <div className="nft__img">
                {imgUrl ? <img src={imgUrl} alt="" className='w-100' /> : <Skeleton variant='rounded' className='w-100' />}
            </div>
            <div className="nft__content">
                <h5 className="nft__title"><Link to={`market/${id}`}>{item ? title : <Skeleton width="60%" />}</Link></h5>
                <div className="creator__info-wrapper d-flex gap-3">
                    <div className="creator__img">
                        <img src={creatorImg} alt="" className='w-100' />
                    </div>
                    <div className="creator__info d-flex w-100 align-items-center justify-content-between">
                        <div>
                            <h6>Created By</h6>
                            <p>{item ? creator : <Skeleton width="30%" />}</p>
                        </div>
                        <div>
                            <h6>Curren Bid</h6>
                            <p>{currentBid} ETH</p>
                        </div>
                    </div>
                </div>

                <div className=' mt-3 d-flex align-items-center justify-content-between'>
                    <button className="bid__btn d-flex align-items-center gap-1" onClick={() => setShowModal(true)}>
                        <RiShoppingBagLine /> Place Bid
                    </button>

                    {showModal && <Modal setShowModal={setShowModal} />}
                    <span className='history__link'>
                        <Link to='#'>View History</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NFTCard