import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useStateContext } from '../contexts/ContextProvider';
import Button  from './Button';

import cart1 from './../data/Cart1.jpeg';
import cart2 from './../data/Cart2.webp';
import cart3 from './../data/Cart3.jpeg';
import CartItem from './CartItem';

const Cart = () => {
  const cartData = [
    {
      S3image: cart1,
      name: 'Gucci Shoe',
      quantity: '10',
      price: '250',
    },
    {
      S3image: cart2,
      name: 'Nike Shirt',
      quantity: '26',
      price: '450',
    },
    {
      S3image: cart3,
      name: 'Nike Shoe',
      quantity: '12',
      price: '190',
    },
    
  ];

  const { handleClick } = useStateContext();

  return (
    <div className="bg-half-transparent w-full fixed nav-item top-0 right-0 z-20">
      <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Orders</p>
          <Button
            onClick={() => handleClick('cart')} 
            icon={<MdOutlineCancel />}
            color="rgb(153, 171, 180)"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
          />
        </div>
        {cartData?.map((item, index) => (
          <div key={index}>
              <CartItem item={item} />
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default Cart;