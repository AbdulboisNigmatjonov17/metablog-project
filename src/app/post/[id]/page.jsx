"use client"
import Link from "next/link";
import { CardData } from "../../../../helpers/CardData";
import Text2 from "@/components/text/Text2";
import Ads from "@/components/ads/Ads";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Post({ params }) {
    const [param, setParam] = useState('')
    const { theme } = useTheme()
    
    useEffect(() => {
        const getParams = async () => {
            const param = await Promise.resolve(params)
            setParam(param.id)
        }
        getParams()
    }, [])
    const post = CardData.find((item) => String(item.id) === String(param));



    if (!post)
        return (
            <div className="flex justify-center items-center h-screen text-red-500 text-xl">
                Post not found
            </div>
        );

    return (
        <section className="p-6 lg:w-[800px] rounded-lg mt-25 flex flex-col gap-8 lg:mx-auto mx-5">
            <div className="w-full flex justify-start">
                <Text2 style={'bg-[#4B6BFB] text-white'} />
            </div>
            <h1 className="text-4xl font-semibold">{post.title}</h1>
            <Link href={`/author/${post.user.name}`} className="w-full flex items-center gap-3 text-[#696A75]">
                <Image src={post.user.img} alt={post.user.name} width={28} height={28} className="rounded-full" />
                <h2 className=" ">{post.user.name}</h2>
                <p className="">{post.user.date}</p>
            </Link>
            <Image height={460} width={800} src={`${post.img}`} alt={`post ${post.title}`} className="rounded-xl object-cover" />
            <div className="flex flex-col gap-2.5">
                <p className="">{post.description.firstPart.text}</p>
                <p className="">{post.description.secondPart.text}</p>
            </div>
            <h3 className="font-semibold text-2xl">Research Your Destination</h3>
            <div>
                <p className="">{post.description.thirdPart.text}</p>
                <p className="">{post.description.fourthPart.text}</p>
            </div>
            <h3 className="font-semibold text-2xl">Plan Your Itinerary</h3>
            <p className="">{post.description.fifthPart.text}</p>
            <div className={`${theme === 'dark' ? 'bg-[#242535]' : 'bg-[#F6F6F7]'} border-l-[4px] p-8 rounded-xl border-[#E8E8EA]`}>
                <h3 className="font-normal italic text-2xl">{post.description.motivition}</h3>
            </div>
            <Ads />
        </section>
    );
}
