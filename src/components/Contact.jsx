import React from 'react'
import { IoPlayForward } from "react-icons/io5";


const Contact = () => {
    return (
        <div className='flex flex-col bg-second px-6 py-4 rounded-[12px] gap-1 shadow-xl hover:scale-[1.004] cursor-pointer duration-200 group'>
            <h1 className='flex items-center text-[24px] font-medium'>
                <IoPlayForward  className='mr-2 group-hover:scale-[1.3] group-hover:rotate-[-25deg] group-hover:shadow-xl shadow-white duration-300'/>Memulai!
            </h1>
            <p>Saya sangat berharap untuk membahas peluang kerja sama atau projek via email. Saya sangat menghargai pesan yang dikirimkan, karena hal ini dapat menjadi langkah awal menuju kerja sama yang menguntungkan</p>
            <a href='https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=bintangajiwibowo@gmail.com' target="_blank" className="bg-abusecond px-3 py-2 rounded-[12px] w-max hover:bg-putih hover:text-hitam duration-100">Kontak saya!</a>
        </div>
    )
}

export default Contact