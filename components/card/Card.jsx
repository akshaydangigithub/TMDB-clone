"use client"
import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { useRouter } from "next/navigation";
import { asyncaddmovies } from '@/store/Actions/movieActions';
import { useDispatch, useSelector } from 'react-redux'
import { toast } from "react-toastify";
import { changepage, removeerrors } from '@/store/Reducer/movieReducer';
import Link from 'next/link';
import styles from "./style.module.css"
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import {motion} from "framer-motion"

const Card = () => {
    const Router = useRouter();

    useEffect(() => {
        const locomotivescroll = new LocomotiveScroll();
    })

    const dispatch = useDispatch();
    const { movies, errors, page } = useSelector((state) => state.movieReducer);
    // console.log(page, movies, errors);

    if (errors.length > 0) {
        errors.map((e, i) => {
            toast.error(e);
        });
        dispatch(removeerrors());
    }

    useEffect(() => {
        dispatch(asyncaddmovies())
    }, [page])

    const redirectToMovieDetails = (id) => {
        Router.push(`/${id}`);
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
                        movies.map((movie, index) => {
                            return (
                                <motion.div key={movie.id} onClick={() => redirectToMovieDetails(movie.id)}
                                initial={{y:100, opacity:0}}
                                whileHover={{scale:1.1}}
                                animate={{y:0, opacity:1}}
                                transition={{duration:.1, type:"spring", stiffness:100}}
                                 >
                                    <div className="card" >
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            alt=""
                                        />
                                        <div className="progress">
                                            <h5>65%</h5>
                                        </div>
                                    </div>
                                    <p>
                                        <Link className='link' href={`/${movie.id}`}>{movie.title}</Link>
                                    </p>
                                    <h5>{movie.release_date}</h5>
                                </motion.div>

                            )
                        })
                    }

                </div>
                <div className={styles.pagination}>
                    <button className={styles.pagination_btns} onClick={() => dispatch(changepage(-1))}>
                        <i className='bx bx-grid-alt'><AiOutlineLeft /></i>
                    </button>
                    <button className={styles.page_count} >{page}</button>
                    <button className={styles.pagination_btns} onClick={() => dispatch(changepage(1))}>
                        <i className='bx bx-grid-alt'><AiOutlineRight /></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card