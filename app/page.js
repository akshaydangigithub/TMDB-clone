"use client"
import Card from '@/components/card/Card';
import Navbar from '@/components/navbar/Navbar';
import SearchHeader from '@/components/searchHeader/SearchHeader';

export const metadata = {
  title: "Tmdb Homepage"
}

const page = () => {

  return (
    <>
      <Navbar />
      <main>
        <SearchHeader />
        <Card />
      </main>
    </>
  )
}

export default page;