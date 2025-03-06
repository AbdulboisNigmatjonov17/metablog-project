"use client";

import Link from "next/link";
import Search from "../search/Input";
import { useTheme } from "@/context/ThemeContext";
import Logo from "../logo/Logo";
import { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

export default function Navbar({ setData }) {
    const { theme, toggleTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState()

    const handleOpenSearch = () => {
        setSearchOpen(!searchOpen);
    };

    return (
        <nav className={`fixed top-0 z-50 lg:w-full max-w-[1280px] w-full h-[10dvh] flex items-center justify-between px-10
            ${theme === "dark" ? "bg-[#181A2A] text-white" : "bg-white text-black"}`}>

            {/* Left side - Logo */}
            <Logo />

            {/* Desktop Nav Links */}
            <ul className="hidden lg:flex gap-10">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li>Single Post</li>
                <li>Pages</li>
                <li>Contact</li>
            </ul>

            {/* Right side - Search & Theme Switch */}
            <button onClick={handleOpenSearch} className="flex gap-10 items-center">
                <Link href="/search">
                    <Search setData={setData} />
                </Link>
            </button>
            <button onClick={toggleTheme} className="sm:hidden block toggle-btn cursor-pointer">
                <Image width={24} height={24} src="/Swich.png" alt="switch-mode" className={`toggle-circle ${theme === "dark" ? "dark" : ""}`} />
            </button>

            <div className="lg:hidden flex">
                <IconButton onClick={() => setOpen(true)}>
                    <MenuIcon fontSize="large" className={`${theme === 'dark' ? 'text-white' : 'text-black'}`} />
                </IconButton>
                <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                    <List className={`w-60 h-full ${theme == 'dark' ? 'bg-[#242535] text-white' : 'bg-[#F6F6F7] text-black'}`}>
                        <ListItem>
                            <button onClick={toggleTheme} className="toggle-btn cursor-pointer">
                                <Image width={24} height={24} src="/Swich.png" alt="switch-mode" className={`toggle-circle ${theme === "dark" ? "dark" : ""}`} />
                            </button>
                        </ListItem>
                        {[
                            { text: "Home", href: "/" },
                            { text: "Blog", href: "/blog" },
                            { text: "Single Post", href: "/" },
                            { text: "Pages", href: "/" },
                            { text: "Contact", href: "/contact" }
                        ].map(({ text, href }, index) => (
                            <ListItem
                                key={index}
                                className="hover:bg-[#e2e2e2]"
                                onClick={() => setOpen(false)}
                                component={Link}
                                href={href}
                            >
                                <ListItemText primary={text} className="cursor-pointer" />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </div>
        </nav>
    );
}
