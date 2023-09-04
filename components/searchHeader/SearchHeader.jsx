"use client"
import React from 'react'
import {motion} from "framer-motion"

const SearchHeader = () => {
    return (
        <>
            <motion.div className="search-header"
            initial={{scale:.8, opacity:0}}
            animate={{scale:1, opacity:1}}
            transition={{delay:.2, duration:.1, type:"spring", stiffness:100}}
            >
                <div className="inner">
                    <h1>Welcome</h1>
                    <h4>Millions of movies, TV shows and people to discover. Explore now.</h4>
                    <div className="search-box">
                        <input type="text" placeholder='Search for movies, tv shows, person....' 
                        />
                        <button>Search</button>
                    </div>

                </div>
            </motion.div>
        </>
    )
}

export default SearchHeader