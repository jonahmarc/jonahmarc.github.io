import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <NavBar />
      <main className="flex flex-col flex-grow
          w-full lg:w-[1200px]
          px-5 lg:px-0">
            { children }
      </main>
      <Footer />
    </div>
  )
}
