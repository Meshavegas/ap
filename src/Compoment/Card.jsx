import React, { useState } from 'react';
import students from '../assets/students1.jpg'

const Card = ({prop}) => {
     const [editable, setsEditable] = useState(false);
     const handleClick = () => {
        setsEditable(!editable);
    };
     return (
         <div
            className='
                flex
                text-sm
                w-50 h-50 bg-gray-100 md:w-85 md:h-85
                items-center
                
                rounded-md'
         >
            <div className='flex flex-col'>
                <img src={students} alt=""/>
                <div className='p-6'>
                    <h1 className='font-bold text-xl text-black-500 mb-3'>Polytechnique</h1>
                    <p className='text-gray-500 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque doloribus voluptate sit voluptatum est, deleniti molestiae unde dolore magni. Esse explicabo dolorum accusamus asperiores dolores dolor nulla est animi. Quidem!</p>
                    <div className='text-lg text-orange-300 flex justify-between items-baseline'>
                        <span>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                        </span>
                        <span className='text-gray-600 text-sm'>
                            <a href="#">Plus</a>
                        </span>
                    </div>
                </div>
            </div>
         </div>
     );
}

export default Card;
