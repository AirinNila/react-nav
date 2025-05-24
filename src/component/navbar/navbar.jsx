import React, { useState } from 'react';
import Link from '../linkk/link';
import { FiAlignJustify } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

const Navb = () => {
    const [open, setOpen] = useState(false)
    const routes = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Portfolio", path: "/portfolio" },
  { id: 5, name: "Contact", path: "/contact" }
];

    return (
        <div className='bg-blue-100 text-black p-4'>
             <div onClick={() => setOpen(!open)} className='md:hidden text-2xl'>
                {
                    open === true ? <IoCloseSharp /> :  <FiAlignJustify />
                }
                 </div>
            <ul className={`flex flex-col absolute md:static p-2 ml-2 md:ml-0 gap-2 md:flex-row md:justify-evenly bg-blue-100 text-black text-xl decoration-1
                ${open ? 'top-10' : '-top-80'}`}>
              
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </div>
    );
};

export default Navb;