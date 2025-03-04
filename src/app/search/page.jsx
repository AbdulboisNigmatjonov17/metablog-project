'use client'

import Card from '@/components/cards/Card';
import { useBlogs } from '@/store/blogs';

export default function SearchCards() {
  const { blogs } = useBlogs()
  console.log(blogs)
  return (
    <div className='w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
      {blogs.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
