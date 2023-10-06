import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaDumpster, FaEdit } from 'react-icons/fa';
import p1 from '../../assests/home/p1.jpeg'
import { Button } from '@mui/material';

function UserManagement() {

    const [userList, setUserList] = useState(null);

    const [editPanel, setEditPanel] = useState(false);

    function openCard() {
        setEditPanel(true)
    }

    function closeCard() {
        setEditPanel(false)
    }


    const [email, setEmail] = useState('lakshmi@mail.com');
    const [name, setName] = useState('Lakshmi Devi');
    const [country, setCountry] = useState('Sri Lnaka');
    const [city, setCity] = useState('Jaffna');
    const [relegion, seteligion] = useState('Hindu');
    const [cast, setCast] = useState('brahman');
    const [language, setLanguage] = useState('tamil');
    const [mobile, setMobile] = useState('+94761234567');
    const [gender, setGender] = useState('female');
    const [age, setAge] = useState('23');
    const [occupation, setOccupation] = useState('Doctor');
    const [marritalStatus, setMarriedStatus] = useState('Single');
    useEffect(() => {
        // fetch('http://localhost:8000/api/explore')
        // .then(res => res.json())
        // .then(data => {
        //     setExploreItems(data)
        // })




    }, [])

    const userListDummy = [
        {
            id: 1,
            name: 'Lakshmi Devi',
            gender: 'female',
            spokenLnguage: 'tamil',
            marritalStatus: 'unmarried',
            town: 'jaffna',
            country: 'sri lanka',
            age: '23',
            photo: p1,
            language: ['tamil', 'english', 'sinhala'],
            relegion: 'hindu',
            caste: 'brahmin',
            education: 'bachelor degree',
            occupation: 'doctor',
            height: '5.5ft',
            postedOn: '2021-09-01',
            postedOn: '2021-09-01',
        },
        {
            id: 2,
            name: 'Lakshmi Devi',
            gender: 'female',
            spokenLnguage: 'tamil',
            marritalStatus: 'unmarried',
            town: 'jaffna',
            country: 'sri lanka',
            age: '23',
            photo: p1,
            language: ['tamil', 'english', 'sinhala'],
            relegion: 'hindu',
            caste: 'brahmin',
            education: 'bachelor degree',
            occupation: 'doctor',
            height: '5.5ft',
            postedOn: '2021-09-01',
        },
        {
            id: 3,
            name: 'Lakshmi Devi',
            gender: 'female',
            spokenLnguage: 'tamil',
            marritalStatus: 'unmarried',
            town: 'jaffna',
            country: 'sri lanka',
            age: '23',
            photo: p1,
            language: ['tamil', 'english', 'sinhala'],
            relegion: 'hindu',
            caste: 'brahmin',
            education: 'bachelor degree',
            occupation: 'doctor',
            height: '5.5ft',
            postedOn: '2021-09-01',
        },
        {
            id: 4,
            name: 'john doe',
            gender: 'male',
            spokenLnguage: 'tamil',
            marritalStatus: 'unmarried',
            town: 'jaffna',
            country: 'sri lanka',
            age: '23',
            photo: p1,
            language: ['tamil', 'english', 'sinhala'],
            relegion: 'hindu',
            caste: 'brahmin',
            education: 'bachelor degree',
            occupation: 'doctor',
            height: '5.5ft',
            postedOn: '2021-09-01',
        },
    ]

    useEffect(() => {

        setUserList(userListDummy);


    }, [userList])


    return (
        <div className='takeFullWithAndHeight'>
            {userList && (
                <div className='userList' >

                    {userList.map((item, index) => (
                        <div key={index} className='eachUserFromList'>
                            <div className='mainDetailUser'>
                                <div className='bigText'>{item.id + " : " + item.name}</div>
                                <div>{item.country + " - " + item.town}</div>
                            </div>

                            <div className='iconsCont'>
                                <div className='labelApproved'>
                                    approved
                                </div>
                            </div>
                            <div className='iconsCont'>

                                <div onClick={openCard} className='iconCircleEdit'><FaEdit /></div>
                                <div className='iconCircleDelete'><FaDumpster /></div>
                            </div>


                        </div>
                    ))}

                </div>
            )}


            {(editPanel == true) && (
                <div className='openedCardOverlay' onClick={closeCard}></div>
            )}
            {(editPanel == true) && (

                <div className='openedCardContainer'>
                    <div className='profEdit'>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Mobile
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your mobile"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                City
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Country
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your county"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Marrital Status
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your Marrital status"
                                value={marritalStatus}
                                onChange={(e) => setMarriedStatus(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                language
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your language"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                cast
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your cast"
                                value={cast}
                                onChange={(e) => setCast(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Age
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your Age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>

                        <Button
                            variant="contained"
                            style=
                            {{
                                width: "350px",
                                backgroundColor: "#fefefe",
                                color: "#ff9800",
                            }}
                            size="large"

                            onClick={openCard}
                        >Update</Button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default UserManagement