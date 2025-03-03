import Card from '@/components/cards/Card';
import React from 'react';

export default function SearchCards({ data }) {
  return (
    <div>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item) => <Card key={item.id} item={item} />)
      ) : (
        <p>Hech narsa topilmadi</p>
      )}
    </div>
  );
}
