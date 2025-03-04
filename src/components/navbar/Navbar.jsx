"use client"
import Link from 'next/link'
import Search from '../search/Input'
import { useTheme } from '@/context/ThemeContext';

export default function Navbar({ setData }) {
    const { theme, toggleTheme } = useTheme();
    return (
        <header className='h-[10dvh] items-center w-full flex justify-between'>
            <div>
                <Link href={'/'}>
                {
                    theme === "dark" ? <img src="/LogoDark.svg" alt="metablog-Logo" /> : <img src="/Logo.svg" alt="metablog-darkLogo" /> 
                }
                    
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
                <button onClick={toggleTheme} className={`toggle-btn ${theme === "dark" ? "dark" : ""} cursor-pointer`}>
                    <img src="/Swich.png" alt="swith-mode" className={`toggle-circle ${theme === "dark" ? "dark" : ""}`}/>
                </button>
            </div>
        </header>
    )
}
