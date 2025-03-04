 
import { CardData } from '../../../helpers/CardData';
import { useMemo } from 'react'
import Link from 'next/link';

export default function () {
    const randomCards = useMemo(() => {
        const shuffled = CardData.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 1);
    }, [CardData]);

    return (
        <div className='w-full relative mt-10 mb-20'>
            <img className='w-full h-[600px] object-cover rounded-xl' src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UD9DIcFnoU6CVzcg7snWGs60I7LWYzSZN0~VK7x2POagsLQJwLSoy2jpyxGk45Ak6n0DHlcHU16fQjSmzYDVfpU6Htn-zfaLDxmOFYoJ~bVx8sUP-reqqnyt3uq6BakoiwCkZxdt52K87KiN67QJkZGlO8MHdFktTJ2quoiJqw1ikglOmIt3VLSVyDz0BXcb64sLtm8GWlajWudfabIwA60urDavuF2tCz3Px4ds3qIVfkrR7x-SOZblJVRvh7vdAyoa6aMTX1MDVIHc665~I3Sl3B5C9MIXJGKxD36blH6WvcYeW3-Hvfp57KhyoCD9nr5DkLb~XJJAoF89kixfWA__" alt="banner-img" />
            {/* <div> */}
            {
                randomCards.map((item) => (
                    <div key={item.id} className='shadow-2xl p-10 flex flex-col gap-6 justify-between rounded-xl absolute left-[50px] -bottom-[50px] bg-white'>
                        <Link href={`/post/${item.id}`}>
                            <h4>Technology</h4>
                            <h1>{item.title}</h1>
                        </Link>
                        <div className='w-full flex items-center gap-5'>
                            <Link href={`/author/${item.user.name}`} className='flex items-center gap-3'>
                                <img className='w-[36px] h-[36px] rounded-full' src={item.user.img} alt={`user ${item.user.name}`} />
                                <h5>{item.user.name}</h5>
                            </Link>
                            <h5>{item.user.date}</h5>
                        </div>
                    </div>
                ))
            }
            {/* </div> */}
        </div>
    )
}
