"use client";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { CardData } from '../../../helpers/CardData';
import { useBlogs } from '@/store/blogs';
import { useTheme } from '@/context/ThemeContext';

export default function Input({ setData }) {
    const { setBlogs } = useBlogs()
    const [input, setInput] = useState("");
    const { theme } = useTheme()
    const fetchData = (value) => {
        if (!value) return setData([]);

        const result = CardData.filter((post) =>
            post.title && post.title.toLowerCase().includes(value.toLowerCase())
        );
        setBlogs(result)
        setData(result);
    };


    const handleChange = (e) => {
        setInput(e.target.value);
        fetchData(e.target.value);
    };

    return (
        <form className={`${theme === 'dark' ? 'bg-[#242535]' : 'bg-[#F4F4F5]'} p-2 rounded-[5px]`}>
            <input type="text" placeholder='Search' className='outline-none' value={input} onChange={handleChange} />
            <SearchIcon />
        </form>
    );
}
