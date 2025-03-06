import { CardData } from '../../../helpers/CardData';
import { useMemo } from 'react'
import Text2 from '../text/Text2';
import Link from 'next/link';

export default function BlogBanner() {
    const randomCards = useMemo(() => {
        const shuffled = CardData.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 1);
    }, [CardData]);

    return (
        <section>
            <div className='w-full flex flex-col items-center text-center mt-25 mb-10'>
                <h2 className='font-semibold text-3xl leading-9'>Page TItle</h2>
                <div className='flex gap-3'>
                    <h4>Home</h4>
                    <h4 className='text-[#E8E8EA]'>|</h4>
                    <h4>Link One</h4>
                </div>
            </div>
            <div style={{ backgroundImage: 'url(/Banner.png)'}} className='w-full h-[450px] bg-cover flex items-end rounded-xl'>
                {
                    randomCards.map((item) => (
                        <div key={item.id} className='w-[600px] h-[300px] p-10 flex flex-col gap-6 justify-between rounded-xl text-white'>
                            <div className='w-full flex flex-col items-start'>
                                <Text2 style={'bg-[#4B6BFB] text-white'} />
                            </div>
                            <Link href={`/post/${item.id}`}>
                                <h1 className='font-semibold text-4xl leading-10'>{item.title}</h1>
                            </Link>
                            <div className='w-full flex items-center gap-5 text-[16px] leading-6'>
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
        </section>
    )
}
