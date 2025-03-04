import React from 'react'

export default function Button({ text }) {
    return (
        <button className='py-3 px-5 border border-[#696A754D] rounded-md text-[#696A75] cursor-pointer hover:bg-[#696A75] hover:text-white'>{text}</button>
    )
}
