import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({children, to, ...props}) => { 
    const resolved = useResolvedPath(to);
    const match = useMatch({path: resolved.pathname, end: true})

    return (
        <Link
        style={{ color: match && '#F60', borderBottom: match ? '2px solid #F60' : '2px solid #999'}}
        to={to}
        {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;