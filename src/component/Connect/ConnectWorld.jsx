import React from 'react'
import one from '../../assets/ConnectImage/one.jpg'
import two from '../../assets/ConnectImage/two.jpg'
import three from '../../assets/ConnectImage/three.jpg'
export default function ConnectWorld() {
    const cards = [
        {
            img: one, name: 'Our Strategy', para: 'Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus, at sodales eros laoreet a. Quisque facilisis lorem augue, sit amet'
        },
        {
            img: two, name: 'Leadership', para: 'Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus, at sodales eros laoreet a. Quisque facilisis lorem augue, sit amet'
        },
        {
            img: three, name: 'Innovation Driven', para: 'Suspendisse vulputate eros in velit fermentum cursus. Nulla fringilla justo tellus, at sodales eros laoreet a. Quisque facilisis lorem augue, sit amet'
        },
    ]
    return (
        <>
            <div className='min-h-[80vh] p-8   bg-[#E6F50D] w-full'>

                <div className=' '>
                    <h1 className=' text-center font-bold mb-3'>We Connect the World</h1>

                    {/* map here availabe */}


                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  '>
                        {
                            cards.map((data, index) =>
                                <div className=' bg-lime-50 p-2  shadow-md shadow-black rounded-md' key={index}>
                                    <img src={data.img} alt="" />
                                    <div className=' text-center mt-2'>
                                        <h1 className=' font-bold'>{data.name}</h1>
                                        <p>{data.para}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>

            </div>
            
        </>
    )
}
