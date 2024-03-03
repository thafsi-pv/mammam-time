import React from 'react'

function WhatsOnMind({ items }) {
    console.log("🚀 ~ WhatsOnMind ~ items:", items)

    return (
        <div className='flex flex-col '>
            <p className='text-[25px] font-semibold'>What's on your mind?</p>

            <div className='flex gap-3 w-full overflow-y-scroll'>
                {items?.map((item) => (
                    <div className='min-w-fit'>
                        <img
                            className='w-36 ' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}>
                        </img>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhatsOnMind