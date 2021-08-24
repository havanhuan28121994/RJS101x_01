import React from 'react';
import { Navbar } from 'reactstrap';

function Header(){
    return(
        <Navbar className="bg-primary mb-3 pt-3 pb-3" expand="md">
            <div className="container">
                <h1 className="text-white header-h1">Ứng dụng quản lý nhân sự v1.0</h1>
            </div>
        </Navbar>
    )
}

export default Header;