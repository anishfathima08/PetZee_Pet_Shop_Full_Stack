import React from 'react'
import { maganize_imgs } from '../../assets/assets'

const Magazine = () => {
    return (
        <>
            <div className="px-5 lg:px-20 py-5">
                <div className='text-center h-[56px] text-3xl md:text-5xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500'>
                    <p>🐾PetZee Family🐾</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:gap-16 py-5">
                    <div className="flex-shrink-0 relative w-48 h-48 lg:w-72 lg:h-72 rounded-full shadow-lg border-4 border-purple-500 overflow-hidden">
                        <img src={maganize_imgs[0].img} alt="magzine_img_1"className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                    </div>
                    <div className="text-center lg:text-start w-full p-5 mt-8 border border-violet-500 rounded-bl-3xl rounded-tr-3xl">
                        <p className="text-gray-700 font-medium italic">"PetZee transformed my pet parenting journey!"</p>
                        <p className="py-4 text-gray-600">
                            "When I brought home my Golden Retriever, Max, I was overwhelmed with questions about his care. Thankfully, I discovered PetZee! From premium food options to durable toys, I needed was just a click away. The blog articles were a lifesaver, offering tips on training and keeping Max healthy. The customer support team went above and beyond to help me choose the perfect grooming kit. Max couldn’t be happier. Thank you, PetZee, for making pet parenting so easy and joyful!"
                        </p>
                        <p className="block font-semibold text-gray-800 text-end">– David D.</p>
                    </div>
                </div>
                <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-16 py-5">
                    <div className="text-center lg:text-start w-full p-5 mt-8 border border-violet-500 rounded-bl-3xl rounded-tr-3xl">
                        <p className="pt-4 text-gray-700 font-medium italic">
                            "PetZee has been a game-changer for my furry friend and me!"
                        </p>
                        <p className="py-4 text-gray-600">
                            "When I first got my cat, I was unsure how to provide the best care. PetZee made it so easy with their wide range of products tailored for cats. From cozy beds to nutritious meals and fun toys, everything I needed was right there. What really stood out were their blog articles—they taught me so much about cat behavior and care. Plus, the customer service was exceptional, guiding me to the perfect scratching post that my cat absolutely loves. PetZee has truly made my journey as a cat parent joyful and stress-free. Highly recommend!"
                        </p>
                        <p className="block font-semibold text-gray-800 text-end">– Emily R.</p>
                    </div>
                    <div className="flex-shrink-0 relative w-48 h-48 lg:w-72 lg:h-72 rounded-full shadow-lg border-4 border-purple-500 overflow-hidden">
                        <img src={maganize_imgs[1].img} alt="magzine_img_1" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Magazine