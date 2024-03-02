import React from 'react';
import Iten
function ItemPage() {
  const item = {
    id: 1,
    img: '/src/assets/img/pieee.png',
    title: 'Juice Grapes',
    desc: 'This is a delicious grape juice.',
    price: 46,
  };

  return (
    <div>
      <ItemCard item={item} />
    </div>
  );
}

export default ItemPage;
