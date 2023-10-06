import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowLeft, FaBackward, FaBirthdayCake, FaEdit, FaFacebookMessenger, FaFemale, FaGraduationCap, FaLocationArrow, FaPhone, FaRuler, FaSpeakap, FaTimes, FaUser, FaWhatsapp } from 'react-icons/fa';

import { Link, useNavigate, useParams } from "react-router-dom";
import p1 from '../../assests/home/p1.jpeg';
import { Button } from '@mui/material';
import Footer from '../items/home/Footer';

function ProfilePage() {

    const navigate = useNavigate();


    const [userData, setUserData] = useState(null);
    const [editPanel, setEditPanel] = useState(false);

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


    const { id } = useParams();
    const backButton = () => {
        navigate("/browse");
    };

    useEffect(() => {
        // const getMatchById = async () => {
        //   try {
        //     let response = await fetch(
        //       `https://bckend/api/match/${id}`,
        //       {
        //         method: "GET",
        //         headers: {
        //           "Content-Type": "application/json",
        //           // 'Content-Type': 'application/x-www-form-urlencoded',
        //         },
        //       }
        //     );
        //     let result = await response.json();
        //     if (response.status === 200) {
        //       setuserData(result);
        //     } else if (response.status === 401) {
        //       console.log("you are not autherized");
        //     } else {
        //       console.log("Some error occured");
        //     }
        //   } catch (err) {
        //     console.log("not Authorized", err);
        //   }
        // };
        // getMatchById();


        const dummyUserData = {

            id: 1,
            name: 'Lakshmi Devi',
            gender: 'female',
            spokenLnguage: 'tamil',
            marritalStatus: 'unmarried',
            town: 'jaffna',
            country: 'sri lanka',
            age: '23',
            photo: p1,
            allPhotos: [p1, p1, p1],
            language: ['tamil', 'english', 'sinhala'],
            relegion: 'hindu',
            caste: 'brahmin',
            education: 'bachelor degree',
            occupation: 'doctor',
            height: '5.5ft',
            postedOn: '2021-09-01',
            contact: '+94761234567',
            isAdmin: true,

        }

        setUserData(dummyUserData);
    }, [id]);

    function openCard() {
        setEditPanel(true)
    }

    function closeCard() {
        setEditPanel(false)
    }

    return (
        <div>


            <div className="matchPageContainer">
                <div className="row">
                    <div className="col-12">
                        <button onClick={backButton} className="btn btn-primary mt-2">
                            <FaArrowLeft />
                        </button>
                    </div>
                </div>

                {userData && (

                    <div className='matchDataContainer'>
                        <div className='userData'>
                            <div className='openedCardImgUser userProf'>
                                <img src={userData.photo} alt='openedCard' className='userImageProfile' />
                                {(userData.allPhotos.length > 1) && (
                                    <div className='imageArray'>
                                        {userData.allPhotos.map((item, index) => (
                                            <div className='secondaryImg'>
                                                <img src={item} alt='openedCard' />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className='openedCardDetails'>
                                <div className='openedCardName'>{userData.name}</div>
                                <div className='openedCardAddress'><FaLocationArrow className='addressIcon' /> {userData.town}, {userData.country}</div>
                                <div className='openedCardGeneralDetails'>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaSpeakap className='gdIcon' /> {userData.spokenLnguage}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaBirthdayCake className='gdIcon' />  {userData.age}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaGraduationCap className='gdIcon' />  {userData.education}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaFemale className='gdIcon' /> {userData.occupation}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaRuler className='gdIcon' /> {userData.height}</div>
                                    </div>

                                </div>
                                <div className='openedCardPostedOn'>{userData.postedOn}</div>
                                <div className='openedCardPostedOn'>{userData.contact}</div>

                                <div className='viewButtonDivUserPage'>
                                    <div >
                                        <Link onClick={openCard} className='editUserBtn'>edit info <FaEdit /></Link>
                                    </div>
                                    {userData.isAdmin && (
                                        <div >
                                            <Link to={`/administration`} className='adminBtn'>Admin Page <FaUser /></Link>
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>


                )}


            </div>


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


            <Footer />

        </div>
    )
}

export default ProfilePage