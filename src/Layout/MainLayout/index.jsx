import React from 'react';
import {Footer,Navbar} from '../../shared'
const MainLayout = ({children}) => {
    return (
        <div className='relative'>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
};

export default MainLayout;