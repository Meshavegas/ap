import React, { useState } from 'react';
import logoW from '../assets/logoW.png'

const Footer = () => {
    const [active, setActive] = useState(false);
    return (
        <div className='p-20 py-10 pt-10 m-auto bg-black xl:pt-20 xl:pb-10 absolute w-full'>
            <ul className='max-w-2xl grid grid-cols-1 sm:max-w-4xl sm:grid-cols-2 md:max-w-4xl md:grid-cols-3 lg:max-w-6xl lg:grid-cols-4 xl:max-w-7xl xl:grid-cols-5'>
                <div className='mt-10 mb-15'>
                    <img src={logoW} alt="logo" className='w-10' />
                </div>
                <li className='flex flex-col justify-between mt-10'>
                    <div className='uppercase text-gray-200 font-medium mb-2' onClick={()=>setActive(!active)}>
                        Liens utiles
                    </div>
                    <ul className={`flex flex-col text-sm text-gray-500 justify-start`}>
                        <li className='my-2'><a href="">Home</a></li>
                        <li className='my-2'>Nos formations</li>
                        <li className='my-2'>About us</li>
                        <li className='my-2'>Contact</li>
                        <li className='my-2'>connexion</li>
                    </ul>
                </li>
                <li className='flex flex-col mt-10'>
                    <div className='uppercase text-gray-200 font-medium mb-2' onClick={()=>setActive(!active)}>
                        Classes virtuelles
                    </div>
                    <ul className={`flex flex-col text-sm text-gray-500`}>
                        <li className='my-2'><a href="">IC3 </a></li>
                        <li className='my-2'>Maintenance</li>
                        <li className='my-2'>Electronique</li>
                    </ul>
                </li>
                <li className='flex flex-col mt-10'>
                    <div className='uppercase text-gray-200 font-medium mb-2' onClick={()=>setActive(!active)}>
                        Nos cours
                    </div>
                    <ul className={`flex flex-col text-sm text-gray-500`}>
                        <li className='my-2'><a href="">Inforamtique </a></li>
                        <li className='my-2'>E-learning</li>
                        <li className='my-2'>Classe virtuelles</li>
                    </ul>
                </li>
                <li className='flex flex-col justify-between mt-10'>
                    <div className='uppercase text-gray-200 font-medium mb-2' onClick={()=>setActive(!active)}>
                        Contacts
                    </div>
                    <ul className={`flex flex-col text-sm text-gray-500`}>
                        <li className='my-2'><a href="">Home</a></li>
                        <li className='my-2'>Nos formations</li>
                        <li className='my-2'>About us</li>
                        <li className='my-2'>Contact</li>
                        <li className='my-2'>connexion</li>
                    </ul>
                </li>
            </ul>
            <div className='h-px bg-gray-900 mt-20'></div>
            <p className='text-gray-500 text-sm text-center mt-4'>Copyright ©  2023-2024 All rights reserved.</p>
            {/* ajouter les card pour les etablissements avec un système d'étoile */}
        </div>
    );
}

export default Footer;
