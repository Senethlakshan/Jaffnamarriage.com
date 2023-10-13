import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaTimes, FaFilter, FaHeart, FaLandmark, FaLocationArrow, FaSpeakap, FaBirthdayCake, FaGraduationCap, FaFemale, FaRuler, FaMale, FaRegHeart, FaInfoCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { userImageBASE_URL } from '../../api';
import { baseURL } from '../../api';
import axiosInstance from '../../api';
import '../../App.css'; // Import the external CSS file
import { useLocation } from 'react-router-dom';

import { FormControl, InputLabel, MenuItem, Select, Slider, colors } from '@mui/material';

function ExplorePage() {
    const [showFilter, setShowFilter] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);
    const [exploreItems, setExploreItems] = useState([]);
    const [exploreItemsOriginal, setExploreItemsOriginal] = useState([]);
    const [userData, setUserData] = useState({});
    const [genderFilter, setGenderFilter] = useState("");
    const [ageFilter, setageFilter] = useState("");
    const [openedCardID, setOpenedCardId] = useState(null);
    const [selectuserData, selectsetUserData] = useState(null);
    const [selectagevalue, setagetslectValue] = React.useState([20, 37]);
    const [setreligion, setReligion] = useState('');
    const [loading, setLoading] = useState(true); // Step 1: Initialize loading state
    const location = useLocation();
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    function toggleFilter() {
        setShowFilter(!showFilter)
    }
    function toggleFavorites() {
        setShowFavorites(!showFavorites)
    }

    function setGenderFilterFunc(gende) {
        setExploreItems(null);
        setLoading(true);
        const filtered = exploreItemsOriginal.filter((item) => {
            const age = item.details ? item.details.age : 0; // Assuming age is a property of 'details'
            const gender = item.details ? item.details.gender : '';
            const religion = item.details ? item.details.religion: '';
            return (
              age >= selectagevalue[0] &&
              age <= selectagevalue[1] &&
              (genderFilter === '' || gender === gende) &&
              ( !setreligion || religion === setreligion)
            );
        });
        setTimeout(() => {
            setLoading(false);
            setExploreItems(filtered);
            setGenderFilter(gende);
          }, 1000);
          

        //   let filteredItems = []

        //   if (gender === 'male') {
  
  
        //       if (genderFilter === 'male') {
        //           setGenderFilter('')
        //           setExploreItems(exploreItemsOriginal)
  
        //       } else {
  
  
        //           exploreItemsOriginal.forEach((item) => {
        //               if (item.details.gender === 'male') {
        //                   filteredItems.push(item)
        //               }
        //           })
        //           setExploreItems(filteredItems)
        //           setGenderFilter('male')
  
        //       }
  
  
  
        //   } else if (gender === 'female') {
  
        //       if (genderFilter === 'female') {
        //           setGenderFilter('')
        //           setExploreItems(exploreItemsOriginal)
  
        //       } else {
  
  
  
        //           exploreItemsOriginal.forEach((item) => {
        //               if (item.details.gender === 'female') {
        //                   filteredItems.push(item)
        //               }
        //           })
  
        //           setExploreItems(filteredItems)
        //           setGenderFilter('female')
        //       }
  
  
        //   }

    }

   

    function getItemById(id) {
        // Find the item with the matching ID in exploreItemsOriginal
        const item = exploreItemsOriginal.find((item) => item.id === id);
    
        // Return the found item if it exists, or a default object if not found
        return item || { photo: '', name: '', town: '', country: '', spokenLnguage: '', age: '', education: '', occupation: '', height: '', postedOn: '' };
    }
    


    function checkIfLiked(id) {

        if (userData.likedItems.includes(id)) {
            return true
        } else {
            return false
        }
    }

    function updateItemLikeStatus(id) {
        let likedItems = userData.likedItems;
    
        axiosInstance
            .post('/likeUsers/' + id)
            .then((response) => {
                console.log(response);
    
                // Check the response message to determine if the item was liked or unliked
                if (response.data.message === 'Item liked successfully.') {
                    // If the item was liked, add it to likedItems array
                    likedItems.push(id);
                } else if (response.data.message === 'Item unliked successfully.') {
                    // If the item was unliked, remove it from likedItems array
                    const index = likedItems.indexOf(id);
                    if (index !== -1) {
                        likedItems.splice(index, 1);
                    }
                }
    
                // Update the state with the updated likedItems array
                setUserData({ ...userData, likedItems: likedItems });
            })
            .catch((error) => {
                // Handle errors here
            });
    }
    


    useEffect(() => {
        
        const searchParams = new URLSearchParams(location.search);
      
        // Access individual query parameters
        const lookingFor = searchParams.get('lookingFor');
        const ageFrom = searchParams.get('ageFrom');
        const ageTo = searchParams.get('ageTo');
        const religion = searchParams.get('religion');
      
        // Now you have the values of the query parameters
        console.log('Looking For:', lookingFor);
        console.log('Age From:', ageFrom);
        console.log('Age To:', ageTo);
        console.log('Religion:', religion);
        // Using Axios for making the request
        
        if (!searchParams.has('lookingFor') && !searchParams.has('ageFrom') && !searchParams.has('ageTo') && !searchParams.has('religion')) {
        
         axiosInstance
         .get('/allActiveUsers')
         .then((response) => {
         // Handle the successful response here
         const data = response.data;
         if (data.activeUsersWithImagesAndDetails && data.activeUsersWithImagesAndDetails.length > 0) {
        // Access elements of the array safely
        setExploreItemsOriginal(data.activeUsersWithImagesAndDetails);
        setLoading(false);
        console.log(data.activeUsersWithImagesAndDetails);
        // ... rest of your code ...
        } else {
        setLoading(false);
        // Handle the case where the array is empty or undefined
        console.log('The array is empty or undefined');
       }
  

      })
      .catch((error) => {
       // Handle any errors here
       setExploreItemsOriginal([]);
       setLoading(false);  
       console.error('Error fetching data:', error);
      });
        }else{
            
            axiosInstance.post('/getSearchData', {
                
                  gender: lookingFor,        // Empty string for gender
                  ageFrom: ageFrom,        // Age range from 1
                  ageTo: ageTo,         // Age range up to 50
                  religion: religion,      // Empty string for religion
                
              })
              .then(response => {
                const data = response.data;
                console.log(data);
                if (data.activeUsersWithImagesAndDetails && data.activeUsersWithImagesAndDetails.length > 0) {
                // Access elements of the array safely
                setExploreItemsOriginal(data.activeUsersWithImagesAndDetails);
                setLoading(false);
                }else{
                setExploreItemsOriginal([]);
                setLoading(false);  
                }
              })
              .catch(error => {
                // Handle errors here
                setExploreItemsOriginal([]);
                setLoading(false);  
                console.error('Error fetching data:', error);
              });
              
        }
        

        let user = {
            name: 'user',
            likedItems: [],
        };
        
        axiosInstance
            .post('/likeUsers')
            .then((response) => {
                // Assuming the response contains an array of liked item IDs
                const likedItemIds = response.data.liked_item_ids;
        
                // Update the user object's likedItems array with the received data
                user.likedItems = likedItemIds;
    
            })
            .catch((error) => {
                // Handle errors here
            });
           
            setUserData(user);
    }, [])

    useEffect(() => {

        setExploreItems(exploreItemsOriginal);


    }, [exploreItemsOriginal])

    const likedItems = userData?.likedItems || [];

    const [rele, setRele] = React.useState('');

    const handleChangeRel = (event) => {
        setRele(event.target.value);
    };

    function openCard(id) {
        axiosInstance
            .get('/selectUserProfile/' + id)
            .then((response) => {
                const userDataArray = response.data.activeUserWithImagesAndDetails;
                selectsetUserData(userDataArray);
                console.log(userDataArray);
            })
            .catch((error) => {
                // Handle errors here
            });
    }
    function closeCard() {
        selectsetUserData(null)
    }

    const handleselectageChange = (event, newValue) => {
        setagetslectValue(newValue);
        setAgeFilterFunc();
    };
    function setAgeFilterFunc() {
        setExploreItems(null);
        setLoading(true);
        const filtered = exploreItemsOriginal.filter((item) => {
            const age = item.details ? item.details.age : 0; // Assuming age is a property of 'details'
            const gender = item.details ? item.details.gender : '';
            const religion = item.details ? item.details.religion: '';
            return (
              age >= selectagevalue[0] &&
              age <= selectagevalue[1] &&
              (genderFilter === '' || gender === genderFilter) &&
              ( !setreligion || religion === setreligion)
            );
        });
        setTimeout(() => {
            setLoading(false);
            setExploreItems(filtered);
          }, 1000);
          
    }
    
    
  const handleChangeReligion = (event) => {
        setExploreItems(null);
        setLoading(true);
    const selectedValue = event.target.value;

    const filtered = exploreItemsOriginal.filter((item) => {
        const details = item.details;
        const age = item.details ? item.details.age : 0; // Assuming age is a property of 'details'
        const gender = item.details ? item.details.gender : '';
      
            return (
              age >= selectagevalue[0] &&
              age <= selectagevalue[1] &&
              (genderFilter === '' || gender === genderFilter) && 
              ( !selectedValue || details.religion === selectedValue)
            );
      });
      setTimeout(() => {
        setLoading(false);
        setExploreItems(filtered);
        setReligion(selectedValue);
      }, 1000);

  };
    return (
        <div>   
            <div className='mainExploreContainer'>
            {loading &&(  <div className="centered-container" style={{  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}>
                          <span className="loader"></span>
                         </div>
            )}
                <div className={showFilter ? 'filterOpen filterOptionsContainer' : 'filterClosed filterOptionsContainer'}>
                    <div className='filterOptionsToggleBtn'>
                        {showFilter ? <FaTimes onClick={toggleFilter} /> : <FaFilter onClick={toggleFilter} />}
                    </div>

                    <div className='filterOptions'>
                        <div className='genderFFilter eachOption'>
                            <div>I'm Looking For</div>
                            <div className='smallFilterOptionCards'>
                                <div className={genderFilter === 'female' ? 'smallFilterOptionCardSelected smallFilterOptionCard' : 'smallFilterOptionCard'}>
                                    <FaFemale className='filterOptionIcon' onClick={() => setGenderFilterFunc("female")} />
                                </div>
                                <div className={genderFilter === 'male' ? 'smallFilterOptionCardSelected smallFilterOptionCard' : 'smallFilterOptionCard'}>
                                    <FaMale className='filterOptionIcon' onClick={() => setGenderFilterFunc("male")} />
                                </div>
                            </div>
                            <div>Age</div>
                            <div className='smallFilterOptionCards'>
                            <Slider
                             getAriaLabel={() => 'Temperature range'}
                             value={selectagevalue}
                             onChange={handleselectageChange}
                            valueLabelDisplay="auto"
                            />
                            </div>

                            <div>Relegion</div>
                            <div className='smallFilterOptionCards'>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                    <InputLabel id="demo-simple-select-standard-label">{setreligion? setreligion: 'Relegion'}</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={rele}
                                        onChange={handleChangeReligion}
                                        label= {setreligion? setreligion: 'Relegion'}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={"hindu"}>hindu</MenuItem>
                                        <MenuItem value={"cristian"}>cristian</MenuItem>
                                        <MenuItem value={"buddist"}>buddist</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Country"

                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Cast"

                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Language"

                                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                                />
                            </div>


                        </div>
                    </div>
                </div>
                <div>
                {exploreItems && exploreItems.length > 0 && !loading ? (
                    <div className='exploreItems'>

                    {exploreItems.map((item, index) => (
                        <div className='exploreItemCard' key={index} >
                            <div className='exploreItemImg'>
                                <div className='likeBtn'>
                                    {checkIfLiked(item.user_id) ? <FaHeart onClick={() => updateItemLikeStatus(item.user_id)} style={{ color: "red" }} /> : <FaRegHeart onClick={() => updateItemLikeStatus(item.user_id)} />}
                                </div>
                                <img src={userImageBASE_URL + item.images[0].image_path} alt={item.name} />
                            </div>
                            <div className='exploreItemDetails'>
   
                                <div className='nameAndAddressForCard' onClick={() => openCard(item.user_id)}>
                                    <div className='exploreItemName'>{item.name}</div>
                                    <div className='exploreItemAddress'><FaLocationArrow className='addressIcon' /> {item.details.town}, {item.details.livingPlace}</div>
                                </div>
   
                                <div className='generalDetails'>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaSpeakap className='gdIcon' /> {item.details.spokenLnguage}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaBirthdayCake className='gdIcon' />  {item.details.age}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaGraduationCap className='gdIcon' />  {item.details.education}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaFemale className='gdIcon' /> {item.details.gender}</div>
                                    </div>
                                    <div className='eachGeneralDetail'>
                                        <div className='eachGeneralDetailInner'><FaRuler className='gdIcon' /> {item.details.height}</div>
                                    </div>
   
                                </div>
                                <div className='exploreItemPostedOn'>{item.created_at
   }</div>
                            </div>
                        </div>
                    ))}
                </div>
                 ) : (
                 <div>   { !loading && ( <div className="no-data-found">
                    <FaInfoCircle></FaInfoCircle>
                    <p>No Data Found</p>
                  </div> )}
                  </div>
                 )}
               </div>


                <div className={showFavorites ? 'favOpen favoritesPane' : 'favClosed favoritesPane'}>
                    <div className={showFavorites ? 'favsToggleBtn' : 'favsToggleBtnClosed'}>
                        {showFavorites ? <FaTimes onClick={toggleFavorites} /> : <FaHeart onClick={toggleFavorites} style={{ color: "red" }} />
}
                    </div>
                    <div className='favorites'>
                        <div>Favorites</div>
                        <div className='favoritesList'>
                            {likedItems.map((item, index) => (
                                <div className='favoriteItem'>
                                    <div className='favImg'>
                                    <img src={userImageBASE_URL + getItemById(item.user_id)?.images[0]?.image_path} alt='fav' />
                                    </div>
                                    <div className='favName'>{getItemById(item.user_id).name} </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>


            {selectuserData  && (
                <div className='openedCardOverlay' onClick={closeCard}></div>
            )}
            {selectuserData && (

                <div className='openedCardContainer'>
                    <div className='openedCard'>
                        <div className='openedCardImg'>
                        {selectuserData && (
  selectuserData.profilePic.length > 0 ? (
    <img src={userImageBASE_URL + selectuserData.profilePic} alt='openedCard' />
  ) : (
    selectuserData.images.length > 0 ? (
      <img src={userImageBASE_URL + selectuserData.images[0]} alt='openedCard' />
    ) : null
  )
)}


                        </div>
                        <div className='openedCardDetails'>
                            <div className='openedCardName'>{selectuserData.name}</div>
                            {selectuserData && (
                             <div className='openedCardAddress'>
                              <FaLocationArrow className='addressIcon' /> {selectuserData.details && selectuserData.details.town ? selectuserData.details.town : 'Unknown'}
                             </div>
                            )}

                            <div className='openedCardGeneralDetails'>
                                <div className='eachGeneralDetail'>
                                    {selectuserData && selectuserData.details && selectuserData.details.spokenLnguage && (
                                      <div className='eachGeneralDetailInner'>
                                       <FaSpeakap className='gdIcon' /> {selectuserData.details.spokenLnguage}
                                      </div>
                                    )}
                                </div>
                                <div className='eachGeneralDetail'>
                                {selectuserData && selectuserData.details && selectuserData.details.age && (
                                    <div className='eachGeneralDetailInner'><FaBirthdayCake className='gdIcon' />  {selectuserData.details.age}</div>
                                )}
                                    </div>
                                <div className='eachGeneralDetail'>
                                {selectuserData && selectuserData.details && selectuserData.details.education && (
                                    <div className='eachGeneralDetailInner'><FaGraduationCap className='gdIcon' />  {selectuserData.details.education}</div>
                                )}
                                    </div>
                                <div className='eachGeneralDetail'>
                                {selectuserData && selectuserData.details && selectuserData.details.gender && (
                                    <div className='eachGeneralDetailInner'><FaFemale className='gdIcon' /> {selectuserData.details.gender}</div>
                                )}
                                    </div>
                                <div className='eachGeneralDetail'>
                                {selectuserData && selectuserData.details && selectuserData.details.height && (
                                    <div className='eachGeneralDetailInner'><FaRuler className='gdIcon' /> {selectuserData.details.height}</div>
                                )}
                                    </div>

                            </div>
                            <div className='openedCardPostedOn'>{selectuserData.created_at}</div>
                            <div className='viewButtonDiv'>
                                <div className='viewButton'>
                                    <Link to={`/match/${selectuserData.user_id}`} className='viewProfileBtn'>View Profile</Link>
                                </div>
                            </div>
                        </div>
                        <div className='closeCardBtn' onClick={closeCard}><FaTimes /></div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default ExplorePage