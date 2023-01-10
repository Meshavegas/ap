import React from 'react';
import illustration from '../assets/img.png'
import students from '../assets/students1.jpg'
import students1 from '../assets/students2.jpg'
import Carousel from './Carousel';
import Etablissement from './Etablissement';


export default function Corps() {
//     const [school, setSchool] = useState([{nom: 'Lycee bilingue de mimboman'
//     , image: Etablissement, description: `hello nous somme un établissement d'éducation secondaire pour les jeunes enfants`
// }]);
    return (
    <div>
        <section className='px-10 py-10 max-w-5xl grid grid-cols-1 md:px-20 lg:max-w-7xl lg:grid-cols-2 xl:max-w-full'>
            <div className='flex flex-col justify-center items-start px-2'>
                <h1 className=' text-4xl font-bold max-w-dm'>
                    Learn Easy Into a Virtual Class with MTN
                </h1>
                <p className=' my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque cupiditate nisi molestias provident ex soluta eos, laboriosam doloremque distinctio labore odio quis rem eaque aperiam consequatur atque assumenda. Sit.</p>
                <div className='bg-[#2563eb] text-white px-6 py-2 w-auto rounded-full flex mt-5'>Get started</div>

            </div>
            <div className='mt-10'> 
                <img src={illustration} alt="" />
            </div>
        </section>
        <section className='px-10 py-7 mt-5 m-auto flex flex-col items-center bg-gray-50'>
            <h1 className='text-2xl font-semibold max-w-dm pt-5'>
                    Quels cours nous proposons ?
                    {/* syst-me d'authentification */}
            </h1>
            <section className='max-w-2xl px-5 py-5 mt-5 grid grid-cols-1 gap-y-8 lg:max-w-5xl lg:grid-cols-3 m-auto gap-x-5 '>
                <div className='p-10 rounded shadow-lg bg-white flex flex-col justify-center md:items-center w-full text-center'>
                    <div className='rounded-full  border mb-5 p-4 border-emerald-400 text-emerald-400 text-3xl flex justify-center self-center'>
                        <ion-icon name="desktop"></ion-icon>
                    </div>
                    <h2 className='font-semibold text-center'>
                        Informatique
                    </h2>
                    <p className='text-sm text-gray-500 my-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui neque autem consectetur quae vero itaque iste, deserunt nemo nesciunt sit expedita eveniet velit doloribus modi odit! Molestiae ullam similique optio.
                    </p>
                    <a href="#">Learn more</a>
                </div>
                <div className='p-10 rounded shadow-lg bg-white flex flex-col justify-center md:items-center w-full text-center'>
                    <div className='rounded-full border mb-5 p-5 border-red-400 text-red-400 text-3xl flex justify-center self-center'>
                        <ion-icon name="logo-octocat"></ion-icon>
                    </div>
                    <h2 className='font-semibold text-center'>
                        E-learning
                    </h2>
                    <p className='text-sm text-gray-500 my-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui neque autem consectetur quae vero itaque iste, deserunt nemo nesciunt sit expedita eveniet velit doloribus modi odit! Molestiae ullam similique optio.
                    </p>
                    <a href="#">Learn more</a>
                </div>
                <div className='p-10 rounded shadow-lg bg-white flex flex-col justify-center md:items-center w-full text-center'>
                    <div className='rounded-full border mb-5 p-4 border-blue-400 text-blue-400 text-3xl flex justify-center self-center'>
                        <ion-icon name="bookmarks"></ion-icon>
                    </div>
                    <h2 className='font-semibold text-center'>
                        Classe virtuelle
                    </h2>
                    <p className='text-sm text-gray-500 my-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui neque autem consectetur quae vero itaque iste, deserunt nemo nesciunt sit expedita eveniet velit doloribus modi odit! Molestiae ullam similique optio.
                    </p>
                    <a href="3">Learn more</a>
                </div>
            </section>
        </section>
        <section className='px-10 py-10 mt-5 xl:px-20'>
            <h1 className='text-2xl font-semibold max-w-dm py-5 text-center'>
                    Qui sommes nous ?
                    {/* syst-me d'authentification */}
            </h1>
            <div className='my-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8'>
                <img src={students} alt="etudiant" className='cover rounded-lg'/>
                <div className='mt-5 lg:mt-0 lg:flex lg:flex-col lg:justify-center'>
                    <h1 className='text-lg font-semibold text-gray-600 '>Un groupe qui oeuvre pour éducation en Afrique </h1>
                    <p className='mt-3 text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quae repudiandae architecto, nam voluptate porro beatae quaerat officiis deserunt modi, rem aliquid dolorem minima facilis officia ipsum numquam inventore! Dolorum. </p>
                </div>
            </div>
            <div className='my-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8 reverse grid-reverse'>
                <img src={students1} alt="etudiant" className='cover rounded-lg lg:order-1'/>
                <div className='mt-5 lg:mt-0 lg:flex lg:flex-col lg:justify-center'>
                    <h1 className='text-lg font-semibold text-gray-600'>{"Une initiative visant à digitaliser l'apprentissage"}</h1>
                    <p className='mt-3 text-gray-500 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae quae repudiandae architecto, nam voluptate porro beatae quaerat officiis deserunt modi, rem aliquid dolorem minima facilis officia ipsum numquam inventore! Dolorum. </p>
                </div>
            </div>
        </section>
        <section className='my-5 xl:px-20 xl:mb-20 '>
            <h1 className='text-2xl mb-10 font-semibold max-w-dm py-5 text-center'>
                    Etablissement
                    {/* syst-me d'authentification */}
            </h1>
            <div className=''>
                <div className='flex justify-center items-center gap-2'>
                    <Carousel />
                </div>
            </div>
        </section>
        <section className='px-10 py-20 mt-5 bg-gray-100'>
            <h1 className='text-2xl font-semibold max-w-dm py-5 mb-10 text-center'>
                    Contacts
                    {/* syst-me d'authentification */}
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-2 xl:px-10 '>
                <div>
                    <div className='flex p-6 bg-white rounded mt-6 md:mt-0'>
                        <div className='rounded-full border  p-3 bg-blue-500 text-white text-xl flex '>
                            <ion-icon name="call"></ion-icon>
                        </div>
                        <div className='ml-4'>
                            <h2 className=' font-semibold text-gray-900'>Phone Number</h2>
                            <span className='text-gray-400'>+2370699-663-269</span>
                        </div>
                    </div>
                    <div className='flex p-6 bg-white rounded mt-2'>
                        <div className='rounded-full border  p-3 bg-blue-500 text-white text-xl flex '>
                            <ion-icon name="mail"></ion-icon>
                        </div>
                        <div className='ml-4'>
                            <h2 className=' font-semibold text-gray-900'>Mail Address</h2>
                            <span className='text-gray-400'>nysentreprise@gmail.com</span>
                        </div>
                    </div>
                    <div className='flex p-6 bg-white rounded mt-2'>
                        <div className='rounded-full border  p-3 bg-blue-500 text-white text-xl flex '>
                            <ion-icon name="pin"></ion-icon>
                        </div>
                        <div className='ml-4'>
                            <h2 className=' font-semibold text-gray-900'>Location</h2>
                            <span className='text-gray-400'>Rue fouda près des collecteurs</span>
                        </div>
                    </div>
                </div>
                <div className='flex p-6 bg-white rounded mt-2 md:mt-0'>
                    <div className='flex flex-col w-full'>
                        <h2 className=' font-semibold text-gray-900 mb-5'>Send Message</h2>
                        <form action="" className='flex'>
                            <textarea name="" id="" cols="30" rows="10" className='focus:outline-0 flex-1 mb-5'
                            placeholder='Envoyer un message'
                            ></textarea>
                        </form>
                        <button className='py-2 px-10 self-start bg-blue-500 rounded text-white'>Envoyer</button>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
  )
}

