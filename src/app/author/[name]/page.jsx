"use client"
import Cards from "@/components/cards/Cards";
import { CardData } from "../../../../helpers/CardData";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AuthorPage({ params }) {
    const [param, setParam] = useState('')
    const post = CardData.find((item) => item.user.name == param);
    const { theme } = useTheme()

    useEffect(() => {
        const getParams = async () => {
            const param = await Promise.resolve(params)
            const str = param.name.split('%')
            const total = str[0] + " " + str[1].slice(2)
            setParam(total)
        }
        getParams()
    }, [])

    if (!post)
        return (
            <div className="flex justify-center items-center h-screen text-red-500 text-xl">
                Author not found
            </div>
        );

    return (
        <section className="mt-25 flex flex-col items-center">
            <div className={`${theme === 'dark' ? 'bg-[#242535]' : 'bg-[#F6F6F7]'} w-full p-12 rounded-xl flex flex-col items-center`}>
                <div className="flex justify-center items-center gap-3 text-left">
                    <Image src={post.user.img} alt={post.user.name} width={64} height={64} className="rounded-full" />
                    <div>
                        <h2 className="text-2xl font-bold mt-3">{post.user.name}</h2>
                        <p className="text-gray-500">{post.user.about.job}</p>
                    </div>
                </div>
                <p className="max-w-[670px] my-4 text-gray-700 text-center">{post.user.about.text}</p>
                <div className="text-white flex justify-center gap-2">
                    <div className="bg-[#696A75] p-2 rounded-md">
                        <Facebook className="block transition hover:scale-125 cursor-pointer duration-700 ease-in-out " />
                    </div>
                    <div className="bg-[#696A75] p-2 rounded-md">
                        <Twitter className="transition  hover:scale-125 cursor-pointer duration-700 ease-in-out " />
                    </div>
                    <div className="bg-[#696A75] p-2 rounded-md">
                        <Instagram className="transition  hover:scale-125 cursor-pointer duration-700 ease-in-out " />
                    </div>
                    <div className="bg-[#696A75] p-2 rounded-md">
                        <YouTube className="transition  hover:scale-125 cursor-pointer duration-700 ease-in-out " />
                    </div>
                </div>
            </div>
            <h3 className='text-[#181A2A] font-bold text-2xl leading-7 mt-5'>Latest Post</h3>
            <div >
                <Cards />
            </div>
        </section>
    );
}
