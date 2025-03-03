import React from 'react'
import { CardData } from '../../../helpers/CardData'
import Card from './Card'

export default function Cards() {
    return (
        <section className=''>
            <div className='w-full flex flex-wrap gap-5 lg:justify-between md:justify-center px-0 sm:px-5'>
                {
                    CardData.map((item) => (
                        <Card key={item.id} item={item} />
                    ))
                }
            </div>
        </section>
    )
}
