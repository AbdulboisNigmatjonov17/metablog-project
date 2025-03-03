"use client"
import Link from 'next/link'
import Search from '../search/Input'

export default function Navbar({ setData }) {
    return (
        <header className='h-[10dvh] items-center w-full flex justify-between'>
            <div>
                <Link href={'/'}>
                    <img src="/Logo.svg" alt="metablog-Logo" />
                </Link>
            </div>
            <ul className='flex gap-10'>
                <li><Link href={'/'}>Home</Link></li>
                <li>Blog</li>
                <li>Single Post</li>
                <li>Pages</li>
                <li>Contact</li>
            </ul>
            <div className='flex gap-10 items-center'>
                <Link href={'/search'}>
                    <Search setData={setData} />
                </Link>
                <div>
                    <img src="/Swich.svg" alt="swith-mode" />
                </div>
            </div>
        </header>
    )
}
