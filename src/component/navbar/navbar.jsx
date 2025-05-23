import React from 'react';
import Link from '../linkk/link';
import { FiAlignJustify } from "react-icons/fi";

const Navb = () => {
    const routes = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Portfolio", path: "/portfolio" },
  { id: 5, name: "Contact", path: "/contact" }
];

    return (
        <div>
            <ul className='flex flex-col gap-2 md:flex-row md:justify-evenly bg-blue-100 text-black text-xl'>
                <FiAlignJustify />
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </div>
    );
};

export default Navb;