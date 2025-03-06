import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <div className='flex items-center gap-4
                h-[70px] py-3'>
            <img className='w-auto h-[22px]' src="/icons/linkedin.png" alt="" />
            <img className='w-auto h-[22px]' src="/icons/github.png" alt="" />
            <img className='w-auto h-[22px]' src="/icons/gmail.png" alt="" />
        </div>
    )
}
