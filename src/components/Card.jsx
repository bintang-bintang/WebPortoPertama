import React from 'react';


const Card = ({ gambar, judul, paragraf, skills, link }) => {

    return (
        <div className="bg-main w-[29em] h-[20em] rounded-[8px] border border-abusecond hover:scale-[1.015] transition-transform ease-in-out duration-[245ms] group shadow-xl">
            <a className='cursor-pointer' href={link ? (link):(null)} target='_blank'>

                {gambar ?
                    (<div className="w-auto h-[12em] bg-cover bg-no-repeat bg-center rounded-t-[8px] group-hover:brightness-50 duration-300" style={{ backgroundImage: `url(${gambar})` }} ></div>) :
                    (<div className="w-auto h-[12em] bg-cover bg-no-repeat bg-center rounded-t-[8px]" >Tidak ada gambar</div>)}
                <div className="border-b border-abusecond font-primary text-putih bg-second w-auto h-[8em] px-8 py-3 rounded-b-[8px] flex flex-col gap-1">
                    <h1 className='text-[16px] font-medium group-hover:text-abu group-hover:text-abusecond'>{judul}</h1>
                    <p className='text-[14px] font-normal'>{paragraf}</p>
                    {skills ? (<div className="flex gap-5">
                        {skills}
                    </div>) : ("")}

                </div>
            </a>
        </div>
    );
}

export default Card;
