import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="container">
            <h1>Không tìm thấy thông tin</h1>
            <Link to="/">Trở về màn hình Danh sách nhân viên</Link>
        </div>
    )
}

export default Error;