import React from 'react';

const List = ({className, children }: {children?: React.ReactNode, className?: string} ) => {
    return (
        <li className={`pr-4 font-semibold text-secondary hover:text-primary duration-200 ${className}`}>
            {children}
        </li>
    );
};

export default List;