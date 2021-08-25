import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="container">
            <div>Không tìm thấy thông tin</div>
            <Link to="/">Trở về màn hình Danh sách nhân viên</Link>
        </div>
    )
}

export default Error;