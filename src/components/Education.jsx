import React from 'react'
import SMK from '../assets/SMK.png';

const Education = (gambar) => {
    return (
        <div className='bg-abusecond p-[24px] w-auto  h-fit flex items-center gap-[1em] rounded-2xl'>
            <a href="https://www.smktelkom-mlg.sch.id/" target='_blank' className='w-[15%] hover:scale-[1.05] hover:rotate-[-1.2deg] duration-300 ease-in-out cursor-pointer'>
                <img src={SMK} alt="SMK Telkom Malang" className='' />
                
            </a>
            <div className="flex flex-col">
                <h1>SMK Telkom Malang</h1>
                <p>Rekayasa Perangkat Lunak  -  NodeJS + ReactJS</p>
                <p>2022 - 2025</p>
            </div>
        </div>
    )
}

export default Education