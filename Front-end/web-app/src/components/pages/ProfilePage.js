import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowLeft, FaBackward, FaBirthdayCake, FaEdit, FaFacebookMessenger, FaFemale, FaGraduationCap, FaLocationArrow, FaPhone, FaRuler, FaSpeakap, FaTimes, FaUser, FaWhatsapp, FaWindowClose } from 'react-icons/fa';
import { baseURL } from '../../api';
import { Link, useNavigate, useParams } from "react-router-dom";
import p1 from '../../assests/home/p1.jpeg';
import { Button } from '@mui/material';
import Footer from '../items/home/Footer';
import { userImageBASE_URL } from '../../api';
import MuiAlert from '@mui/material/Alert';
import profileImageNofemale from "../../assests/home/profileImageNofemale.jpg";
import profileImageNomale from "../../assests/home/profileImageNomale.jpg";
import ConfirmationDialog from './userProfilePicUploadToProfilePage'
import '../../App.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
function ProfilePage() {

    const navigate = useNavigate();


    const [userData, setUserData] = useState(null);
    const [editPanel, setEditPanel] = useState(false);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [relegion, seteligion] = useState('');
    const [cast, setCast] = useState('');
    const [language, setLanguage] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [occupation, setOccupation] = useState('');
    const [marritalStatus, setMarriedStatus] = useState('');
    const [matchData, setMatchData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [openDialog, setOpenDialog] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [setSelectedimg, setSelectedImage] = useState('');


    const handleClick = (event, imageValue) => {
      setSelectedImage(imageValue);
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const backButton = () => {
        navigate("/browse");
    };
    
    const editProfilePic = () => {
        setOpenDialog(true);
    };
    const openMoadl = () => {
        setIsModalOpen(true);
    };
      
    const closeModal = () => {
        setIsModalOpen(false);
    };
      
    useEffect(() => {
        const getMatchById = async () => {
          try {
            let response = await fetch(
                baseURL+`/selectUserProfile/${id}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
              }
            );
            let result = await response.json();
            console.log(response);
            if (response.status === 200) {
              setLoading(false);
              setMatchData(result.activeUserWithImagesAndDetails);
              setEmail(result.activeUserWithImagesAndDetails.email);
              setCountry(result.activeUserWithImagesAndDetails.details.livingPlace);
              setName(result.activeUserWithImagesAndDetails.name);
              setCity(result.activeUserWithImagesAndDetails.details.town);
              seteligion(result.activeUserWithImagesAndDetails.details.religion);
              setCast(result.activeUserWithImagesAndDetails.details.cast);
              setLanguage(result.activeUserWithImagesAndDetails.details.spokenLnguage);
              setMobile(result.activeUserWithImagesAndDetails.details.pno);
              setGender(result.activeUserWithImagesAndDetails.details.gender);
              setAge(result.activeUserWithImagesAndDetails.details.age);
              setMarriedStatus(result.activeUserWithImagesAndDetails.marriedStatus);
              console.log(result.activeUserWithImagesAndDetails);
            } else if (response.status === 401) {
              console.log("you are not autherized");
            } else {
              console.log("Some error occured");
            }
          } catch (err) {
            console.log("not Authorized", err);
          }
        };
        getMatchById();

    }, [id]);



    function openCard() {
        setEditPanel(true)
    }

    function closeCard() {
        setEditPanel(false)
    }
    const modalStyle = {
        display: 'block',
        position: 'fixed',
        zIndex: 1000, // Adjust as needed
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black overlay
      };
    
      const modalContentStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      };
    const handleCancel = () => {
        // Add your logic here to determine whether the dialog should be closed or not
        const shouldCloseDialog = true; // Set this to true or false based on your condition

        if (shouldCloseDialog) {
          setOpenDialog(false); // Close the dialog if shouldCloseDialog is true
        }
      };
    return (
        <div>   
           {loading &&(  <div className="centered-container" style={{  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}>
                          <span className="loader"></span>
                         </div>
            )}

            <div className="matchPageContainer">
                <div className="row">
                    <div className="col-12">
                        <button onClick={backButton} className="btn btn-primary mt-2">
                            <FaArrowLeft />
                        </button>
                    </div>
                </div>
                {matchData ? (
                    <div className='matchDataContainer'>
                    <div className='userData'>
                    <div className='openedCardImgUser userProf'>
                    {matchData.profilePic != null?(<img
  src={userImageBASE_URL+matchData.profilePic
  }
  alt='openedCard'
  className='userImageProfile bordered-image'
  onClick={(event) => handleClick(event, matchData.profilePic)}
/>):<img
  src={(gender == 'male')?profileImageNomale: profileImageNofemale
  }
  alt=''
  className='userImageProfile bordered-image'
  onClick={(event) => handleClick(event, matchData.profilePic)}
/>}   


<button onClick={editProfilePic} className="btn btn-primary mt-2"><FaEdit></FaEdit></button>
<Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={openMoadl}>View Profile Picture</MenuItem>
        <MenuItem onClick={editProfilePic}>Change Picture</MenuItem>
      </Menu>
    {isModalOpen &&(<div className="modal" style={modalStyle}>
        <span className="close" onClick={closeModal}>
         <FaWindowClose style={{ color: 'white', fontSize:'24px', margin:'7px',float:'right' }} onClick={closeModal} />
        </span>
      <div className="modal-content" style={modalContentStyle}>
        <img src={userImageBASE_URL + setSelectedimg} alt="Full Image"  style={{   borderRadius: '0' }} className="responsive-image"/>
      </div>
    </div>)}  
                            {(matchData.images.length > 0) && (
                            
                                <div className='imageArray'>
                                    {matchData.images.map((item, index) => (
                                        <div className='secondaryImg'>
                                            <img src={userImageBASE_URL+item} alt='openedCard' />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className='openedCardDetails'>
                            <div className='openedCardName'>{matchData.name}</div>
                            <div className='openedCardAddress'><FaLocationArrow className='addressIcon' /> {matchData.details.town}, {matchData.details.livingPlace}</div>
                            <div className='openedCardGeneralDetails'>
                                <div className='eachGeneralDetail'>
                                    <div className='eachGeneralDetailInner'><FaSpeakap className='gdIcon' /> {matchData.details.spokenLnguage}</div>
                                </div>
                                <div className='eachGeneralDetail'>
                                    <div className='eachGeneralDetailInner'><FaBirthdayCake className='gdIcon' />  {matchData.details.age}</div>
                                </div>
                                <div className='eachGeneralDetail'>
                                    <div className='eachGeneralDetailInner'><FaGraduationCap className='gdIcon' />  {matchData.details.education}</div>
                                </div>
                                <div className='eachGeneralDetail'>
                                    <div className='eachGeneralDetailInner'><FaFemale className='gdIcon' /> {matchData.details.gender}</div>
                                </div>
                                <div className='eachGeneralDetail'>
                                    <div className='eachGeneralDetailInner'><FaRuler className='gdIcon' /> {matchData.details.height}</div>
                                </div>

                            </div>
                            <div className='openedCardPostedOn'>{matchData.created_at}</div>
                            <div className='openedCardPostedOn'>{matchData.details.pno}</div>

                            <div className='viewButtonDivUserPage'>
                                <div >
                                    <Link onClick={openCard} className='editUserBtn'>edit info <FaEdit /></Link>
                                </div>
                                {  (
                                    <div >
                                        <Link to={`/userImagesUploader`} className='adminBtn'>Admin Page <FaUser /></Link>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
                ) : (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {!loading && (
                      <Alert severity="warning" style={{ width: '100%' }}>Your account has not been approved by admin.</Alert>

                    )}
                  </div>
                  
                )}



            </div>
            <ConfirmationDialog open={openDialog}  onClose={handleCancel} />

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
                                width: "auto",
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