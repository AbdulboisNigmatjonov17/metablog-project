"use client"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { CardData } from '../../../helpers/CardData';

export default function Input({ setData }) {
    const [input, setInput] = useState("");

    // const fetchData = (value) => {
    //     fetch(CardData)
    //         .then((res) => res.json())
    //         .then((json) => {
    //             const result = json.filter((user) => {
    //                 return (
    //                     value &&
    //                     user &&
    //                     user.name &&
    //                     user.name.toLowerCase().includes(value.toLowerCase())
    //                 );
    //             });
    //             setData(result)
    //             // console.log(result);
    //         });
    // };

    const fetchData = (value) => {
        const result = CardData.filter((user) => {
            return (
                value &&
                user &&
                user.name &&
                user.name.toLowerCase().includes(value.toLowerCase())
            );
        });
        setData(result);
    };


    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };
    return (
        <form className='bg-[#F4F4F5] p-2 rounded-[5px]'>
            <input type="text" placeholder='Search' className='outline-none' value={input} onChange={(e) => handleChange(e.target.value)} />
            <SearchIcon />
        </form>
    )
}
