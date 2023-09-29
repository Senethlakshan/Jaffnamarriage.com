import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowLeft, FaBackward, FaBirthdayCake, FaFacebookMessenger, FaFemale, FaGraduationCap, FaLocationArrow, FaPhone, FaRuler, FaSpeakap, FaTimes, FaWhatsapp } from 'react-icons/fa';

import { Link, useNavigate, useParams } from "react-router-dom";


function MatchDetailsPage() {

    const navigate = useNavigate();


    const [matchData, setMatchData] = useState(null);

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
        //       setMatchData(result);
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


        const dummyMatchData = {

            id: 1,
            name: 'Lakshmi Devi',
            gender: 'female',
            spokenLnguage: 'tamil',
            marritalStatus: 'unmarried',
            town: 'jaffna',
            country: 'sri lanka',
            age: '23',
            photo: 'https://picsum.photos/200/300',
            language: ['tamil', 'english', 'sinhala'],
            relegion: 'hindu',
            caste: 'brahmin',
            education: 'bachelor degree',
            occupation: 'doctor',
            height: '5.5ft',
            postedOn: '2021-09-01',

        }

        setMatchData(dummyMatchData);
    }, [id]);



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

                {matchData && (

                    <div className='matchDataContainer'>
                        <div className='matchData'>
                            <div className='openedCardImg'>
                                <img src={matchData.photo} alt='openedCard' />
                            </div>
                            <div className='openedCardDetails'>
                                <div className='openedCardName'>{matchData.name}</div>
                                <div className='openedCardAddress'><FaLocationArrow className='addressIcon' /> {matchData.town}, {matchData.country}</div>
                                <div className='openedCardGeneralDetails'>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaSpeakap className='gdIcon' /> {matchData.spokenLnguage}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaBirthdayCake className='gdIcon' />  {matchData.age}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaGraduationCap className='gdIcon' />  {matchData.education}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaFemale className='gdIcon' /> {matchData.occupation}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaRuler className='gdIcon' /> {matchData.height}</div>
                                    </div>

                                </div>
                                <div className='openedCardPostedOn'>{matchData.postedOn}</div>
                                <div className='viewButtonDiv'>
                                    <div className='contactBtn'>
                                        <Link to={`/match/${matchData.id}`} className='contactBtn'>Contact <FaWhatsapp /></Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                )}


            </div>
        </div>
    )
}

export default MatchDetailsPage