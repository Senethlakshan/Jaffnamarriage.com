import React from 'react'
import { useState } from 'react';
import { FaArrowRight, FaHamburger, FaSlidersH, FaTimes } from 'react-icons/fa';

import Footer from '../items/home/Footer';
import UserManagement from '../admin-components/UserManagement';
import Email from '../admin-components/Email';
import Complaints from '../admin-components/Complaints';
import Payment from '../admin-components/Payment';

function Admin() {

    const [adminNav, setAdminNav] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState("user");

    function toggleAdminNav() {
        setAdminNav(!adminNav)
    }
    function selectMenu(menu) {
        setSelectedMenu(menu);
    }
    return (
        <div className='adminPage' >
            <div className={adminNav ? 'filterOpen filterOptionsContainer' : 'filterClosed filterOptionsContainer'}>
                <div className='filterOptionsToggleBtn'>
                    {adminNav ? <FaTimes onClick={toggleAdminNav} /> : <FaSlidersH onClick={toggleAdminNav} />}
                </div>

                <div className='adminOptions'>
                    <div className='adminOption' onClick={() => selectMenu("user")} >User Management</div>
                    <div className='adminOption' onClick={() => selectMenu("payment")} >Payment</div>
                    <div className='adminOption' onClick={() => selectMenu("email")} >Email</div>
                    <div className='adminOption' onClick={() => selectMenu("complaint")} >Complaints</div>
                </div>
            </div>

            {(selectedMenu == "user") && <UserManagement />}
            {(selectedMenu == "email") && <Email />}
            {(selectedMenu == "complaint") && <Complaints />}
            {(selectedMenu == "payment") && <Payment />}



            <Footer />

        </div>
    )
}

export default Admin