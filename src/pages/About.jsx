import React from 'react'
import Divider from '../components/Divider'
import Education from '../components/Education'
import { GiGraduateCap } from "react-icons/gi";
import { FaCode } from "react-icons/fa";
import Skills from '../components/Skills';






const About = () => {
  return (
    <div class="font-primary text-putih w-[100%] h-fit bg-abumain/80 px-[12%] py-[8%]">
      <h1 className='font-semibold text-[24px] italic'>About</h1>
      <p className='text-putih/50'>Cerita tentang Bintang!</p>
      <Divider />
      <p className='text-justify'>Halo, nama saya Bintang Aji Wibowo, saya berusia 18 tahun dan berasal dari Malang. Saya adalah seorang junior web developer yang sangat antusias dengan pengembangan website, khususnya di bidang frontend. Sebelumnya, saya fokus pada pengembangan backend, namun saya merasa perlu untuk memperluas pengetahuan saya dengan menjelajahi sisi frontend. Oleh karena itu, saat ini saya lebih fokus pada pengembangan frontend. Saya menempuh pendidikan di SMK Telkom Malang, di mana saya mempelajari dasar pemrograman dengan Java dan mendalami pengembangan website menggunakan Node.js dan React. Saat ini, saya juga sedang mempelajari Laravel sebagai backend dan tetap terus memperdalam pengetahuan saya di React sebagai frontend.</p>
      <Divider />
      <h1 className='font-semibold text-[24px] flex items-center gap-2 italic mb-2'><GiGraduateCap className='text-[32px]'/> Education</h1>
      <Education />
      <Divider />
      <h1 className='font-semibold text-[24px] flex items-center gap-2 italic mb-2'><FaCode/> Skills</h1>
      <Skills/>
    </div>
  )
}

export default About