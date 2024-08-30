import React from 'react'
import bg from '../assets/bg2.jpg';

const Background = () => {
    return (
        <div
            className="h-screen w-screen bg-cover bg-no-repeat bg-center fixed z-[-10]"
            style={{ backgroundImage: `url(${bg})` }}>
                <div className="bg-white/5 w-screen h-screen backdrop-blur-[7px] backdrop-brightness-75"></div>
        </div>
    )
}

export default Background