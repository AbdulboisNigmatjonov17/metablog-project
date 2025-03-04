import Ads from '@/components/ads/Ads'
import BlogBanner from '@/components/banner/BlogBanner'
import Button from '@/components/btn/Button'
import Cards from '@/components/cards/Cards'
import React from 'react'

export default function Blog() {
    return (
        <section>
            <BlogBanner />
            <Cards />
            <div className='w-full flex justify-center'>
                <Button text={'View All Post'} />
            </div>
            <Ads />
        </section>
    )
}
