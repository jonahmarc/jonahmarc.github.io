import React from 'react'

export default function Footer() {
    return (
        <div className='flex items-center gap-4
                h-[70px] py-10'>
            <a href="https://www.linkedin.com/in/jonahmarc/" target="__blank"><img className='w-auto h-[18px]' src="/icons/linkedin.png" alt="linkedin logo" /></a>
            <a href="https://github.com/jonahmarc" target="__blank"><img className='w-auto h-[18px]' src="/icons/github.png" alt="github logo" /></a>
            <a href="mailto:jonahmarc.batomalaque@gmail.com" target="__blank"><img className='w-auto h-[18px]' src="/icons/gmail.png" alt="gmail logo" /></a>
        </div>
    )
}
