import Ads from '@/components/ads/Ads'
import Banner from '@/components/banner/Banner'
import Button from '@/components/btn/Button'
import Cards from '@/components/cards/Cards'
 

export default function Home() {
  return (
    <section>
      <Banner />
      <Ads />
      <h3 className='text-[#181A2A] font-bold text-2xl leading-7'>Latest Post</h3>
      <Cards />
      <div className='w-full flex justify-center'>
        <Button text={'View All Post'} />
      </div>
      <Ads />
    </section>
  )
}
