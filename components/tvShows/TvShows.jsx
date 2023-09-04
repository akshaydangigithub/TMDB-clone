"use client"
import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { useRouter } from "next/navigation";
import { asyncaddtv } from '@/store/Actions/tvActions';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";
import { tvchangepage, tvremoveerrors } from '@/store/Reducer/tvReducer';
import Link from 'next/link';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import styles from './style.module.css'
import { motion } from "framer-motion"


const TvShows = () => {
    const Router = useRouter();

    useEffect(() => {
        const locomotivescroll = new LocomotiveScroll();
    })

    const dispatch = useDispatch();
    const { tvshows, tvpage, tverrors } = useSelector((state) => state.tvReducer);
    console.log(tvpage, tvshows, tverrors);

    if (tverrors.length > 0) {
        tverrors.map((e, i) => {
            toast.error(e);
        });
        dispatch(tvremoveerrors());
    }

    useEffect(() => {
        dispatch(asyncaddtv())
    }, [tvpage])

    const redirectToTvDetails = (id) => {
        Router.push(`/tvShows//${id}`);
    }
    return (
        <div>
            <div className="cards-section">
                <div className="heading">
                    <h2>Trending</h2>
                    <div className="heading-inner">
                        <h4>Today</h4>
                        <h4>This weak</h4>
                    </div>
                </div>
                <div className="cards">
                    {
                        tvshows.map((tvShows, index) => {
                            return (
                                <motion.div key={tvShows.id} onClick={() => redirectToTvDetails(tvShows.id)}
                                    initial={{ y: 100, opacity: 0 }}
                                    whileHover={{ scale: 1.1 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: .1, type: "spring", stiffness: 100 }}
                                >
                                    <div className="card" >
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${tvShows.poster_path}`}
                                            alt=""
                                        />
                                        <div className="progress">
                                            <h5>65%</h5>
                                        </div>
                                    </div>
                                    <p>
                                        <Link className='link' href={`/tvShows/${tvShows.id}`}>{tvShows.name}</Link>
                                    </p>
                                    <h5>{tvShows.first_air_date}</h5>
                                </motion.div>

                            )
                        })
                    }

                </div>
                <div className={styles.pagination}>
                    <button className={styles.pagination_btns} onClick={() => dispatch(tvchangepage(-1))}>
                        <i className='bx bx-grid-alt'><AiOutlineLeft /></i>
                    </button>
                    <button className={styles.page_count} >{tvpage}</button>
                    <button className={styles.pagination_btns} onClick={() => dispatch(tvchangepage(1))}>
                        <i className='bx bx-grid-alt'><AiOutlineRight /></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TvShows