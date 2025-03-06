"use client"
import Link from 'next/link'
import Search from '../search/Input'
import { useTheme } from '@/context/ThemeContext';

export default function Navbar({ setData }) {
    const { theme, toggleTheme } = useTheme();
    return (
        <nav className={`h-[10dvh] fixed top-0 z-50 items-center w-[1280px] flex justify-between 
            ${theme === 'dark' ? 'bg-[#181A2A]' : 'bg-white'}`}>
            <div>
                <Link href={'/'}>
                    {
                        theme === "dark" ? <img src="/LogoDark.svg" alt="metablog-Logo" /> : <img src="/Logo.svg" alt="metablog-darkLogo" />
                    }

                </Link>
            </div>
            <ul className='flex gap-10'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/blog'}>Blog</Link></li>
                <li>Single Post</li>
                <li>Pages</li>
                <li>Contact</li>
            </ul>
            <div className='flex gap-10 items-center'>
                <Link href={'/search'}>
                    <Search setData={setData} />
                </Link>
                <button onClick={toggleTheme} className={`toggle-btn ${theme === "dark" ? "dark" : ""} cursor-pointer`}>
                    <img src="/Swich.png" alt="swith-mode" className={`toggle-circle ${theme === "dark" ? "dark" : ""}`} />
                </button>
            </div>
        </nav >
    )
}
