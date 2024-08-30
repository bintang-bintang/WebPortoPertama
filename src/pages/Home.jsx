import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Card from '../components/Card';
import Divider from '../components/Divider';
import Contact from '../components/Contact';

import proyek1 from '../assets/Taskmanager.png';
import proyek2 from '../assets/Teknohub.png';
import proyek3 from '../assets/pro3.png';






const Home = () => {
  return (
    <>
      {/* About */}
      <div className="w-[100%] h-screen flex flex-col justify-center overflow-x-hidden gap-3">
        <h1 className='text-putih font-semibold font-primary text-[46px] mx-[12%] '>Halo, Saya<br />Bintang Aji Wibowo</h1>
        <p className='text-putih font-normal font-primary text-[18px] mx-[12%]  w-[40%]'>Pelajar SMK Telkom Malang yang antusias di pengembangan website, berfokus pada sisi frontend</p>
        <div className="mx-[12%]">
          <ul className='w-auto bg-second inline-flex px-[30px] py-[10px] items-center gap-4 rounded-[16px]'> {/*Aku ingin panjang ul ini mengikuti panjang dari semua konten */}
            <li className='text-putih text-[28px] hover:scale-[1.1] hover:translate-y-[-0.25rem] duration-150 ease-linear' ><a target="_blank" href="https://github.com/bintang-bintang"><FaGithub /></a></li>
            <li className='text-putih text-[28px] hover:scale-[1.1] hover:translate-y-[-0.25rem] duration-150 ease-linear' ><a target="_blank" href="https://www.linkedin.com/in/bintang-aji-wibowo-baab092bb/"><FaLinkedin /></a></li>
            <li className='text-putih text-[28px] hover:scale-[1.1] hover:translate-y-[-0.25rem] duration-150 ease-linear' ><a target="_blank" href="https://www.instagram.com/bintangajiwibowo/"><FaInstagram /></a></li>
          </ul>
        </div>
      </div>
      {/* Project */}
      <div className=" font-primary text-putih px-[12%] py-[4%] bg-abumain/80 w-[100%] h-max overflow-x-hidden overflow-y-hidden shadow-[rgba(58,79,100,0.5)_0px_-4px_24px_0px]">
        {/* <Divider /> */}
        <h1 className='font-medium text-3xl mb-4'>Proyek</h1>
        <div className="flex flex-wrap items-center lg:justify-center xl:justify-between gap-y-5">
          <Card gambar={proyek1} judul="Task Manager App" paragraf="Menyimpan data local dan mengimplementasikannya menjadi simple CRUD"/>
          <Card gambar={proyek2} judul="Toko Elektronik Landing Page" paragraf="Slicing desain landing page dari figma ke ReactJS dengan Tailwind css" />
          <Card gambar={proyek3} judul="Website Portofolio" paragraf="Pengembangan website portofolio dengan menggunakan ReactJS, Tailwind CSS, dan Framer Motion" />
          {/* <Card judul="Proyek ke 1" paragraf="Ini adalah proyek ke-1 ku" /> */}
        </div>
        <Divider />
        <Contact/>
      </div> {/*Div yang ini menyebabkan tambahan scroll ke arah horizontal */}
    </>
  );
}

export default Home;
