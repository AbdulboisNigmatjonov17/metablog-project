import Link from 'next/link'
import Text2 from '../text/Text2'


export default function Card({ item }) {
    return (
        <div className='max-w-[390px] h-[450px] border border-[#E8E8EA] rounded-xl flex flex-col gap-4 items-center p-4 justify-between'>
            <Link href={`/post/${item.id}`} >
                <div className='overflow-hidden'>
                    <img src={`${item.img}`} alt={`card ${item.title}`} className='w-[360px] h-[240px] object-cover rounded-md transition duration-300 ease-in-out hover:scale-125 ' loading='lazy'/>
                </div>
            </Link>
            <div className='w-full h-full flex flex-col justify-between items-start'>
                <Text2 style={'text-[#4B6BFB] bg-[#4B6BFB0D]'}/>
                <h2 className={' font-semibold text-2xl leading-7'}>{item.title}</h2>
                <div className='w-full flex items-center justify-between'>
                    <Link href={`/author/${item.user.name}`} className='flex items-center gap-3'>
                        <img src={`${item.user.img}`} alt={`card ${item.id}`} className='w-[36px] h-[36px] rounded-full' />
                        <h4>{item.user.name}</h4>
                    </Link>
                    <h4>{item.user.date}</h4>
                </div>
            </div>
        </div>
    )
}
