import React from 'react';

const Link = ({route}) => {
    return (
        <nav>
           
                <li><a>{route.name}</a></li>
        
        </nav>
    );
};

export default Link;