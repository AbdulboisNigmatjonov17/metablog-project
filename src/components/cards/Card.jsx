import Link from 'next/link'
import React from 'react'

export default function Card({ item }) {
    return (
        <div className='max-w-[390px] h-[450px] border border-[#E8E8EA] rounded-xl flex flex-col gap-4 items-center p-4 justify-between'>
            <Link href={`/post/${item.id}`} >
                <div>
                    <img src={`${item.img}`} alt={`card ${item.title}`} className='w-[360px] h-[240px] object-cover rounded-md' />
                </div>
            </Link>
            <div className='w-full h-full flex flex-col justify-between'>
                <h3>Technolgy</h3>
                <h2 className='text-[#181A2A] font-semibold text-2xl leading-7'>{item.title}</h2>
                <div className='w-full flex items-center justify-between'>
                    <Link href={`/author/${item.user.name}`} className='flex items-center gap-3'>
                        <img src={`${item.user.img}`} alt="" className='w-[36px] h-[36px] rounded-full' />
                        <h4>{item.user.name}</h4>
                    </Link>
                    <h4>{item.user.date}</h4>
                </div>
            </div>
        </div>
    )
}
