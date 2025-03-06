"use client"
import { CardData } from '../../../helpers/CardData';
import { useMemo } from 'react'
import Link from 'next/link';
import Text2 from '../text/Text2';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

export default function () {
    const randomCards = useMemo(() => {
        const shuffled = CardData.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 1);
    }, [CardData]);
    const { theme } = useTheme()
    return (
        <div className='w-full relative mt-25 mb-20'>
            <Image
                className="w-full object-cover rounded-xl"
                width={1200}
                height={600}
                src="/Banner.png"
                alt="banner-img"
                priority
            />
            {
                randomCards.map((item) => (
                    <div key={item.id} className={`shadow-2xl w-[600px] h-[300px] p-10 lg:flex flex-col gap-6 justify-between rounded-xl hidden absolute left-[50px] -bottom-[50px] ${theme === 'dark' ? 'bg-[#181A2A]' : 'bg-white'}`}>
                        <div className='w-full flex flex-col items-start'>
                            <Text2 style={'bg-[#4B6BFB] text-white'} />
                        </div>
                        <Link href={`/post/${item.id}`}>
                            <h1 className='font-semibold text-4xl leading-10'>{item.title}</h1>
                        </Link>
                        <div className='w-full flex items-center gap-5 text-[#97989F] text-[16px] leading-6'>
                            <Link href={`/author/${item.user.name}`} className='flex items-center gap-3'>
                                <img className='w-[36px] h-[36px] rounded-full' src={item.user.img} alt={`user ${item.user.name}`} />
                                <h5>{item.user.name}</h5>
                            </Link>
                            <h5>{item.user.date}</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
