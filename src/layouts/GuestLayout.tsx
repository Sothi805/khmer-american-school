import React from 'react'
import GuestHeader from '../components/GuestHeader'
import Footer from '../components/Footer'

const GuestLayout:React.FC<{children: React.ReactNode}> = ({children}) => {
    return(
        <>
            <div className="min-h-screen max-w-screen bg-linear-to-tr from-[#007FFF] to-[#FFF49C] pb-10">
                <GuestHeader/>
                <div className=''>
                    <main>{children}</main>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default GuestLayout