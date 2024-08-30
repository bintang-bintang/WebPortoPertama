import React from 'react';
import Card from '../components/Card';
import proyek1 from '../assets/Taskmanager.png';
import proyek2 from '../assets/Teknohub.png';

const Placeholder = () => {
    return (
        <div className='bg-red-500 w-screen h-screen flex justify-center'>
            <div className="bg-blue-500 w-[75vw] h-max m-[12%] flex flex-wrap items-center justify-between gap-y-5">
                <Card judul="Proyek ke 1" paragraf="Ini adalah proyek ke-1 ku" />
                <Card gambar={proyek2} judul="Proyek ke 2" paragraf="Ini adalah proyek ke-2border border-putihborder border-putihborder border-putihborder border-putih ku lorem lorem lreom" />
                <Card gambar={proyek1} judul="Proyek ke 3" paragraf="Ini adalah proyek ke-3 ku" />
            </div>
        </div>
    );
}

export default Placeholder;
