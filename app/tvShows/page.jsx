"use client"
import Card from '@/components/card/Card';
import Navbar from '@/components/navbar/Navbar';
import SearchHeader from '@/components/searchHeader/SearchHeader';
import TvShows from '@/components/tvShows/TvShows';

export const metadata = {
  title: "Tmdb Homepage"
}

const page = () => {

  return (
    <>
      <Navbar />
      <main>
        <SearchHeader />
        <TvShows />
      </main>
    </>
  )
}

export default page;