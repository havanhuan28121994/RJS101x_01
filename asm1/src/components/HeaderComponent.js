import React from 'react';
import { Navbar } from 'reactstrap';

function Header(){
    return(
        <Navbar className="bg-primary" expand="md">
            <p className="text-white">Ứng dụng quản lý nhân sự v1.0</p>
        </Navbar>
    )
}

export default Header;