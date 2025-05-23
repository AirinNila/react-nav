import React from 'react';

const Link = ({route}) => {
    return (
        <nav>
           
                <li className='hover:bg-blue-300 p-2'><a>{route.name}</a></li>
        
        </nav>
    );
};

export default Link;