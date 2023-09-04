"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

const Navbar = () => {
  return (

    <>
      <nav>
        <motion.div className="nav-prt1"
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay: .2}}
        >
          <div className="logo">
            <h1
            >TMDB</h1>
            <div className="logo-inner"></div>
          </div>
          <Link href="/">Popular Movies</Link>
          <Link href="/tvShows">Popular TV Shows</Link>
        </motion.div>
      </nav>
    </>
  )
}

export default Navbar