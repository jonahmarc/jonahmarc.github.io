import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className='flex items-center gap-4
                h-[70px] py-10'>
            <img className='w-auto h-[18px]' src="/icons/linkedin.png" alt="linkedin logo" />
            <img className='w-auto h-[18px]' src="/icons/github.png" alt="github logo" />
            <img className='w-auto h-[18px]' src="/icons/gmail.png" alt="gmail logo" />
        </div>
    )
}
