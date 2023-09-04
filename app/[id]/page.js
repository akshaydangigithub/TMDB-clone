"use client"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styles from './style.module.css'
import LocomotiveScroll from 'locomotive-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBookmark, faHeart, faPlay, faStar } from '@fortawesome/free-solid-svg-icons'
import { } from "@fortawesome/free-regular-svg-icons"
import Navbar from "@/components/navbar/Navbar";
import { FaBars, FaLink } from "react-icons/fa";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";
import { delay, motion } from "framer-motion"

const DynamicPage = ({ params }) => {
    const [detail, setdetail] = useState(null);

    const GetMovieDetails = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/movie/${params.id}?api_key=223667d1239871fc4b6eeef8d0d6def8`
            );
            setdetail(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!detail) GetMovieDetails();
    }, []);

    if (detail) {
        console.log(detail);
    }
    const formatRuntime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        return `${hours}h ${remainingMinutes}m`;
    };

    useEffect(() => {
        const locomotivescroll = new LocomotiveScroll();
    })

    return (
        <>
            <Navbar />

            <div className={styles.head}>
                <img src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${detail?.backdrop_path}`} alt="" />
                <div className={styles.info}>
                    <motion.div className={styles.image}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                    >
                        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail?.poster_path}`} alt="" />
                    </motion.div>
                    <div className={styles.info_right}>
                        <h1>{
                            detail && detail?.original_title
                        } <span>({detail?.release_date})</span></h1>
                        <p><span className={styles.first_span}>
                            A</span><span>07/07/2023 ({
                                detail && detail?.production_countries.length > 0 ? detail.production_countries[0].iso_3166_1 : ""
                            })
                            </span> {
                                detail?.genres.map((d, i) => {
                                    return <span key={i}>{d.name}</span>
                                })
                            }
                            <span>{detail?.runtime ? formatRuntime(detail.runtime) : "Unknown"}</span></p>
                        <div className={styles.progess_section}>
                            <div className={styles.progress}>
                                <h5>65%</h5>
                            </div>
                            <h4>User <br /> Score</h4>
                            <motion.div className={styles.icon}
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                whileHover={{scale:1.1}}
                                transition={{type:"spring", stiffness:120}}
                            >
                                <FontAwesomeIcon icon={faBars} />
                            </motion.div>
                            <motion.div className={styles.icon}
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                whileHover={{scale:1.1}}
                                transition={{type:"spring", stiffness:120}}
                            >
                                <FontAwesomeIcon icon={faHeart} />
                            </motion.div>
                            <motion.div className={styles.icon}
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                whileHover={{scale:1.1}}
                                transition={{type:"spring", stiffness:120}}
                            >
                                <FontAwesomeIcon icon={faBookmark} />
                            </motion.div>
                            <motion.div className={styles.icon}
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                whileHover={{scale:1.1}}
                                transition={{type:"spring", stiffness:120}}
                            >
                                <FontAwesomeIcon icon={faStar} />
                            </motion.div>
                            <motion.div className={styles.play_trailer_icon}
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                whileHover={{scale:1.1}}
                                transition={{type:"spring", stiffness:120}}
                            >
                                <FontAwesomeIcon icon={faPlay} />
                                <h3>Play trailer</h3>
                            </motion.div>
                        </div>
                        <p className={styles.dull_p}>{detail?.tagline}</p>
                        <h2>Overview</h2>
                        <h3>{detail?.overview}</h3>
                        <div className={styles.bottom_info_div}>
                            <div className={styles.prt1}>
                                <h3>Leigh Whannell</h3>
                                <p>Characters, Story</p>
                            </div>
                            <div className={styles.prt2}>
                                <h3>Patrick Wilson</h3>
                                <p>Director</p>
                            </div>
                            <div className={styles.prt3}>
                                <h3>Scott Teems</h3>
                                <p>Screenplay</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.media}>
                    <div className={styles.media_left}>
                        <h2>Media</h2>
                        <div className={styles.trailer_pics}>
                            <div className={styles.trailer_pics_left}>
                                <img src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${detail?.backdrop_path}`} alt="" />
                            </div>
                            <div className={styles.trailer_pics_right}>
                                <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${detail?.poster_path}`} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.media_right}>
                        <div className={styles.icons}>
                            <i className='bx bx-grid-alt'><BsFacebook /></i>
                            <i className='bx bx-grid-alt'><BsTwitter /></i>
                            <i className='bx bx-grid-alt'><AiOutlineInstagram /></i>
                            <i className='bx bx-grid-alt'><FiPlay /></i>
                            <i className='bx bx-grid-alt'><FaLink /></i>
                        </div>
                        <div className={styles.status}>
                            <h4>Status</h4>
                            <p>{detail && detail?.status}</p>
                        </div>
                        <div className={styles.original_language}>
                            <h4>Original Language</h4>
                            <p>{detail && detail?.original_language}</p>
                        </div>
                        <div className={styles.bugget}>
                            <h4>Bugget</h4>
                            <p>${detail && detail?.budget}</p>
                        </div>
                        <div className={styles.revanue}>
                            <h4>Revanue</h4>
                            <p>${detail && detail?.revenue}</p>
                        </div>
                        <div className={styles.production_companies}>
                            <h4>Production Companies</h4>
                            <div className={styles.production_companies_inner}>
                                {
                                    detail && detail?.production_companies.map((c, i) => (
                                        <h6 key={i}>{c.name}</h6>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DynamicPage